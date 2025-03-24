import { View, ScrollView, ScrollViewProps } from "@tarojs/components";
import { ReactNode, useEffect, useState } from "react";
import Taro from "@tarojs/taro";

interface PageLayoutProps {
  header?: ReactNode;
  topContent?: ReactNode;
  children: ReactNode;
  onScrollToLower?: ScrollViewProps["onScrollToLower"];
  scrollProps?: Omit<ScrollViewProps, "scrollY" | "onScrollToLower">;
  fixedTopHeight?: number;
}

export default function PageLayout({
  header,
  topContent,
  children,
  onScrollToLower,
  scrollProps,
  fixedTopHeight,
}: PageLayoutProps) {
  const [scrollHeight, setScrollHeight] = useState("100vh");

  useEffect(() => {
    const systemInfo = Taro.getSystemInfoSync();
    const windowHeight = systemInfo.windowHeight;

    const fallbackFixed = 300;
    const topHeight = fixedTopHeight ?? fallbackFixed;
    const calculatedHeight = windowHeight - topHeight;
    setScrollHeight(`${calculatedHeight}px`);
  }, [fixedTopHeight]);

  return (
    <View
      className="w-full h-screen flex flex-col"
      style={{ overflow: "hidden" }}
    >
      {header}

      {topContent && <View className="px-2">{topContent}</View>}

      <ScrollView
        scrollY
        style={{ height: scrollHeight }}
        className="pb-6"
        onScrollToLower={onScrollToLower}
        {...scrollProps}
      >
        {children}
      </ScrollView>
    </View>
  );
}
