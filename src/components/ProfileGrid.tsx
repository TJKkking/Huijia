import { View, Text } from "@tarojs/components";
import { FC } from "react";
import IconFont from "@/components/iconfont";
import { IconNames } from "@/components/iconfont";

interface GridItem {
  icon: IconNames; // IconFont 图标名称
  label: string;
  color?: string; // 可选：图标颜色
}

interface ProfileGridProps {
  items: GridItem[];
}

const ProfileGrid: FC<ProfileGridProps> = ({ items }) => {
  return (
    <View className="flex mt-4 overflow-hidden shadow-sm bg-m3-surfaceContainer rounded-xl">
      {items.map((item, index) => (
        <View
          key={index}
          className="flex-1 border-r border-m3-outline/10 last:border-r-0"
        >
          <View className="flex flex-col items-center justify-center py-5">
            <IconFont
              name={item.icon}
              size={65}
              color={item.color || "#625B71"}
              style={{ display: "block" }} // 强制为 block 避免 baseline 对齐问题
            />
            <Text className="mt-1 text-sm text-m3-onSurfaceVariant">
              {item.label}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProfileGrid;
