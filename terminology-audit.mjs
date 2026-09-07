import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(currentDirectory, "index.html"), "utf8");

const expectedTitles = [
  "Getting Started with C++",
  "Dealing with Data",
  "Loops and Relational Expressions",
  "Loops and Relational Expressions",
  "Branching Statements and Logical Operators",
  "Branching Statements and Logical Operators",
  "Functions: C++’s Programming Modules",
  "Functions",
  "Objects and Classes",
  "Objects and Classes",
  "Class Inheritance",
  "Class Inheritance",
  "Polymorphic Public Inheritance",
  "Polymorphic Public Inheritance",
  "Review",
  "Review"
];

const expectedChineseTitles = [
  "C++入门",
  "处理数据",
  "循环和关系表达式",
  "循环和关系表达式",
  "分支语句和逻辑运算符",
  "分支语句和逻辑运算符",
  "函数：C++的编程模块",
  "函数",
  "对象和类",
  "对象和类",
  "类继承",
  "类继承",
  "多态公有继承",
  "多态公有继承",
  "复习",
  "复习"
];

const expectedHeaders = [
  ["Week", "周次"],
  ["Mode", "类型"],
  ["Topic", "题目"],
  ["Assignments", "作业"]
];

const expectedModes = [
  [
    "Theory 1",
    "理论周 1"
  ],
  [
    "Theory 2",
    "理论周 2"
  ],
  [
    "Theory 3",
    "理论周 3"
  ],
  [
    "Lab 1",
    "实验周 1"
  ],
  [
    "Theory 4",
    "理论周 4"
  ],
  [
    "Lab 2",
    "实验周 2"
  ],
  [
    "Theory 5",
    "理论周 5"
  ],
  [
    "Lab 3",
    "实验周 3"
  ],
  [
    "Theory 6",
    "理论周 6"
  ],
  [
    "Lab 4",
    "实验周 4"
  ],
  [
    "Theory 7",
    "理论周 7"
  ],
  [
    "Lab 5",
    "实验周 5"
  ],
  [
    "Theory 8",
    "理论周 8"
  ],
  [
    "Lab 6",
    "实验周 6"
  ],
  [
    "Review",
    "复习周"
  ],
  [
    "Review",
    "复习周"
  ]
];

const scheduleSection = html.match(/<section id="schedule"[\s\S]*?<\/section>/)?.[0] ?? "";
const topicPairs = [...scheduleSection.matchAll(/<td data-label="Topic" data-label-en="Topic" data-label-zh="题目">\s*<strong data-en="([^"]+)" data-zh="([^"]+)"/g)].map((match) => [match[1], match[2]]);
const actualTitles = topicPairs.map(([english]) => english.replaceAll("&amp;", "&"));
const actualChineseTitles = topicPairs.map(([, chinese]) => chinese);
const actualHeaders = [...scheduleSection.matchAll(/<th scope="col" data-en="([^"]+)" data-zh="([^"]+)"/g)].map((match) => [match[1], match[2]]);
const actualModes = [...scheduleSection.matchAll(/<span class="mode-badge [^"]+" data-en="([^"]+)" data-zh="([^"]+)"/g)].map((match) => [match[1], match[2]]);
const topicCells = [...scheduleSection.matchAll(/<td data-label="Topic" data-label-en="Topic" data-label-zh="题目">([\s\S]*?)<\/td>/g)].map((match) => match[1]);
const assignmentCells = [...scheduleSection.matchAll(/<td data-label="Assignments" data-label-en="Assignments" data-label-zh="作业">([\s\S]*?)<\/td>/g)].map((match) => match[1]);
const assignmentDocumentLinks = [...scheduleSection.matchAll(/<a class="assignment-document" href="([^"]+)"/g)].map((match) => match[1]);
const assignmentLabels = [...scheduleSection.matchAll(/<span data-en="Assignment" data-zh="作业">Assignment<\/span>/g)];

const forbiddenTitleVariants = [
  /Welcome to C\+\+/i,
  /Introduction to C\+\+/i,
  /Fundamental Types & Expressions/i,
  /Variables, Types & Expressions/i,
  /Input\/Output & Debugging/i,
  /Selection & Iteration/i,
  /Functions & References/i,
  /Control Flow & Functions/i,
  /Strings, Vectors & Algorithms/i,
  /Arrays & Pointers/i,
  /Containers & Algorithms/i,
  /Structs & Classes/i,
  /Classes & const Correctness/i,
  /Classes & Separate Compilation/i,
  /Streams & Files/i,
  /Inheritance & Polymorphism/i,
  /Review & Code Reading/i,
  /Parameter Passing/i,
  /\bMulti-file\b/i,
  /standard algorithms?/i,
  /Class Templates/i,
  /file-open/i,
  /error-fixing/i,
  /Topic & Focus/i
];

const failures = [];

if (!/C\+\+ is a powerful and widely used programming language/.test(html) || !/C\+\+是一门功能强大且应用广泛的程序设计语言/.test(html)) {
  failures.push("The course introduction does not contain the revised bilingual C++ overview.");
}

if (/beginner-friendly C\+\+17 course|follows NTU Programming Design as its teaching spine|Across 16 weeks, the course balances/.test(html)) {
  failures.push("The previous syllabus-style course introduction remains on the page.");
}

if (JSON.stringify(actualTitles) !== JSON.stringify(expectedTitles)) {
  failures.push(`Schedule titles differ.\nExpected: ${JSON.stringify(expectedTitles)}\nActual: ${JSON.stringify(actualTitles)}`);
}

if (JSON.stringify(actualChineseTitles) !== JSON.stringify(expectedChineseTitles)) {
  failures.push(`Chinese schedule titles differ.\nExpected: ${JSON.stringify(expectedChineseTitles)}\nActual: ${JSON.stringify(actualChineseTitles)}`);
}

if (JSON.stringify(actualHeaders) !== JSON.stringify(expectedHeaders)) {
  failures.push(`Schedule headers differ.\nExpected: ${JSON.stringify(expectedHeaders)}\nActual: ${JSON.stringify(actualHeaders)}`);
}

if (JSON.stringify(actualModes) !== JSON.stringify(expectedModes)) {
  failures.push(`Schedule modes differ.\nExpected: ${JSON.stringify(expectedModes)}\nActual: ${JSON.stringify(actualModes)}`);
}

if (!/<h2 id="instructor-name">Congqing He \(何从庆\)<\/h2>/.test(html) || !/mailto:hecongqing@huznu\.edu\.cn/.test(html)) {
  failures.push("The instructor card does not show the expected name and email address.");
}

if (!/data-en="Tuesday · Building 33, Room 33-B606" data-zh="星期二 · 33号楼33-B606"/.test(html)) {
  failures.push("The instructor card does not show the bilingual Tuesday classroom information.");
}

if (/class="legend"|Mixed · 1\.5 \+ 1\.5|混合周 · 1\.5 \+ 1\.5/.test(scheduleSection)) {
  failures.push("The removed Theory / Mixed / Lab schedule legend remains on the page.");
}

if (!/Theory weeks use a short exit check; lab assignments include instructions, starter code, and submission requirements\./.test(scheduleSection)) {
  failures.push("The schedule does not explain the current class-task policy.");
}

if (/Course Content|教学内容/.test(scheduleSection)) {
  failures.push("The removed Course Content column remains in the schedule.");
}

if (/data-label="Materials"|data-en="Slides"|data-en="Code"|kind=(slides|code)/.test(scheduleSection)) {
  failures.push("The schedule must not contain the removed Materials column or Slides/Code links.");
}

if (topicCells.length !== 16 || topicCells.some((cell) => /class="lecture-links"/.test(cell))) {
  failures.push("Topic cells must contain only the weekly topic.");
}

if (assignmentCells.length !== 16 || assignmentDocumentLinks.length !== 16) {
  failures.push("Each week must include one assignment document link in the Assignments column.");
}

if (assignmentLabels.length !== 16 || /Assignment \(Mock\)|作业文档（Mock）/.test(scheduleSection)) {
  failures.push("Assignment links must use the clean Assignment / 作业 label without a visible Mock suffix.");
}

if (/class="assignment-title"|In class — Build and run/.test(scheduleSection)) {
  failures.push("Assignments cells must contain document links only, without the removed task-description line.");
}

const labWeeks = [4, 6, 8, 10, 12, 14];
const expectedAssignments = Array.from({ length: 16 }, (_, index) => {
  const week = index + 1;
  if (week === 1) return "materials/assignments/week01.html";
  const labIndex = labWeeks.indexOf(week);
  return labIndex < 0
    ? `materials/assignments/mock.html?week=${String(week).padStart(2, "0")}`
    : `materials/assignments/lab${String(labIndex + 1).padStart(2, "0")}.html`;
});
if (JSON.stringify(assignmentDocumentLinks) !== JSON.stringify(expectedAssignments)) {
  failures.push("Lab weeks 4, 6, 8, 10, 12, and 14 must link to their own assignment pages.");
}
for (let index = 0; index < labWeeks.length; index++) {
  const filename = `lab${String(index + 1).padStart(2, "0")}`;
  const pagePath = join(currentDirectory, "materials/assignments", filename + ".html");
  if (!existsSync(pagePath)) {
    failures.push(`Missing lab page: ${filename}`);
    continue;
  }
  const page = readFileSync(pagePath, "utf8");
  const titleEn = `Lab ${index + 1} — ${expectedTitles[labWeeks[index] - 1]}`;
  const titleZh = `实验${index + 1}：${expectedChineseTitles[labWeeks[index] - 1]}`;
  if (!page.includes(`data-en="${titleEn}" data-zh="${titleZh}"`)) {
    failures.push(`${filename}: lab title must match the textbook terminology in the schedule`);
  }
  for (const id of ["objectives", "environment", "tasks", "submission"]) {
    if (!page.includes(`id="${id}"`)) failures.push(`${filename}: missing ${id} section`);
  }
  if (!page.includes(`WEEK ${labWeeks[index]} · LAB ${index + 1}`) || !page.includes(`第${labWeeks[index]}周 · 实验${index + 1}`)) {
    failures.push(`${filename}: incorrect bilingual lab week`);
  }
  if (!page.includes('data-lang-option="en"') || !page.includes('data-lang-option="zh"')) failures.push(`${filename}: missing language switch`);
  const starterPath = join(currentDirectory, "materials/assignments", filename + ".cpp");
  if (!existsSync(starterPath)) failures.push(`${filename}: missing starter code`);
  if ((page.match(/class="task"/g) || []).length !== 3) failures.push(`${filename}: expected three guided tasks`);
}

const week1 = readFileSync(join(currentDirectory, "materials/assignments/week01.html"), "utf8");
if (!week1.includes('data-en="Your First OnlineGDB Program" data-zh="你的第一个 OnlineGDB 程序"') || !week1.includes('WEEK 1 · ASSIGNMENT')) failures.push("Week 1 must show the bilingual OnlineGDB assignment.");
if (!existsSync(join(currentDirectory, "materials/assignments/week01.cpp"))) failures.push("Week 1 starter code is missing.");
if (!week1.includes('Your own name appears.') || !week1.includes('The output matches your plan.')) failures.push("Week 1 completion criteria are missing.");

if (/Topic & Materials|Weekly Output|Modules to Complete|Materials and Assignments/.test(scheduleSection)) {
  failures.push("Old schedule-column wording remains in the schedule section.");
}

if (!/href="https:\/\/www\.onlinegdb\.com\/online_c\+\+_compiler" target="_blank" rel="noopener"/.test(html)) {
  failures.push("The Learning Resources section does not include the OnlineGDB C++ compiler link.");
}

if (!/data-en="Open Online C\+\+ Compiler" data-zh="打开在线C\+\+编译器"/.test(html)) {
  failures.push("The OnlineGDB resource does not include the expected bilingual link label.");
}

if (!/<a href="#grading" data-en="Grading" data-zh="课程评分">Grading<\/a>/.test(html)) {
  failures.push("The primary navigation does not use the canonical Grading label.");
}

if (!/<section id="grading"[\s\S]*?<h2 data-en="Grading" data-zh="课程评分">Grading<\/h2>/.test(html)) {
  failures.push("The grading section does not use the canonical English-Chinese heading.");
}

if (!/<h3 data-en="Breakdown" data-zh="成绩构成">Breakdown<\/h3>/.test(html)) {
  failures.push("The grading section does not use the CS230-style Breakdown heading.");
}

if (!/Here’s more information about the class grade:/.test(html) || !/Below is the breakdown of the class grade:/.test(html)) {
  failures.push("The grading section does not use the CS230-style explanatory structure.");
}

const gradingSection = html.match(/<section id="grading"[\s\S]*?<\/section>/)?.[0] ?? "";
const gradingPairs = [...gradingSection.matchAll(/<li data-en="([^"]+)" data-zh="([^"]+)"/g)].map((match) => [match[1], match[2]]);
const expectedGradingPairs = [
  ["— 60%: Final Examination — open-book written examination.", "— 60%：期末开卷考试——笔试。"],
  ["— 40%: Continuous Assessment — attendance, class performance, assignments, and labs.", "— 40%：平时成绩——出勤、课堂表现、作业和实验。"]
];

if (JSON.stringify(gradingPairs) !== JSON.stringify(expectedGradingPairs)) {
  failures.push(`Grading breakdown differs from the official Chinese syllabus.\nExpected: ${JSON.stringify(expectedGradingPairs)}\nActual: ${JSON.stringify(gradingPairs)}`);
}

if (/GRADE BREAKDOWN|assessment-layout|assessment-chart|assessment-list/.test(html)) {
  failures.push("The previous grading kicker or chart layout remains in the page.");
}

if (/data-en="Assessment"|>Assessment<\/h2>/.test(html)) {
  failures.push("The old visible Assessment label remains in the page.");
}

if (/href="#learning"|id="learning"|How We Learn/.test(html)) {
  failures.push("The removed How We Learn section remains in the page.");
}

if (/What you will be able to do|你将能够做到什么|outcomes-panel|outcome-card/.test(html)) {
  failures.push("The removed learning-outcomes panel remains in the page.");
}

for (const pattern of forbiddenTitleVariants) {
  if (actualTitles.some((title) => pattern.test(title))) {
    failures.push(`Forbidden lecture-title variant found: ${pattern}`);
  }
}

const teachingPages = [html, ...labWeeks.map((_, index) => readFileSync(join(currentDirectory, "materials/assignments", `lab${String(index + 1).padStart(2, "0")}.html`), "utf8"))];
for (const [index, page] of teachingPages.entries()) {
  if (/selection|repetition|object composition|classes and objects|static members|classes with object members|static class members|选择与循环|对象组合|包含对象成员|静态类成员/i.test(page)) {
    failures.push(`Teaching page ${index}: terminology from the previous course outline remains`);
  }
}
if (!html.includes("C++ Primer Plus, 6th Edition")) failures.push("Missing English textbook reference");
if (!teachingPages[3].includes("formal arguments") || !teachingPages[3].includes("actual arguments")) failures.push("Lab 3 must distinguish formal and actual arguments");

if (!html.includes('8 Theory · 6 Labs · 2 Review') || !html.includes('8个理论周 · 6个实验周 · 2个复习周')) failures.push("Course totals must show 8 theory, 6 lab, and 2 review weeks");
if (actualModes.filter(([mode]) => mode.startsWith("Theory")).length !== 8 || actualModes.filter(([mode]) => mode.startsWith("Lab")).length !== 6 || actualModes.slice(14).some(([mode]) => mode !== "Review")) failures.push("Expected 8 theory weeks, 6 lab weeks, and Review in weeks 15–16");

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Terminology audit passed: ${actualTitles.length} weeks; columns=4; modes=${actualModes.length}; theory=8, lab=6, review=2; bilingual lab assignments=6.`);
