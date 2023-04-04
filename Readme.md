# VRL-Lab's Structure
这里是VRL-Lab实验室主页的相关源代码，此readme主要方便后续维护者的工作。

---

首先这个东西分两个部分
- 前端（阿里云公网服务器，IP为 106.14.213.79）
- 后端（在董老师办公室的3090服务器一台，系统为Ubuntu 20.04）

主要可以实现：
- 实验室主页 (静态html)
    > 纯前端运行
- 部分同学的工作成果展示 (python的streamlit库 + 内网穿透)
    > 前端 + 后端配合
---

## 前端
整个工程包的路径是 `/var/www/html_dws`，里面有所有的html，css文件

### 首先是各个文件夹

- .idea、.vscode、forms没有用到过，可忽略

- assets
    - css: 里面含有css样式，主要用到的是 `assets/css/style.css` 和 `assets/css/theme.css` 两个文件
    - img: 存放非project page类(见下面的project部分)的页面包含的各式各样的图片，`team`文件夹用来存放`team.html`中人员介绍的头像图，`readme`文件夹用来存放readme的插图，其他子文件夹的图片暂未用到，以及其他直接存放在`assets/img`路径下的图片并未进行分类，后续可根据管理需要进行重构
    - js、scss、vendor三个文件夹暂未使用，但先保留

- project: 存放同学们已发表的论文，一个文件夹为一篇论文的介绍
    - index.html: 每篇论文的静态展示(project page)，含摘要、实验结果、网络图等
    - 其他文件夹：主要存放相关图片，可根据每篇论文的实际需求自定义建立不同的子文件夹

### 下面是每个有用的html
- [contact.html](http://106.14.213.79/contact.html): 招生简章

    ![图片]()还没弄好，弄好了再截图

- [demo.html](http://106.14.213.79/demo.html): 卡片集合，点开卡片会跳转到相应论文的实际运行界面(streamlit)
    ![图片](assets/img/readme/demo.png)

- [index_zh.html](http://106.14.213.79/index_zh.html): 实验室概览中文版
    ![图片](assets/img/readme/index_zh.png)

- [index.html](http://106.14.213.79/index.html): 实验室概览英文版
    ![图片](assets/img/readme/index.png)

- [publication.html](http://106.14.213.79/publication.html): 以干条的形式列出所有的论文，以年份分类
    ![图片](assets/img/readme/publication.png)

- [research.html](http://106.14.213.79/research.html): 卡片集合，点开卡片会跳转到相应论文的project page界面
    ![图片](assets/img/readme/research.png)

- [team.html](http://106.14.213.79/team.html): 实验室成员介绍
    ![图片](assets/img/readme/team.png)











Thanks for downloading this template!

Template Name: Moderna
Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
Author: BootstrapMade.com
License: https://bootstrapmade.com/license/
