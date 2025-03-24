import React, { useEffect, useState, CSSProperties } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";

interface TestHeaderProps {
  extClass?: string;
  background?: string;
  backgroundColorTop?: string;
  color?: string;
  title?: string;
  searchText?: string;
  searchBar?: boolean;
  back?: boolean;
  home?: boolean;
  iconTheme?: "black" | "white";
  delta?: number;
}

interface SystemInfo {
  statusBarHeight: number;
  navBarHeight: number;
  capsulePosition: {
    width: number;
    height: number;
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
  navBarExtendHeight: number;
  ios: boolean;
  windowWidth: number;
}

const TestHeader: React.FC<TestHeaderProps> = ({
  extClass = "",
  background = "rgba(255, 255, 255, 1)",
  backgroundColorTop = "rgba(255, 255, 255, 1)",
  color = "rgba(0, 0, 0, 1)",
  title = "",
  searchText = "点我搜索",
  searchBar = false,
  back = false,
  home = false,
  iconTheme = "black",
  delta = 1,
}) => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [navigationStyle, setNavigationStyle] = useState<CSSProperties>({});
  const [navBarLeftStyle, setNavBarLeftStyle] = useState<CSSProperties>({});

  const getSystemInfo = () => {
    const app = Taro.getApp();
    if (app.globalSystemInfo && !app.globalSystemInfo.ios) {
      console.log("复用全局系统信息:", app.globalSystemInfo);
      return app.globalSystemInfo;
    }

    const sysInfo = Taro.getWindowInfo();
    const deviceInfo = Taro.getDeviceInfo();
    console.log("获取系统信息:", sysInfo);

    const ios = !!deviceInfo.system.toLowerCase().includes("ios");
    const rect = getMenuButtonBoundingClientRect(sysInfo);

    let navBarHeight = 0;
    let navBarExtendHeight = 0;

    if (!sysInfo.statusBarHeight) {
      sysInfo.statusBarHeight =
        sysInfo.screenHeight - sysInfo.windowHeight - 20;
      const gap = rect.top - sysInfo.statusBarHeight;
      navBarHeight = 2 * gap + rect.height;
      navBarExtendHeight = 0;
      console.log("状态栏高度缺失，计算结果:", {
        statusBarHeight: sysInfo.statusBarHeight,
        navBarHeight,
        gap,
      });
    } else {
      const gap = rect.top - sysInfo.statusBarHeight;
      navBarHeight = 2 * gap + rect.height;
      navBarExtendHeight = ios ? 4 : 0;
      console.log("状态栏高度：", sysInfo.statusBarHeight);
      console.log("正常计算导航栏高度:", {
        statusBarHeight: sysInfo.statusBarHeight,
        navBarHeight,
        gap,
        navBarExtendHeight,
      });
    }

    const info: SystemInfo = {
      statusBarHeight: sysInfo.statusBarHeight,
      navBarHeight,
      capsulePosition: rect,
      navBarExtendHeight,
      ios,
      windowWidth: sysInfo.windowWidth,
    };

    app.globalSystemInfo = info;
    console.log("最终系统信息:", info);
    return info;
  };

  const getMenuButtonBoundingClientRect = (sysInfo: any) => {
    let rect;
    try {
      rect = Taro.getMenuButtonBoundingClientRect();
      console.log("调用 getMenuButtonBoundingClientRect:", rect);
      if (!rect || checkRect(rect)) {
        throw new Error("getMenuButtonBoundingClientRect error");
      }
    } catch (error) {
      console.warn("获取胶囊信息失败，使用默认值:", error.message);
      let gap = 0;
      let width = 96;
      if (sysInfo.platform === "android") {
        gap = 8;
        width = 96;
      } else if (sysInfo.platform === "devtools") {
        gap = sysInfo.ios ? 5.5 : 7.5;
      } else {
        gap = 4;
        width = 88;
      }
      if (!sysInfo.statusBarHeight) {
        sysInfo.statusBarHeight =
          sysInfo.screenHeight - sysInfo.windowHeight - 20;
      }
      rect = {
        bottom: sysInfo.statusBarHeight + gap + 32,
        height: 32,
        left: sysInfo.windowWidth - width - 10,
        right: sysInfo.windowWidth - 10,
        top: sysInfo.statusBarHeight + gap,
        width,
      };
      console.log("构造默认胶囊信息:", rect);
    }
    return rect;
  };

  const checkRect = (rect: any) => {
    const isInvalid = !rect.width || !rect.top || !rect.left || !rect.height;
    console.log("检查胶囊信息有效性:", { rect, isInvalid });
    return isInvalid;
  };

  const setStyle = () => {
    if (!systemInfo) {
      console.warn("systemInfo 未初始化，跳过样式计算");
      return;
    }

    const {
      statusBarHeight,
      navBarHeight,
      capsulePosition,
      navBarExtendHeight,
      windowWidth,
    } = systemInfo;

    const rightDistance = windowWidth - capsulePosition.right;
    const leftWidth = windowWidth - capsulePosition.left;
    console.log("计算边距:", { rightDistance, leftWidth });

    // const navigationbarinnerStyle = `
    //   color: ${color};
    //   background: rgba(57, 93, 253, 0.3);
    //   height: ${navBarHeight + navBarExtendHeight}px;
    //   display: flex;
    //   align-items: center;
    // `;
    // console.log("导航栏样式:", navigationbarinnerStyle);
    // setNavigationStyle(navigationbarinnerStyle);

    const navStyle: CSSProperties = {
      color,
      background: "rgba(57, 93, 253, 0.3);",
      height: `${navBarHeight}px`,
      // height: `${navBarHeight + navBarExtendHeight}px`,
      // paddingBottom: `${navBarExtendHeight}px`,
      display: "flex",
      alignItems: "center",
    };
    setNavigationStyle(navStyle);

    let navBarLeft: CSSProperties = {};
    if ((back && !home) || (!back && home)) {
      navBarLeft = {
        width: `${capsulePosition.width}px`,
        height: `${capsulePosition.height}px`,
      };
    } else if (back && home) {
      navBarLeft = {
        width: `${capsulePosition.width * 2}px`,
        height: `${capsulePosition.height}px`,
      };
    } else {
      navBarLeft = {
        width: `0px`,
        height: `0px`,
      };
    }
    setNavBarLeftStyle(navBarLeft);
    console.log("左侧样式:", navBarLeft);
  };

  const handleBack = () => {
    console.log("触发返回事件:", { delta });
    Taro.navigateBack({ delta });
  };

  const handleHome = () => {
    console.log("触发首页事件");
    Taro.switchTab({ url: "/pages/index/index" });
  };

  const handleSearch = () => {
    console.log("触发搜索事件");
  };

  useEffect(() => {
    console.log("组件初始化，获取系统信息");
    const info = getSystemInfo();
    setSystemInfo(info);
  }, []);

  useEffect(() => {
    if (systemInfo) {
      console.log("系统信息更新，重新计算样式:", systemInfo);
      setStyle();
    }
  }, [systemInfo, background, color, back, home, title]);

  console.log("渲染组件，当前 props:", {
    title,
    searchBar,
    back,
    home,
    iconTheme,
  });

  return (
    <View
      className={`w-full ${extClass}`}
      style={{ background: backgroundColorTop }}
    >
      {/* 状态栏区域 - 黄色 */}
      {systemInfo && (
        <View
          style={{
            height: systemInfo.statusBarHeight + "px",
            backgroundColor: "rgba(255, 255, 0, 0.3)", // 黄色 - 状态栏
            width: "100%",
          }}
        />
      )}

      {/* 导航栏主体 */}
      <View className="w-full" style={navigationStyle}>
        {/* 左侧区域 - 红色 */}
        <View
          className="flex items-center"
          style={{
            ...navBarLeftStyle,
            backgroundColor: "rgba(255, 0, 0, 0.3)", // 红色 - 左侧整体
          }}
        >
          {back && (
            <View
              onClick={handleBack}
              className="p-2"
              style={{
                backgroundColor: "rgba(255, 165, 0, 0.3)", // 橙色 - 返回按钮
              }}
            >
              <Text className={`text-${iconTheme}`}>返回</Text>
            </View>
          )}
          {home && (
            <View
              onClick={handleHome}
              className="p-2"
              style={{
                backgroundColor: "rgba(255, 165, 0, 0.3)", // 橙色 - 首页按钮
              }}
            >
              <Text className={`text-${iconTheme}`}>首页</Text>
            </View>
          )}
        </View>

        {/* 中间区域 - 绿色 */}
        <View
          className="flex-1 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0, 255, 0, 0.3)", // 绿色 - 中间整体
            height: systemInfo?.capsulePosition.height + "px",
            lineHeight: systemInfo?.capsulePosition.height + "px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {searchBar ? (
            <View
              onClick={handleSearch}
              className="flex items-center rounded-full px-4 py-2 w-3/4"
              style={{
                backgroundColor: "rgba(144, 238, 144, 0.3)", // 浅绿色 - 搜索栏
                height: systemInfo?.capsulePosition.height + "px",
              }}
            >
              <Image src="search-icon.png" className="w-4 h-4 mr-2" />
              <Text className="text-gray-500">{searchText}</Text>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: "rgba(144, 238, 144, 0.3)", // 浅绿色 - 标题容器
                padding: "2px 4px", // 增加内边距以便观察
              }}
            >
              <Text className="text-base font-medium" style={{ color }}>
                {title}
              </Text>
            </View>
          )}
        </View>

        {/* 右侧区域 - 蓝色 */}
        <View
          style={{
            width: systemInfo?.capsulePosition.width + "px",
            height: systemInfo?.capsulePosition.height + "px",
            marginRight: `${
              (systemInfo?.windowWidth ?? 0) -
              (systemInfo?.capsulePosition.right ?? 0)
            }px`,
            backgroundColor: "rgba(0, 0, 255, 0.5)", // 蓝色 - 右侧占位
          }}
        />
      </View>
    </View>
  );
};

export default TestHeader;
