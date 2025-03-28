import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { FC } from "react";

// 用户信息卡片
const UserInfoCard: FC = () => {
  const handleEditProfile = () => {
    Taro.navigateTo({ url: "/pages/profile/edit" });
  };

  return (
    <View className="flex items-center justify-between px-4 py-3 shadow-sm bg-m3-surfaceContainer">
      <View className="flex items-center">
        <Image
          src="https://ootao.cn/static/avatar.jpg"
          className="mr-3 bg-gray-300 rounded-full w-14 h-14"
          mode="aspectFill"
        />
        <View>
          <Text
            className="text-base font-semibold underline cursor-pointer text-m3-primary"
            onClick={handleEditProfile}
          >
            Alice
          </Text>
        </View>
      </View>
      <View className="px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full">
        已认证
      </View>
    </View>
  );
};

export default UserInfoCard;
