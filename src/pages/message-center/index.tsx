import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function MessageCenter() {
  useLoad(() => {
    console.log("Message Center Page loaded.");
  });

  return (
    <View className="message-center-page">
      <Text>Message Center Page</Text>
    </View>
  );
}
