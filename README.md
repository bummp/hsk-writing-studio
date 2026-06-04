# HSK 写作智能批改网页

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbummp%2Fhsk-writing-studio&env=SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY,ADMIN_PASSWORD&envDescription=Supabase%20database%20settings%20and%20teacher%20admin%20password)

## 在线访问

- [Vercel 数据库增强版](https://hsk-writing-studio.vercel.app/)
- [GitHub Pages 静态展示版](https://bummp.github.io/hsk-writing-studio/)

这是一个《现代教育技术》期末作业网页资源，主题为“国际中文教育资源制作”。作品面向国际中文学习者，提供 HSK 等级选择、写作题目、作文输入、教学模拟评分、批改建议和本地语料记录功能。

## 功能

- 选择 HSK 1-6 等级
- 根据等级切换写作题目、建议用时和建议字数
- 输入中文作文并统计字数、句子数
- 从内容切题、结构连贯、词汇等级、语法表达、汉字标点五个维度评分
- 显示综合分、维度分、划线标注、诊断建议、推荐表达和训练任务
- 将用户作文保存到浏览器本地语料后台，并可在 Vercel 部署后提交到 Supabase 数据库
- 记录学习者匿名编号、班级/批次、等级、题目、字数、句数、总分、维度分、问题标签、作文原文和批改报告
- 支持语料搜索、等级筛选、分数筛选、问题标签筛选、详情查看、回填和删除
- 支持导出 CSV、导出 JSON、导入 JSON 和清空语料
- 前端使用 HTML、CSS、JavaScript，后端使用 Vercel Serverless Functions，数据库可接 Supabase

## 重要说明

本网页的评分为“教学模拟评分”，用于课堂练习和教育技术作业展示，不代表官方 HSK 成绩。

未配置 Supabase 时，本项目的“语料后台”使用浏览器本地存储 `localStorage`，数据只保存在当前设备和当前浏览器中。

配置 Vercel + Supabase 后，可以实现真实多人在线语料收集：

1. 学生提交作文时，前端调用 `/api/submit`
2. Vercel API 使用环境变量中的 Supabase service role key 写入数据库
3. 教师输入后台密码后，前端调用 `/api/admin`
4. Vercel API 验证 `ADMIN_PASSWORD` 后读取 Supabase 语料库

## 文件结构

```text
.
├─ index.html
├─ style.css
├─ script.js
├─ package.json
├─ vercel.json
├─ supabase-schema.sql
├─ .env.example
├─ api/
│  ├─ submit.js
│  ├─ admin.js
│  └─ delete.js
├─ README.md
└─ process-notes.md
```

## 本地打开

直接双击 `index.html`，或使用浏览器打开该文件即可。

本地文件模式下，远程数据库不会启用。教师后台本地演示密码为：

```text
hsk2026admin
```

## Vercel + Supabase 部署

可以点击上方 **Deploy with Vercel** 按钮一键导入 GitHub 仓库。部署过程中需要填写 `SUPABASE_URL`、`SUPABASE_SERVICE_ROLE_KEY` 和 `ADMIN_PASSWORD`。

### 1. 创建 Supabase 表

在 Supabase 项目中打开 `SQL Editor`，执行 `supabase-schema.sql` 中的 SQL。

### 2. 配置 Vercel 环境变量

在 Vercel 项目的 `Settings` -> `Environment Variables` 中添加：

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ADMIN_PASSWORD
```

注意：`SUPABASE_SERVICE_ROLE_KEY` 只能放在 Vercel 环境变量里，不能写到前端代码中。

### 3. 部署到 Vercel

可以把 GitHub 仓库导入 Vercel，也可以在本地安装 Vercel CLI 后部署：

```bash
npm install
npx vercel
```

部署完成后：

- 学生端提交作文会保存到 Supabase
- 教师端点击“教师后台”并输入 `ADMIN_PASSWORD` 后读取远程语料库
- 如果环境变量未配置，系统会回退到本地演示语料库

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

GitHub Pages 只能运行静态前端，不能运行 `api/` 后端函数；因此 GitHub Pages 版本只能使用本地语料库。需要真实数据库时请使用 Vercel 部署。

## 作业信息

课程：现代教育技术  
主题：国际中文教育资源制作  
作品名称：HSK 写作智能批改网页  
作者：待补充  
技术：HTML、CSS、JavaScript、GitHub Pages
