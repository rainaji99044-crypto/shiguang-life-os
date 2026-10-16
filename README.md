# 拾光 Life OS V2.1

一个移动优先、可离线使用的个人 Life OS 工作台。项目由原生 HTML、CSS 和 JavaScript 构成，不依赖 ChatGPT、OpenAI 组件、账号登录或自建服务器。

## 数据说明

- 所有任务、习惯、日记和私人资料默认保存在当前浏览器的 `localStorage`。
- 数据不会提交到 GitHub，也不会在电脑与手机之间自动同步。
- 在「我的 → 更多」中可以导出完整 JSON 备份，也可以导入备份恢复数据；导入前会提示确认。
- V2.1 会自动迁移旧版习惯记录。旧记账金额记录继续保留在备份数据中，但不再显示或转换成习惯打卡。

## 直接使用

部署后直接访问网址即可，不需要安装开发工具。支持 Windows 浏览器、iPhone Safari 和添加到主屏幕。

开发预览可在项目目录运行 `npm start` 后访问 `http://localhost:4173`，这只用于开发检查，不是正常使用的必要条件。

## GitHub Pages 部署

项目包含 `.github/workflows/pages.yml`，把完整项目上传到 GitHub 仓库后：

1. 打开仓库的 **Settings → Pages**。
2. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
3. 推送到 `main` 分支后，GitHub 会自动发布 `dist` 目录。

网站使用相对资源路径和 `#` 路由，兼容 GitHub Pages 子路径，刷新不会产生路由空白页。
