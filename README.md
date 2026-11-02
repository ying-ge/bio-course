# 课程资料中心（静态网页）

给本科生发布的课程资料下载页。无需服务器：任意静态托管（学校主页空间、
GitHub Pages、Gitee Pages）上传整个 `bio-course/` 文件夹即可使用。

## 目录结构

```
bio-course/
├── index.html        主页（课程列表入口，一般不用改）
├── books.html        参考书下载页（根目录）
├── lessons/          每次课一个文件夹（index.html + 该课自己的素材 assets/）
│   └── 生物演化1/        第1讲：翻页幻灯片版课件（示例）
├── assets/           公共资源（样式、脚本）
│   ├── home.css / style.css
│   ├── lessons.js / files.js / script.js
│   └── lecture.css / lecture.js   课堂幻灯片框架（各课课件共用：翻页/阅读模式/灯箱）
└── materials/        参考书电子书文件（epub / pdf）
```

## 新增一次课（两步）

1. 在 `lessons/` 下新建一个文件夹（如 `lessons/生物演化2/`），
   把该课的网页放进去并命名为 `index.html`，图片等素材放在其 `assets/` 子文件夹内。
   课件可直接复制 `lessons/生物演化1/index.html` 修改内容：
   头部引用公共框架 `<link rel="stylesheet" href="../../assets/lecture.css">`、
   尾部 `<script src="../../assets/lecture.js"></script>`，
   自动获得翻页 / 课后阅读模式 / 明暗切换。
2. 打开 `assets/lessons.js`，照注释格式加一条记录
   （date、title、url 填文件夹路径，如 `lessons/生物演化2/`）。

刷新主页即可看到新课。

## 新增参考书（两步）

1. 把 epub / pdf 文件放入 `materials/` 文件夹。
2. 打开 `assets/files.js`，照注释格式添加一条记录（标题、文件名、简介）。

刷新 `books.html` 即可看到。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 主页（入口导航，一般不用改） |
| `books.html` | 参考书下载页（根目录，一般不用改） |
| `assets/lessons.js` | **课程登记表（加课时只改这个）** |
| `assets/files.js` | **参考书登记表（加书时只改这个）** |
| `assets/script.js` | 自动生成书目卡片（一般不用改） |
| `assets/lecture.css`、`assets/lecture.js` | 课堂幻灯片公共框架（翻页/阅读模式/明暗切换/图片灯箱） |
| `assets/home.css`、`assets/style.css` | 样式 |
| `lessons/` | 每次课一个文件夹，互不影响 |
| `materials/` | 存放参考书等实际文件 |

## 课件放映功能（lecture.js 自动提供）

- **双模式**：课堂幻灯片模式（按 section 翻页，←/→/空格/PageUp/PageDown）与课后阅读模式（整页滚动）一键切换；`details.ext` 拓展块与 `.rd`（来源署名等）仅在阅读模式显示，放映时自动隐藏。
- **图片灯箱**：课件中任何图片默认可点击放大（需写成 `<a href="img/xxx.jpg"><img src="…"></a>` 包裹形式）。灯箱内 ←/→ 或两侧箭头按钮切换同页图片，触屏左右滑动切换、双指捏合缩放（1×–8×）；Esc（非全屏）或 Q 键、点击图片外区域关闭。
- **明暗主题**与**全屏**按钮由页面顶部工具栏提供。

## 课件编写约定（以 生物演化1 为模板）

- 每页一个 `<section>`，页内可加 `<span class="tag">…</span>` 标注板块标签。
- 关键词用 `<mark>` 荧光标记；标题性强调用 `<b>`。
- 课后延伸内容放 `<details class="ext"><summary>标题</summary>…</details>`，来源署名行用 `<p class="min rd">`（放映隐藏）。
- 图片放该课文件夹的 `img/` 下，压缩到 ≤720px 宽以控制体积；CC 协议图片须在 `.min rd` 行注明作者与协议。
