# 维护文档
该文档主要面向需要在实验室主页上发布内容的同学，列举了需要准备的内容

有论文需要添加的同学，<a href="#html">只看html部分就可以</a>，里面各部分有很多内容是重复的，而且很多东西从论文上就能直接扒下来

需要添加演示demo的同学，<a href="#demo">则需要看一下demo这里</a>，有一点点代码需要修改，下面已给出简单示例



# html部分<a id="html">

## index.html和index_zh.html的论文简介<a id="index_eng_zh">[]()
两个html文件，但只需要准备一份

你需要准备的内容：
- 论文题目(eg. *Uncertainty learning in kernel estimation for multi-stage blind image super-resolution*)
- 全部的作者(eg. Z. Fang, W. Dong*, X. Li, J. Wu, L. Li, and G. Shi)
- 发表的会议/期刊  年份(eg. ECCV 2022)
- 论文摘要
- 一张论文中的网络结构图
- 一份论文的pdf文件
- 论文的GitHub仓库地址
最后填充到html文件上是这样的（Demo那里在下面详细阐述）


```HTML
<!-- ECCV_2022_Fang -->
    <div class="row" data-aos="fade-up">
        <div class="col-md-7 pt-4" data-aos="fade-up">
            <h3>论文题目</h3>
            <h5>论文作者</h5>
            <h6>发表的会议/期刊  年份</h6>
            <ul class="faq-list">
                <br>
                <li>
                    <div data-bs-toggle="collapse" class="collapsed question" href="#abstract_xxx_xxx_year"> <h5>Abstract</h5> <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="abstract_xxx_xxx_year" class="collapse" data-bs-parent=".faq-list">
                        <p>
                            这里写论文摘要
                        </p>
                    </div>                               
                </li>
            </ul>
        </div>
        <div class="col-md-5 pt-4" data-aos="fade-up" style="display: table;">
            <img src="project/fzx_eccv2022/img/network1.png" class="img-fluid" alt="" style="display: inline-block;">
            <li><i class="bi bi-check"></i> <a href="论文的pdf文件地址">Paper</a></li>
            <li><i class="bi bi-check"></i> <a href="论文的GitHub仓库地址（如已开源）">Code</a></li>
            <li><i class="bi bi-check"></i> <a href="论文的演示界面地址（IP + 端口号即可）">Demo</a></li>
        </div>
        <br>
        <br>
    </div>
```

## research.html和demo.html的论文卡片添加<a id="research_and_demo">[]()
同样只需要准备一份

你需要准备的内容如下：
- 论文题目
- 一句话概括该论文，示例：A novel kernel estimation method was proposed with uncertainty learning, achieving SOTA blind image SR results.
- 论文的网络结构图
- 全部的作者(eg. Z. Fang, W. Dong*, X. Li, J. Wu, L. Li, and G. Shi)
- 发表的会议/期刊  年份(eg. ECCV 2022)
- 一份论文的project page(具体示例可参考[这里](http://106.14.213.79/project/fzx_eccv2022/index.html))

最后填充到html文件上是这样的

```html
<!--          所有涉及路径的文件，需要放到规定的储存位置-->
<div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
    <div class="card">
        <div class="card-img">
            <img src="图片路径，示例：project/fzx_eccv2022/img/network1.png" alt="...">
        </div>

        <div class="card-body">
            <!-- 如果是research.html -->
            <h5 class="card-title"><a href="论文project_page的链接，示例：./project/fzx_eccv2022/index.html">论文题目，示例：Uncertainty learning in kernel estimation for multi-stage blind image super-resolution</a></h5>
            <!-- 如果是demo.html -->
            <h5 class="card-title"><a href="演示界面链接">示例：106.1.1.1:8501</a></h5>
            <p class="card-text">论文作者，示例：Z. Fang, W. Dong*, X. Li, J. Wu, L. Li, and G. Shi </p>
            <p class="card-text">发表于哪一年，哪个会议/期刊，示例：ECCV 2022</p>
            <p class="card-text"><span style="color:#5E2612">一句话概括该论文，示例：A novel kernel estimation method was proposed with uncertainty learning, achieving SOTA blind image SR results.</span></p>
            <div class="Try"><a href="论文project_page的链接，示例：./project/fzx_eccv2022/index.html"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
    </div>
</div>
```

## publication.html的论文添加<a id="publication">[]()
你需要准备的内容如下：
- 论文题目
- 一句话概括该论文
- 论文pdf
- 论文project_page
- 论文的GitHub仓库地址

最后填充到html文件上是这样的

```html
<li>
    <a href="论文project_page的链接，示例：./project/fzx_eccv2022/index.html">论文题目，示例：Uncertainty learning in kernel estimation for multi-stage blind image super-resolution</a>
    <br />
    <span class="text-600">
    <I>一句话概括该论文，示例：A novel kernel estimation method was proposed with uncertainty learning, achieving SOTA blind image SR results.</I> <br />
    论文作者，示例Z. Fang, W. Dong*, X. Li, J. Wu, L. Li, and G. Shi  <br />
    发表于哪一年，哪个会议/期刊，示例：European Conference on Computer Vision, 2022 <strong>(ECCV)</strong><br />
    </span>
    [<a href="论文pdf的链接，示例：https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136780141.pdf" target="_blank"><span class="text-muted">Paper</span></a>]
    [<a href="论文project_page的链接，示例：./project/fzx_eccv2022/index.html" target="_blank"><span class="text-muted">Project Page</span></a>]
    [<a href="论文代码的链接（如已开源），示例：https://github.com/Fangzhenxuan/UncertaintySR" target="_blank"><span class="text-muted">code</span></a>]
    [<a href="论文的演示界面地址（IP + 端口号即可），示例：http://106.1.1.1:8501" target="_blank"><span class="text-muted">demo</span></a>]
</li>
<br />
```


## team.html的成员添加<a id="team">[]()
你需要准备的内容如下：
- 一张你的照片
- 你的个人简介（如果想写的话）
- 你的个人主页/社交媒体账号/GitHub主页（如果想提供）

最后填充到html文件上是这样的

```html
<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="member">
        <div class="member-img">
            <img src="成员照片，示例assets/img/team/wsdong_s.jpg" class="img-fluid" alt="">
            <!-- 下面这些注释先行保留，如果有成员有个人主页，可将其取消注释，并放置相应的链接 -->
    <!--                <div class="social">-->
    <!--                  <a href=""><i class="bi bi-twitter"></i></a>-->
    <!--                  <a href=""><i class="bi bi-facebook"></i></a>-->
    <!--                  <a href=""><i class="bi bi-instagram"></i></a>-->
    <!--                  <a href=""><i class="bi bi-linkedin"></i></a>-->
    <!--                </div>-->
        </div>

        <div class="member-info">
            <h4>名字，示例：Weisheng Dong</h4>
            <span>头衔，示例Professor</span>
            <p>简介，示例：人工智能学院教授，博导，副院长，国家级领军人才。主要从事图像视频处理、深度学习，模式识别与计算机视觉方面的研究工作。在权威国际期刊和会议上发表论文100余篇，其中在TPAMI、IJCV、IEEE-TIP、CVPR、ICCV、NIPS等顶级期刊和会议上发表论文50多篇。论文被引用8000余次，2篇论文单篇引用超过1300余次，8篇论文入选 ESI 高被引论文。</p>
        </div>
    </div>
</div>
```

# 演示demo部分<a id="demo">[]()

需要神经网络的前向推理代码

具体来说，需要：

- 自己训练好的权重文件，用于加载

- 如下格式的.py文件

    ```python
    import uuid
    class Net():
        # 你的神经网络代码

    def load_check(model_path):# model_path是权重文件的路径
        our_model = Net() # 初始化网络模型
        our_model.load_state_dict(torch.load(model_path, map_location='cpu')) # 加载权重文件
        return our_model

    def pridict(our_model, input_file): # input_file是照片或视频
        input_file = prepare_input(input_file) # 数据的预处理（需要自己写prepare_input）(无需预处理则不用该函数)

        with torch.no_grad():
            if torch.cuda.is_available():
                our_model = our_model.cuda()
                input_file = input_file.cuda()

            output = our_model(input_file)
            output = output.detach().cpu().numpy().blahblah() # blahblah指的是后续的一系列处理，使其可以转化为cv2格式的图片，便于保存
            uuid_name = str(uuid.uuid4()) + 'blahblah.png' # str(uuid.uuid4())是处理高并发所需，相当于生成一个唯一标识，这一行必须要
            cv2.imwrite('save_path' + uuid_name, output)
            return uuid_name

    # 要保证pridict(load_check(model_path), input_file可以成功运行)

    # 如果输入是照片的话，则按照上面的代码来跑就没问题；如果是视频，则需要拆帧软件（比如ffmpeg或其他的python拆帧工具）将其拆分，然后套一个循环来处理视频帧，再将输出结果拼接起来即可
    ```
- 可以让这个代码顺利运行起来的最小的anaconda环境清单（可以理解为上面.py文件最前面所有的import），同时需要标明python，torch和cuda版本，以便适配
- 模型的描述，例如模型功能（超分辨、去雾、去模糊等等）、主要创新点、测试得到的指标（PSNR在37.XX，是目前的SOTA）blah blah

