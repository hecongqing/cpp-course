# C++ Programming Course Website

这是《C++ Programming》课程的中英双语静态网站。

独立网站地址：<https://hecongqing.github.io/cpp-course/>

## 打开方式

直接双击 `index.html` 即可浏览。也可以在本目录启动任意静态文件服务器。

## 已实现

- 默认显示英文；
- 页面右上角提供 `EN / 中文` 即时切换；
- 首页采用CS106L风格展示教师姓名、邮箱、上课星期和教室；
- 完整呈现16周、每周3学时的教学安排；
- 课程表采用 `Week / Mode / Topic / Materials / Assignments` 五列结构；
- 采用6个理论周、4个混合周、6个实践周，理论与实践各24学时；
- 以独立的 `Assignments / 作业` 列提供简洁的作业文档入口；
- 每周作业项包含 `Assignment / 作业`文档入口；正式文件未发布时，文档页显示 `Coming soon...`；
- 以独立的 `Materials / 材料` 列提供可直接打开的 `Slides` 和/或 `Code` 课程资源；
- 学习资源区提供 OnlineGDB 在线C++编译、运行与调试入口；
- `Slides`或`Code`尚未上传时仍显示为简洁链接，点击后进入 `Coming soon...` 页面；
- 当前课程表中的第三方课件与代码已移除，16周材料链接暂统一进入占位页面；
- 理论周和实验周使用不同标识；
- 桌面端、平板和手机自适应；
- 不依赖外部字体、框架或网络资源。

英文术语统一表见 `TERMINOLOGY.md`。修改课程标题或英文说明后，可运行 `node terminology-audit.mjs` 检查16周标题和禁用变体。

页面布局参考 Stanford CS106L 课程网站的红色课程栏、简洁课程信息区和表格化教学进度，但课程内容采用本课程已经确定的C++基础大纲。
