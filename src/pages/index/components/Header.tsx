import React, { useEffect, useState, CSSProperties } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Input } from "@tarojs/components";

interface HeaderProps {
  extClass?: string;
  background?: string;
  backgroundColorTop?: string;
  color?: string;
  title?: string;
  searchText?: string;
  searchBar?: boolean;
  back?: boolean;
  home?: boolean;
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

const Header: React.FC<HeaderProps> = ({
  extClass = "",
  background = "#ffffff",
  backgroundColorTop = "#ffffff",
  color = "#000000",
  title = "",
  searchBar = false,
  back = false,
  home = false,
  delta = 1,
}) => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [navigationStyle, setNavigationStyle] = useState<CSSProperties>({});
  const [navBarLeftStyle, setNavBarLeftStyle] = useState<CSSProperties>({});

  const getSystemInfo = () => {
    const app = Taro.getApp();
    if (app.globalSystemInfo && !app.globalSystemInfo.ios) {
      return app.globalSystemInfo;
    }

    const sysInfo = Taro.getWindowInfo();
    const deviceInfo = Taro.getDeviceInfo();
    const ios = !!deviceInfo.system.toLowerCase().includes("ios");
    const rect = getMenuButtonBoundingClientRect(sysInfo);

    let navBarHeight = 0;
    let navBarExtendHeight = 0;

    if (!sysInfo.statusBarHeight) {
      sysInfo.statusBarHeight =
        sysInfo.screenHeight - sysInfo.windowHeight - 20;
      const gap = rect.top - sysInfo.statusBarHeight;
      navBarHeight = 2 * gap + rect.height;
    } else {
      const gap = rect.top - sysInfo.statusBarHeight;
      navBarHeight = 2 * gap + rect.height;
      navBarExtendHeight = ios ? 4 : 0;
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
    return info;
  };

  const getMenuButtonBoundingClientRect = (sysInfo: any) => {
    let rect;
    try {
      rect = Taro.getMenuButtonBoundingClientRect();
      if (!rect || checkRect(rect)) {
        throw new Error("getMenuButtonBoundingClientRect error");
      }
    } catch (error) {
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
    }
    return rect;
  };

  const checkRect = (rect: any) => {
    return !rect.width || !rect.top || !rect.left || !rect.height;
  };

  const setStyle = () => {
    if (!systemInfo) return;

    const { navBarHeight, capsulePosition } = systemInfo;

    const navStyle: CSSProperties = {
      color,
      background,
      height: `${navBarHeight}px`,
      display: "flex",
      alignItems: "center",
    };
    setNavigationStyle(navStyle);

    // 与胶囊按钮对称
    let navBarLeft: CSSProperties = {
      width: `${capsulePosition.width}px`,
      height: `${capsulePosition.height}px`,
      marginLeft: `${systemInfo.windowWidth - capsulePosition.right}px`,
      padding: `0 0 0 0`,
    };
    // if ((back && !home) || (!back && home)) {
    //   navBarLeft = {
    //     width: `${capsulePosition.width}px`,
    //     height: `${capsulePosition.height}px`,
    //   };
    // } else if (back && home) {
    //   navBarLeft = {
    //     width: `${capsulePosition.width * 2}px`,
    //     height: `${capsulePosition.height}px`,
    //   };
    // } else {
    //   navBarLeft = {
    //     width: `0px`,
    //     height: `0px`,
    //   };
    // }
    setNavBarLeftStyle(navBarLeft);
  };

  const handleBack = () => {
    Taro.navigateBack({ delta });
  };

  const handleHome = () => {
    Taro.switchTab({ url: "/pages/index/index" });
  };

  const handleSearch = () => {};

  useEffect(() => {
    const info = getSystemInfo();
    setSystemInfo(info);
  }, []);

  useEffect(() => {
    if (systemInfo) {
      setStyle();
    }
  }, [systemInfo, background, color, back, home, title]);

  if (!systemInfo) return null;

  return (
    <View
      className={`w-full ${extClass}`}
      style={{ background: backgroundColorTop }}
    >
      <View
        style={{ height: `${systemInfo.statusBarHeight}px`, width: "100%" }}
      />
      <View className="w-full" style={navigationStyle}>
        <View
          className="flex "
          style={{
            ...navBarLeftStyle,
            // backgroundColor: "rgba(255, 0, 0, 0.3)",
          }}
        >
          {/* <AtSearchBar
            className="w-full"
            customStyle="width: 80%; padding: 0;"
            value={""}
            placeholder=""
            // maxLength={systemInfo.capsulePosition.width}
            showActionButton={false}
            onChange={(value) => console.log(value)}
          /> */}
          {/* <View className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
            <Text className="text-gray-400 text-base">🔍</Text>
            <Input
              placeholder="搜索"
              className="flex-1 ml-2 text-sm text-gray-700"
            />
          </View> */}
          <HeaderSearch width={systemInfo.capsulePosition.width * 0.8} />
        </View>
        <View
          className="flex-1 flex items-center justify-center"
          style={{
            height: `${systemInfo.capsulePosition.height}px`,
            lineHeight: `${systemInfo.capsulePosition.height}px`,
          }}
        >
          <View style={{ padding: "2px 4px" }}>
            <Text className="text-base font-medium" style={{ color }}>
              {title}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: `${systemInfo.capsulePosition.width}px`,
            height: `${systemInfo.capsulePosition.height}px`,
            marginRight: `${
              systemInfo.windowWidth - systemInfo.capsulePosition.right
            }px`,
          }}
        />
      </View>
    </View>
  );
};

export default Header;

export function HeaderSearch({ width = 120 }: { width?: number }) {
  return (
    <View
      className="bg-gray-100 rounded-full px-3 py-1 flex items-center"
      style={{ width: `${width}px` }}
    >
      <Text className="text-gray-400 text-base">🔍</Text>
      <Input
        className="text-sm text-gray-700 ml-2 flex-1"
        confirmType="search"
        placeholder=""
      />
    </View>
  );
}
