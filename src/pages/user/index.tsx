import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function UserCenter() {
  useLoad(() => {
    console.log("User Center Page loaded.");
  });

  return (
    <View className="user-center-page">
      <Text>User Center Page</Text>
    </View>
  );
}
