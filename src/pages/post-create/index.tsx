import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function PostCreate() {
  useLoad(() => {
    console.log("Post Create Page loaded.");
  });

  return (
    <View className="post-create-page">
      <Text>Post Create Page</Text>
    </View>
  );
}
