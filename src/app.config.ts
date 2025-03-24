import { useGlobalIconFont } from "./components/iconfont/helper";

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
    navigationStyle: "custom",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "Huijia",
    navigationBarTextStyle: "black",
  },

  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/icons/home.png",
        selectedIconPath: "assets/icons/home-active.png",
        text: "首页",
      },
      {
        pagePath: "pages/post-create/index",
        iconPath: "assets/icons/add.png",
        selectedIconPath: "assets/icons/add-active.png",
        text: "发布",
      },
      {
        pagePath: "pages/message-center/index",
        iconPath: "assets/icons/message.png",
        selectedIconPath: "assets/icons/message-active.png",
        text: "消息",
      },
      {
        pagePath: "pages/user/index",
        iconPath: "assets/icons/user.png",
        selectedIconPath: "assets/icons/user-active.png",
        text: "我的",
      },
    ],
    color: "#999999",
    selectedColor: "#8B5CF6",
    backgroundColor: "#ffffff",
    borderStyle: "white",
  },
  usingComponents: Object.assign(useGlobalIconFont()),
});
