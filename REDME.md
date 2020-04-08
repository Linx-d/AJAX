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