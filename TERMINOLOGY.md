# C++ Course Terminology Standard

课程按周安排，共16周，包括8个理论周、6个实验周和2个复习周。第15、16周统一为Review / 复习。实验周为第4、6、8、10、12、14周，各自的Assignment链接打开独立的中英文实验指导页。页面默认英文，可切换中文。

课表五列为 `Week / 周次`、`Mode / 类型`、`Topic / 题目`、`Materials / 材料`、`Assignments / 作业`。Theory 1–8与Lab 1–6分别是理论周与实验周的序号；第一列表示实际教学周次。

| Week | Mode | Topic | 中文主题 |
|---:|---|---|---|
| 1 | Theory 1 | Getting Started with C++ | C++入门 |
| 2 | Theory 2 | Dealing with Data | 处理数据 |
| 3 | Theory 3 | Loops and Relational Expressions | 循环和关系表达式 |
| 4 | Lab 1 | Loops and Relational Expressions | 循环和关系表达式 |
| 5 | Theory 4 | Branching Statements and Logical Operators | 分支语句和逻辑运算符 |
| 6 | Lab 2 | Branching Statements and Logical Operators | 分支语句和逻辑运算符 |
| 7 | Theory 5 | Functions: C++’s Programming Modules | 函数：C++的编程模块 |
| 8 | Lab 3 | Functions | 函数 |
| 9 | Theory 6 | Objects and Classes | 对象和类 |
| 10 | Lab 4 | Objects and Classes | 对象和类 |
| 11 | Theory 7 | Class Inheritance | 类继承 |
| 12 | Lab 5 | Class Inheritance | 类继承 |
| 13 | Theory 8 | Polymorphic Public Inheritance | 多态公有继承 |
| 14 | Lab 6 | Polymorphic Public Inheritance | 多态公有继承 |
| 15 | Review | Review | 复习 |
| 16 | Review | Review | 复习 |

## 英文教材依据

统一依据 Stephen Prata 的 **C++ Primer Plus, 6th Edition**，避免与 C++ Primer 或其他课程的命名混用。适用范围为课程首页、课表、六份实验指导、代码注释及后续新增的课程材料。普通网页导航和实验操作说明采用简洁英文；C++专业名词采用教材术语。

- [出版方教材页面](https://www.informit.com/store/c-plus-plus-primer-plus-9780132781176)
- [出版方英文目录、样章与索引](https://ptgmedia.pearsoncmg.com/images/9780321776402/samplepages/9780321776402_Sample.pdf)

以下页码为英文原版印刷页码。第2周采用原书第3章的完整英文标题，补齐数据基础；第3、5周分别采用原书第5、6章的完整英文标题；第7周采用原书第7章的完整英文标题。从第3周开始，每个理论主题的下一周均为对应实验。第15—16周统一复习。

| 课程主题 | 教材位置 |
|---|---|
| Getting Started with C++ | 第1章；程序结构与输出参考第2章 |
| Dealing with Data | 第3章，第65页；输入输出参考第2章 |
| Loops and Relational Expressions | 第5章，第195页 |
| Branching Statements and Logical Operators | 第6章，第253页 |
| Functions: C++’s Programming Modules | 第7章，第305页；实验三使用简短标题Functions |
| Objects and Classes | 第10章，第505页 |
| Class Inheritance | 第13章，第707页 |
| Polymorphic Public Inheritance | 第13章第3节，第722页；虚函数见第734–745页 |

| 英文术语 | 中文对应 | 教材依据 |
|---|---|---|
| formal argument / actual argument | 形参 / 实参 | 第7章第314页；实验三分别用于函数定义中的a、b与调用时的first、second |
| return value / return statement | 返回值 / return语句 | 第2章函数与返回语句 |
| data member / member function | 数据成员 / 成员函数 | 第10章类的声明与成员函数 |
| constructor / destructor | 构造函数 / 析构函数 | 第10章第524页起 |
| base class / derived class | 基类 / 派生类 | 第13章第708页起 |
| public inheritance | 公有继承 | 第13章 |
| virtual function | 虚函数 | 第13章第734–745页 |
| redefine / override | 重新定义 / 覆盖 | 第13章第743–745页；override说明见第18章第1183–1184页 |
| reference / const | 引用 / const限定符 | 第8章引用变量与第3章const限定符 |
| dynamic memory allocation | 动态内存分配 | 第12章 |

参数也可称parameter，但本课程统一采用本书索引中的formal argument与actual argument区分形参与实参。override是C++关键字，保留原样。

## 基础知识的教学位置

| 教学周 | 补充基础 | 教材依据 |
|---|---|---|
| 2 | variables、initialization、assignment、int/double/char/bool、const、input/output、arithmetic operators | 第2、3章 |
| 3 | one-dimensional arrays、array initialization、array indexes | 第4章第116页起；仅3元素示例，与循环结合 |
| 7 | function declarations、passing by value、local scope、references、const references | 第7章、第8章第383页起、第9章第453页起；引用以小示例介绍 |
| 9 | std::string、constructors、member initialization lists、const member functions、destructors | 第4章第131页起、第10章第524页起；初始化列表另参第12、13章 |
| 11 | base-class initialization、private data access through public member functions | 第13章 |
| 13 | base-class references、virtual functions、override、virtual destructors | 第13章；override与= default补充参考第18章 |

这些基础已写入首页可展开的每周学习要点与实验前置知识。第15周复习数据、循环、分支和函数，第16周复习类、继承和虚函数。知识点安排是授课范围与课堂检查，不代表对应周的课件已制作完成。引用和析构函数先用小示例或框架阅读讲解；六个实验的代码框架与必做任务保持原有难度。

## 实验内容与边界

1. 实验一使用for循环计算1到n的和，练习<=和累加；输入约定为0到10的整数。
2. 实验二使用if else判断成绩是否及格；只练习基本分支，输入约定为0到100的整数。
3. 实验三编写两数求和函数，区分形参与实参；默认实参与函数重载不作为必做任务。
4. 实验四练习Student类的构造与显示；不要求拷贝构造和动态分配。
5. 实验五练习公有继承和基类函数复用；不要求比较三种继承方式。
6. 实验六通过Person引用调用Student和Teacher的introduce()；不要求运算符重载和动态内存分配。

根据新的课程安排，对象组合和静态成员不再作为理论周或实验任务。总计8个理论周、6个实验周、2个复习周，仍为16个教学周。

每份实验指导包含实验目的、实验环境、3个任务、代码框架、预期结果和提交要求。学生提交源代码、1–2张测试截图，并简短回答两个问题。代码框架可编译，但TODO未完成前不应视为题目答案。全部实验使用单个.cpp文件。

## 维护

实验页面与下载代码由项目目录的 `tools/build_lab_assignments.py` 生成；本地验证用的完整示例保存在output目录，不发布到网站。页面样式与语言切换分别为 `materials/assignments/labs.css` 和 `labs.js`。

第一周Assignment为Your First OnlineGDB Program，依据week1_v4.pdf第37页；其他尚未提供内容的理论周与复习周Assignment继续使用Coming soon占位页。课表保留Materials列和Slides入口，仅移除Code入口。第一周Slides直接打开materials/slides/week1_v4.pdf，其余周Slides暂使用占位页。实验的可下载代码框架在对应Assignment页面中。旧week与session参数的占位链接继续可访问。

运行 `node terminology-audit.mjs` 核对课表、中英文标题、实验周链接与页面结构。课程技术术语以本文件指定的英文教材为准，标准库标识符和C++关键字保留原样。
