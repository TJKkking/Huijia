import { View, Text, Image } from "@tarojs/components";
import { FC } from "react";

const ProfileGrid: FC = () => {
  const items = [
    { icon: "⭐", label: "我的收藏" },
    { icon: "💬", label: "我的评论" },
    { icon: "📄", label: "我的发布" },
  ];

  return (
    <View className="flex mt-4 overflow-hidden shadow-sm bg-m3-surfaceContainer rounded-xl">
      {items.map((item, index) => (
        <View
          key={index}
          className="flex-1 py-5 text-center border-r border-m3-outline/10 last:border-r-0"
        >
          <Text className="block mb-1 text-xl">{item.icon}</Text>
          <Text className="text-sm text-m3-onSurfaceVariant">{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default ProfileGrid;
