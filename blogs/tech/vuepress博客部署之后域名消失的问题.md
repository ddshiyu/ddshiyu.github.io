---
title: vuepress博客部署之后域名消失的问题
date: 2022-08-11
categories:
 - 技术
tags:
 - 博客
publish: true
---
:::tip
最近写博客的时候，发现部署完再访问自定义域名总是404
:::
<!-- more -->

查了一下发现的是域名被重置了，需要再根目录文件夹`.vuepress`下面的`public`目录中新建一个CNAME的文件，里面填上你的域名，部署完再访问发现就可以了。

![](https://blog.jdqiong.cn/202208111828744.png)