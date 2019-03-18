"""
Mysql 查询辅助类
"""

import MySQLdb
from MySQLdb.cursors import DictCursor, SSDictCursor
from DBUtils.PooledDB import PooledDB
 
class Mysql(object):

    __pool = None

    def __init__(self):
        self._conn, self._conn2 = Mysql.__getConn()
        self._cursor = self._conn.cursor()
        self._cursor2 = self._conn2.cursor()
 
    @staticmethod
    def __getConn():
        """
        @summary: 静态方法，从连接池中取出连接
        update: 改为使用SSDictCursor，节约传输内存和时间
        @return MySQLdb.connection
        """
        connection = MySQLdb.connect( host="10.76.0.184",user="root",
            passwd="123456",db="mobiledata",
            cursorclass = SSDictCursor, charset = 'utf8', use_unicode = True)
        connection2 = MySQLdb.connect( host="10.76.0.184",user="root",
            passwd="123456",db="mb10w",
            cursorclass = SSDictCursor, charset = 'utf8', use_unicode = True)
        # if Mysql.__pool is None:
        #     __pool = PooledDB(creator = MySQLdb, mincached = 1, maxcached = 20,
        #                       host = '10.76.0.184', port = 3306, user = 'root', 
        #                       passwd = '123456', db = 'mobiledata', 
        #                       use_unicode = True, cursorclass = SSDictCursor, charset = 'utf8')
        # return __pool.connection()
        return connection, connection2
 
    def get_all(self, sql, param = None):
        if param is None:
            self._cursor.execute(sql)
        else:
            self._cursor.execute(sql, param)
        return self._cursor

    def get_all_new_con(self, sql, param = None):
        if param is None:
            self._cursor2.execute(sql)
        else:
            self._cursor2.execute(sql, param)
        return self._cursor2

    def query(self, data):
        sql_str = "select {0} from {1} {2}".format(data['column'], 
            data['table'], data['limit'])
        result = []
        try:
            result = self.get_all(sql_str)
        except Exception as e:
            print(e)
        finally:
            return result