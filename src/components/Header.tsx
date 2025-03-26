import React, { useEffect, useState, CSSProperties } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Input } from "@tarojs/components";
import IconFont from "@/components/iconfont";

interface HeaderProps {
  extClass?: string;
  color?: string;
  title?: string;
  searchText?: string;
  searchBar?: boolean;
  back?: boolean;
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
  color = "#1C1B1F",
  title = "",
  searchBar = false,
  back = true,
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
      backgroundColor: "#ECE6F0",
      height: `${navBarHeight}px`,
      display: "flex",
      alignItems: "center",
    };
    setNavigationStyle(navStyle);

    const navBarLeft: CSSProperties = {
      width: `${capsulePosition.width}px`,
      height: `${capsulePosition.height}px`,
      marginLeft: `${systemInfo.windowWidth - capsulePosition.right}px`,
      padding: `0`,
    };
    setNavBarLeftStyle(navBarLeft);
  };

  const handleBack = () => {
    Taro.navigateBack({ delta });
  };

  useEffect(() => {
    const info = getSystemInfo();
    setSystemInfo(info);
  }, []);

  useEffect(() => {
    if (systemInfo) {
      setStyle();
    }
  }, [systemInfo, color, back, title]);

  if (!systemInfo) return null;

  return (
    <View
      className={`w-full ${extClass} bg-m3-surfaceContainerHigh dark:bg-m3-dark-surfaceContainerHigh`}
    >
      <View
        style={{ height: `${systemInfo.statusBarHeight}px`, width: "100%" }}
      />
      <View className="w-full" style={navigationStyle}>
        <View className="flex items-center" style={navBarLeftStyle}>
          {back ? (
            <Text
              className="text-base text-m3-primary"
              style={{ lineHeight: `${systemInfo.capsulePosition.height}px` }}
              onClick={handleBack}
            >
              &lt; 返回
            </Text>
          ) : (
            <HeaderSearch width={systemInfo.capsulePosition.width * 0.8} />
          )}
        </View>
        <View
          className="flex items-center justify-center flex-1"
          style={{
            height: `${systemInfo.capsulePosition.height}px`,
            lineHeight: `${systemInfo.capsulePosition.height}px`,
          }}
        >
          <View style={{ padding: "2px 4px" }}>
            <Text className="text-base font-medium text-m3-onSurface dark:text-m3-dark-onSurface">
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
      className="flex items-center px-3 py-1 rounded-full bg-m3-surfaceContainerLow dark:bg-m3-dark-surfaceContainerLow"
      style={{ width: `${width}px` }}
    >
      <IconFont
        name="search"
        size={35}
        color="#79747E" // m3-outline
        style={{ display: "block" }}
      />
      <Input
        className="flex-1 ml-2 text-sm text-m3-onSurface dark:text-m3-dark-onSurface"
        confirmType="search"
        placeholder=""
      />
    </View>
  );
}
