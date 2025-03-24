# 🎓 Huijia (开发中)

一个为校园学生设计的微信小程序，提供便捷的信息交流与互助平台。

---

## 📱 项目简介

Huijia 是一个面向校内用户的小程序，致力于构建一个**温暖、高效、有序**的学生社区。

支持的核心功能包括：

- 🏠 首页信息流（帖子浏览 + 分类过滤）
- ➕ 帖子发布（活动 / 求助 / 信息 / 吐槽）
- 💬 消息互动（私信、评论、@通知等）
- 👤 个人主页（历史、收藏、设置）

项目采用 **Taro + React + TypeScript + TailwindCSS** 构建，追求简洁优雅的 UI 和高质量的代码组织结构。

---

## 🛠️ 技术栈

| 分类        | 技术                     |
|-------------|--------------------------|
| 框架        | [Taro](https://taro.zone/) + React |
| 语言        | TypeScript               |
| 样式        | Tailwind CSS             |
| 图标系统    | IconFont（计划支持自定义主题色） |
| 构建工具    | Vite                     |
| 状态管理    | [暂未集成，可选 Zustand/Recoil] |

---

## 📁 目录结构概览（规划中）

```bash
src/
├── pages/              # 小程序页面目录
│   ├── index/          # 首页
│   ├── publish/        # 发布页
│   ├── message/        # 消息页
│   └── profile/        # 我的页面
├── components/         # 通用组件（Segmented、Tabs、Header 等）
├── assets/             # 静态资源（图标、图片等）
└── utils/              # 工具函数 / 公共逻辑
