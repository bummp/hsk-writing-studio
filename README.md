# HSK 写作智能批改网页

这是一个《现代教育技术》期末作业网页资源，主题为“国际中文教育资源制作”。作品面向国际中文学习者，提供 HSK 等级选择、写作题目、作文输入、教学模拟评分、批改建议和本地语料记录功能。

## 功能

- 选择 HSK 1-6 等级
- 根据等级切换写作题目、建议用时和建议字数
- 输入中文作文并统计字数、句子数
- 从内容切题、结构连贯、词汇等级、语法表达、汉字标点五个维度评分
- 显示综合分、维度分、划线标注、诊断建议、推荐表达和训练任务
- 将用户作文保存到浏览器本地语料后台
- 记录学习者匿名编号、班级/批次、等级、题目、字数、句数、总分、维度分、问题标签、作文原文和批改报告
- 支持语料搜索、等级筛选、分数筛选、问题标签筛选、详情查看、回填和删除
- 支持导出 CSV、导出 JSON、导入 JSON 和清空语料
- 纯 HTML、CSS、JavaScript 实现，可本地打开，可部署到 GitHub Pages

## 重要说明

本网页的评分为“教学模拟评分”，用于课堂练习和教育技术作业展示，不代表官方 HSK 成绩。

GitHub Pages 是静态托管平台，不能直接保存所有用户的数据到服务器。因此本项目的“语料后台”使用浏览器本地存储 `localStorage`，数据只保存在当前设备和当前浏览器中。

如果后续需要真实多人在线语料收集，可以扩展为：

1. 前端继续使用当前页面；
2. 增加 Supabase、Firebase 或学校服务器作为数据库；
3. 每次评分后把作文记录提交到数据库；
4. 教师端读取数据库并生成班级统计、错误分布和学习报告。

## 文件结构

```text
.
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ process-notes.md
```

## 本地打开

直接双击 `index.html`，或使用浏览器打开该文件即可。

## GitHub Pages 部署

1. 在 GitHub 新建仓库，例如 `hsk-writing-studio`
2. 上传 `index.html`、`style.css`、`script.js`、`README.md`、`process-notes.md`
3. 进入仓库 `Settings` -> `Pages`
4. `Source` 选择 `Deploy from a branch`
5. 分支选择 `main`，目录选择 `/root`
6. 保存后等待 GitHub 生成访问地址

示例地址：

```text
https://你的用户名.github.io/hsk-writing-studio/
```

## 作业信息

课程：现代教育技术  
主题：国际中文教育资源制作  
作品名称：HSK 写作智能批改网页  
作者：待补充  
技术：HTML、CSS、JavaScript、GitHub Pages
