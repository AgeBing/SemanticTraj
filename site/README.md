#Prepare

+ python: 3.6.3
+ django: 1.11.1

#Build

1.`./frontend/index.html`文件修改`js`路径为：

```
<script src="static/bundle/bundle.js"></script>
```

2.安装npm依赖，在`./frontend`目录下运行命令：

```
npm install
```

3.打包前端代码，在`./frontend`目录下运行命令：

```
npm run build
```

#Debug

1.`./frontend/index.html`文件修改`js`路径为：

```
<script src="bundle.js"></script>
```

2.启动服务器	在当前目录中运行命令：

```
python manage.py runserver
```
3.安装npm依赖	在`./frontend`目录下运行命令：

```
npm install
```

4.启动前端调试	进入`./frontend`目录下运行命令：

```
npm run dev
```