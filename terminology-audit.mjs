import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(currentDirectory, "index.html"), "utf8");

const expectedTitles = [
  "Introduction",
  "Types",
  "Input/Output",
  "Selection & Repetition",
  "Functions",
  "Functions",
  "Containers",
  "Pointers",
  "Algorithms",
  "Classes",
  "Classes",
  "Classes",
  "Streams",
  "Inheritance",
  "Building C++ Projects",
  "Review"
];

const expectedChineseTitles = [
  "简介",
  "类型",
  "输入输出",
  "选择与循环",
  "函数",
  "函数",
  "容器",
  "指针",
  "算法",
  "类",
  "类",
  "类",
  "流",
  "继承",
  "C++项目构建",
  "复习"
];

const expectedHeaders = [
  ["Week", "周次"],
  ["Mode", "类型"],
  ["Topic", "题目"],
  ["Materials", "材料"],
  ["Assignments", "作业"]
];

const expectedModes = [
  ["Mixed", "混合"],
  ["Theory", "理论"],
  ["Lab 1", "实践一"],
  ["Mixed", "混合"],
  ["Theory", "理论"],
  ["Lab 2", "实践二"],
  ["Mixed", "混合"],
  ["Theory", "理论"],
  ["Lab 3", "实践三"],
  ["Theory", "理论"],
  ["Theory", "理论"],
  ["Lab 4", "实践四"],
  ["Theory", "理论"],
  ["Mixed", "混合"],
  ["Lab 5", "实践五"],
  ["Lab 6", "实践六"]
];

const scheduleSection = html.match(/<section id="schedule"[\s\S]*?<\/section>/)?.[0] ?? "";
const topicPairs = [...scheduleSection.matchAll(/<td data-label="Topic" data-label-en="Topic" data-label-zh="题目">\s*<strong data-en="([^"]+)" data-zh="([^"]+)"/g)].map((match) => [match[1], match[2]]);
const actualTitles = topicPairs.map(([english]) => english);
const actualChineseTitles = topicPairs.map(([, chinese]) => chinese);
const actualHeaders = [...scheduleSection.matchAll(/<th scope="col" data-en="([^"]+)" data-zh="([^"]+)"/g)].map((match) => [match[1], match[2]]);
const actualModes = [...scheduleSection.matchAll(/<span class="mode-badge [^"]+" data-en="([^"]+)" data-zh="([^"]+)"/g)].map((match) => [match[1], match[2]]);
const topicCells = [...scheduleSection.matchAll(/<td data-label="Topic" data-label-en="Topic" data-label-zh="题目">([\s\S]*?)<\/td>/g)].map((match) => match[1]);
const materialsCells = [...scheduleSection.matchAll(/<td data-label="Materials" data-label-en="Materials" data-label-zh="材料">([\s\S]*?)<\/td>/g)].map((match) => match[1]);
const materialPlaceholderLinks = [...scheduleSection.matchAll(/<a href="materials\/assignments\/mock\.html\?week=(\d{2})&amp;kind=(slides|code)"/g)].map((match) => [match[1], match[2]]);
const assignmentCells = [...scheduleSection.matchAll(/<td data-label="Assignments" data-label-en="Assignments" data-label-zh="作业">([\s\S]*?)<\/td>/g)].map((match) => match[1]);
const assignmentDocumentLinks = [...scheduleSection.matchAll(/<a class="assignment-document" href="materials\/assignments\/mock\.html\?week=(\d{2})"/g)].map((match) => match[1]);
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

if (!/Theory weeks use a short exit check; mixed weeks include an in-class coding task; lab weeks require a submission\./.test(scheduleSection)) {
  failures.push("The schedule does not explain the current weekly-task policy.");
}

if (/Course Content|教学内容/.test(scheduleSection)) {
  failures.push("The removed Course Content column remains in the schedule.");
}

if (materialsCells.length !== 16 || materialsCells.some((cell) => !/class="lecture-links"/.test(cell))) {
  failures.push("Each week must have a separate Materials cell containing its Slides and/or Code links.");
}

if (materialsCells.some((cell) => !/kind=slides/.test(cell) || !/kind=code/.test(cell))) {
  failures.push("Each Materials cell must provide both Slides and Code placeholder links.");
}

const expectedMaterialLinks = Array.from({ length: 16 }, (_, index) => {
  const week = String(index + 1).padStart(2, "0");
  return [[week, "slides"], [week, "code"]];
}).flat();

if (JSON.stringify(materialPlaceholderLinks) !== JSON.stringify(expectedMaterialLinks)) {
  failures.push("Material placeholder links must map Slides and Code in order from Week 01 through Week 16.");
}

if (/class="material-pending"|Coming soon\.\.\.|will coming soon/i.test(scheduleSection)) {
  failures.push("The schedule must show clean Slides and Code links; Coming soon belongs on the destination page.");
}

if (/href="materials\/(slides|code)\//.test(scheduleSection)) {
  failures.push("The schedule still links to the removed third-party slides or code.");
}

if (topicCells.length !== 16 || topicCells.some((cell) => /class="lecture-links"/.test(cell))) {
  failures.push("Topic cells must contain only the weekly topic, with resource links moved to Materials.");
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

if (JSON.stringify(assignmentDocumentLinks) !== JSON.stringify(Array.from({ length: 16 }, (_, index) => String(index + 1).padStart(2, "0")))) {
  failures.push("Assignment mock links must map in order from Week 01 through Week 16.");
}

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

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Terminology audit passed: ${actualTitles.length} weeks; columns=5; modes=${actualModes.length}; theory=6, mixed=4, lab=6; hours=24+24.`);
