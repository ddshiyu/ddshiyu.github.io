---
title: 使用github搭建一个免费的图床
date: '2019-08-08 08:00:00'
categories:
 - 分享
tags:
 - 图床
---

之前都是用都是一些商业的图床，例如[sm.ms](https://sm.ms/)，[麦克图床](https://macimg.com), [img.sm](https://img.sm/)，[路由图床](https://imgtu.com/)，但是很多都有空间限制，有时候图片还会丢失。

但是其实GitHub也可以当做图床，而且还是免费的。

#### 一，新建一个存储图片的github仓库
![](https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/Snipaste_2021-07-04_10-59-39.png)
必须是public仓库

#### 二，生成token
![](https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/Snipaste_2021-07-04_11-00-57.png)
![](https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/Snipaste_2021-07-31_12-42-43.png)
![](https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/Snipaste_2021-07-04_11-01-29.png)
![](https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/Snipaste_2021-07-04_11-02-53.png)
按照图示步骤，注意：repo必须打钩

#### 三，使用图床工具

![](https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/Snipaste_2021-07-04_11-03-30.png)
我用的是picgo，这个工具，支持mac和windows系统，就是移动端没有
![](https://cdn.jsdelivr.net/gh/ddshiyu/pic@main/Snipaste_2021-07-04_11-04-09.png)
然后按照表单填写信息，指定路劲如果是根目录可以不填，然后就可以上传图片了

图片的格式是 `https://cdn.jsdelivr.net/gh/用户名/仓库名@分支名/图片名`