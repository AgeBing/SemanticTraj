"""
Mysql 查询辅助类
"""

import MySQLdb
from MySQLdb.cursors import DictCursor
from DBUtils.PooledDB import PooledDB
 
class Mysql(object):

    __pool = None

    def __init__(self):
        self._conn = Mysql.__getConn()
        self._cursor = self._conn.cursor()
 
    @staticmethod
    def __getConn():
        """
        @summary: 静态方法，从连接池中取出连接
        @return MySQLdb.connection
        """
        if Mysql.__pool is None:
            __pool = PooledDB(creator = MySQLdb, mincached = 1, maxcached = 20,
                              host = '10.76.0.184', port = 3306, user = 'root', 
                              passwd = '123456', db = 'mobiledata', 
                              use_unicode = True, cursorclass = DictCursor)
        return __pool.connection()
 
    def get_all(self, sql, param = None):
        if param is None:
            count = self._cursor.execute(sql)
        else:
            count = self._cursor.execute(sql, param)
        if count > 0:
            result = self._cursor.fetchall()
        else:
            result = False
        return result

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