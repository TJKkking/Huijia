import { View, ScrollView, ScrollViewProps } from "@tarojs/components";
import { ReactNode, useEffect, useState } from "react";
import Taro from "@tarojs/taro";

interface PageLayoutProps {
  header?: ReactNode;
  topContent?: ReactNode;
  children: ReactNode;
  onScrollToLower?: ScrollViewProps["onScrollToLower"];
  scrollProps?: Omit<ScrollViewProps, "scrollY" | "onScrollToLower">;
}

export default function PageLayout({
  header,
  topContent,
  children,
  onScrollToLower,
  scrollProps,
}: PageLayoutProps) {
  const [scrollHeight, setScrollHeight] = useState("100vh");

  useEffect(() => {
    const queryHeaderHeight = async () => {
      const systemInfo = Taro.getSystemInfoSync();
      const windowHeight = systemInfo.windowHeight;
      const statusbarHeight = systemInfo.statusBarHeight;
      // console.log("statusbarHeight", statusbarHeight);

      Taro.createSelectorQuery()
        .select("#fixed-header")
        .boundingClientRect((rect) => {
          if (rect) {
            const topHeight = rect.height;
            const calculatedHeight =
              windowHeight - topHeight + (statusbarHeight || 47) + 7;
            setScrollHeight(`${calculatedHeight}px`);
          }
        })
        .exec();
    };

    queryHeaderHeight();
  }, []);

  return (
    <View
      className="flex flex-col w-full h-screen bg-m3-background"
      style={{ overflow: "hidden" }}
    >
      <View id="fixed-header">
        {header}
        {topContent && <View className="px-2">{topContent}</View>}
      </View>

      {/* <SurfaceColorReference /> */}

      <ScrollView
        scrollY
        style={{ height: scrollHeight }}
        className="pb-1"
        onScrollToLower={onScrollToLower}
        {...scrollProps}
      >
        {children}
      </ScrollView>
    </View>
  );
}
