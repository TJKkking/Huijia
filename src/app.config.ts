import { useGlobalIconFont } from "./components/iconfont/helper";

export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/post/index",
    "pages/post-detail/index", // 帖子详情
    "pages/publish/index", // 发布页
    "pages/message/index", // 消息中心
    "pages/profile/index", // 个人中心
  ],
  window: {
    backgroundTextStyle: "light",
    navigationStyle: "custom",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "Huijia",
    navigationBarTextStyle: "black",
  },

  tabBar: {
    color: "#999999",
    selectedColor: "#D0BCFF",
    backgroundColor: "#F7F2FA",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/icons/home_gray.png",
        selectedIconPath: "assets/icons/home_7B61FF.png",
      },
      {
        // pagePath: "pages/publish/index",
        pagePath: "pages/post-detail/index",
        text: "发布",
        iconPath: "assets/icons/edit_square_gray.png",
        selectedIconPath: "assets/icons/edit_square_7B61FF.png",
      },
      {
        pagePath: "pages/message/index",
        text: "消息",
        iconPath: "assets/icons/sms_gray.png",
        selectedIconPath: "assets/icons/sms_7B61FF.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "assets/icons/account_circle_gray.png",
        selectedIconPath: "assets/icons/account_circle_7B61FF.png",
      },
    ],
  },
  usingComponents: Object.assign(useGlobalIconFont()),
});
