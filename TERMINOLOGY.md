# C++ Course Terminology Standard

本文件规定网站和教学大纲使用的中英文术语。周标题不根据中文详细内容逐字翻译，只使用 NTU Programming Design 与 Stanford CS106L 风格的英文总体主题名。网站课程表保持简洁，完整教学内容和实践要求继续保留在教学大纲中。

当前周型统一为：`Theory / 理论周`、`Mixed / 混合周`、`Lab / 实践周`。16周结构为6个理论周、4个混合周和6个实践周；混合周按理论1.5学时、课堂练习1.5学时组织，合计理论24学时、实践24学时。

课程表统一使用五列：`Week`、`Mode`、`Topic`、`Materials`和`Assignments`。`Materials`只放`Slides`与`Code`链接；`Assignments`只显示`Assignment / 作业`文档入口，不额外显示任务类型说明。正式文件尚未上传时，文档页显示`Coming soon...`提示。

`Materials`列中的`Slides`与`Code`均保持简洁的可点击链接。材料尚未上传时，链接进入与`Assignment`一致的占位页面，并在页面内显示`Coming soon...`。

| Week | Canonical Lecture Title | 统一中文标题 | 主要参考与说明 |
|---:|---|---|---|
| 1 | Introduction | 简介 | NTU: Introduction |
| 2 | Types | 类型 | CS106L: Types & Structs；正文仍区分基本类型和用户定义类型 |
| 3 | Input/Output | 输入输出 | CS106L: Streams；正文统一写`Input/Output`，不混用`IO`和`I/O` |
| 4 | Selection & Repetition | 选择与循环 | NTU: Selection and repetition |
| 5 | Functions | 函数 | NTU: Functions；正文严格区分`parameter`与`argument` |
| 6 | Functions | 函数 | 实验属性由 Lab 2 标签表达，不写入主题标题 |
| 7 | Containers | 容器 | CS106L: Containers；正文使用`std::string`、`std::vector`和`generic algorithm` |
| 8 | Pointers | 指针 | NTU: Pointers；正文仍讲数组、引用与指针的区别 |
| 9 | Algorithms | 算法 | NTU: Algorithms；实验属性由 Lab 3 标签表达 |
| 10 | Classes | 类 | NTU/CS106L: Classes；`struct`用于记录类型引入，主线进入`class` |
| 11 | Classes | 类 | `const`成员函数和文件组织保留在详细内容，不拼入标题 |
| 12 | Classes | 类 | 实验属性由 Lab 4 标签表达；`separate compilation`保留在详细内容 |
| 13 | Streams | 流 | CS106L: Streams；正文使用`file input/output`和`stream state` |
| 14 | Inheritance | 继承 | NTU: Inheritance and polymorphism；正文准确说明`polymorphism`和`dynamic binding` |
| 15 | Building C++ Projects | C++项目构建 | CS106L: Building C++ Projects；沿用其名词化标题 |
| 16 | Review | 复习 | NTU: Review and preview；不引入新语法 |

## 写作规则

1. C++、README和标准库标识符的大小写固定；网站面向学生的文字不强调具体C++标准版本。
2. 关键字和标识符使用代码格式，例如`const`、`virtual`、`override`、`std::string`和`std::vector`。
3. `parameter`指函数定义中的形参，`argument`指函数调用时传入的实参；正文描述调用机制时使用`argument passing`。
4. `source file`、`header file`和`main program`为文件组织用语；涉及构建机制时使用`separate compilation`。
5. `inheritance`是第14周标题；`polymorphism`是课程内容，`dynamic binding`是通过虚函数实现运行时多态的机制，三者不能当作同义词互换。
6. 英文周标题使用简洁的总体主题名；理论周、混合周、实践周和详细知识点不拼入标题。重复使用`Functions`或`Classes`是有意设计。

## 参考边界

- 《C++ Primer》第5版用于正文中的`basic types`、`argument passing`、`generic algorithms`、`separate compilation`和`dynamic binding`等精确术语。
- 本地《C++ Primer Plus（第6版）》用于核对函数、数组、指针、单独编译、对象与类、类继承、STL、输入输出和文件等内容边界。
- NTU Programming Design和Stanford CS106L用于周标题的简洁形式；标题不直接复制超出本课程范围的递归、模板、移动语义和智能指针内容。
