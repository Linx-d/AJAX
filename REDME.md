### …or create a new repository on the command line



```
echo "# AJAX" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:Linx-d/AJAX.git
git push -u origin master
                
```

### …or push an existing repository from the command line



```
git remote add origin git@github.com:Linx-d/AJAX.git
git push -u origin master
```



# AJAX分类

## 围栏管理

- 增加围栏
- 获取所有围栏信息
- 修改围栏参数
- 绑定用户围栏
- 解绑用户围栏
- 获取指定围栏的所有用户
- 获取指定用户的所有围栏



## 设备管理

- 插入设备
- 批量插入设备
- 批量删除设备
- 设备上传数据
- 根据设备绑定状态查询设备
- 根据设备imei查询在线状态



## 告警管理

- 获取用户告警信息



## 用户管理

- 获取用户最新位置信息
- 获取用户历史数据信息
- 根据用户id获取设备最新数据
- 根据用户id获取用户信息
- 绑定设备
- 解绑设备



## 企业微信接口

- 解绑企业微信
- 获取企业微信jssdkConfig



## TEST

- test



# 代码提交规范

实际项目中可能存在多人同时开发的情况，良好的规范能够避免很多不必要的麻烦。

\1. 如果是多人合作的仓库，每次修改文件前，需要先进行一次 git pull 操作，将本地仓库同步为服

务器上最新版本。

\2. 每次提交代码，填写commit的内容，主要包括修改的目的和内容，以及已知未完成的内容。首行

开头最好注明本次commit的类别，使用下面7个标识。



~~~
feat：新功能（feature） 
fix：修补bug 
docs：文档（documentation） 
style： 格式（不影响代码运行的变动） 
refactor：重构（即不是新增功能，也不是修改bug的代码变动） 
test：增加测试 
chore：构建过程或辅助工具的变动
~~~



\3. 尽量避免不同模块、不同功能的代码提交到同一次commit中。

\4. 针对已上线或者正式项目的维护工作，添加新功能或模块最好使用分支功能，待功能测试通过后再

合并到主分支。

\5. 仓库中，需要把项目工程文件和开发记录文档都添加进来，放到不同的文件目录下。