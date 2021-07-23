### 配置页面，无dist目录
##### 先保存源代码，上传文件到主分支
##### 再新建gh-pages分支
```
git branch gh-pages
```
##### 切换到gh-pages分支
```
git checkout gh-pages
```
##### 删除其他文件，保留下面几个文件
```
dis
node_modules
.gitignore
```
##### 并把dist目录复制出来
```
 mv dist/* ./
```
##### 上传到github
##### 开启github page预览