import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function PostDetail() {
  useLoad(() => {
    console.log("Post Detail Page loaded.");
  });

  return (
    <View className="post-detail-page">
      <Text>Post Detail Page</Text>
    </View>
  );
}
