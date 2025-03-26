import { View, Text } from "@tarojs/components";
import { FC } from "react";
import IconFont from "@/components/iconfont";
import { IconNames } from "@/components/iconfont";

interface SettingListProps {
  lists: { icon: IconNames; label: string }[][];
}

const SettingList: FC<SettingListProps> = ({ lists }) => {
  return (
    <View className="mt-4 space-y-4">
      {lists.map((list, groupIndex) => (
        <View
          key={groupIndex}
          className="divide-y shadow-sm bg-m3-surfaceContainer rounded-xl divide-m3-outline/10"
        >
          {list.map((item, index) => (
            <View key={index} className="flex items-center px-4 py-3">
              <IconFont
                name={item.icon}
                size={55}
                color="#6750A4"
                style={{ marginRight: 12 }}
              />
              <Text className="text-sm text-m3-onSurfaceVariant">
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default SettingList;
