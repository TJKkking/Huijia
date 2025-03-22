export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/post/index",
    "pages/post-detail/index", // 帖子详情
    "pages/post-create/index", // 发布页
    "pages/message-center/index", // 消息中心
    "pages/user/index", // 个人中心
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "Huijia",
    navigationBarTextStyle: "black",
  },
});
