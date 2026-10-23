# 课程资料中心（静态网页）

给本科生发布的课程资料下载页。无需服务器：任意静态托管（学校主页空间、
GitHub Pages、Gitee Pages）上传整个 `bio-course/` 文件夹即可使用。

## 目录结构

```
bio-course/
├── index.html        主页（课程列表入口，一般不用改）
├── pages/            独立页面
│   ├── timeline.html     生物学发现时间线
│   └── books.html        参考书下载页
├── lessons/          每次课一个文件夹（网页 + 该课自己的素材）
│   └── 生物演化1/        示例：index.html + assets/
├── assets/           公共资源（样式、脚本、公共图片）
│   ├── home.css / style.css
│   ├── lessons.js / files.js / script.js
│   └── images/           时间线等页面用的图片
└── materials/        参考书电子书文件（epub / pdf）
```

## 新增一次课（两步）

1. 在 `lessons/` 下新建一个文件夹（如 `lessons/生物演化2/`），
   把该课的网页放进去并命名为 `index.html`，图片等素材放在同一文件夹内。
2. 打开 `assets/lessons.js`，照注释格式加一条记录
   （date、title、url 填文件夹路径，如 `lessons/生物演化2/`）。

刷新主页即可看到新课。

## 新增参考书（两步）

1. 把 epub / pdf 文件放入 `materials/` 文件夹。
2. 打开 `assets/files.js`，照注释格式添加一条记录（标题、文件名、简介）。

刷新 `pages/books.html` 即可看到。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 主页（入口导航，一般不用改） |
| `pages/timeline.html` | 生物学发现时间线交互页面 |
| `pages/books.html` | 参考书下载页（一般不用改） |
| `assets/lessons.js` | **课程登记表（加课时只改这个）** |
| `assets/files.js` | **参考书登记表（加书时只改这个）** |
| `assets/script.js` | 自动生成书目卡片（一般不用改） |
| `assets/home.css`、`assets/style.css` | 样式 |
| `lessons/` | 每次课一个文件夹，互不影响 |
| `materials/` | 存放参考书等实际文件 |
