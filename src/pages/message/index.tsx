import { View, Button } from "@tarojs/components";
import { useLoad, navigateTo } from "@tarojs/taro";
import "./index.scss";

export default function MessageCenter() {
  useLoad(() => {
    console.log("Message Center Page loaded.");
  });

  const handleNavigateToPostPublish = () => {
    navigateTo({ url: "/pages/post/index" });
  };

  const handleNavigateToPostDetail = () => {
    navigateTo({ url: "/pages/post-detail/index" });
  };

  const handleNavigateToPostCreate = () => {
    navigateTo({ url: "/pages/post-create/index" });
  };

  const handleNavigateToMessageCenter = () => {
    navigateTo({ url: "/pages/message-center/index" });
  };

  const handleNavigateToUser = () => {
    navigateTo({ url: "/pages/user/index" });
  };

  return (
    <View className="message-center-page">
      <View className="text-[#a445ed] text-[100px]">Hello world!</View>
      <View className="button-list">
        <Button
          className="post-publish-btn"
          onClick={handleNavigateToPostPublish}
        >
          Go to Publish Page
        </Button>
        <Button
          className="post-publish-btn"
          onClick={handleNavigateToPostDetail}
        >
          Go to Post Detail Page
        </Button>
        <Button
          className="post-publish-btn"
          onClick={handleNavigateToPostCreate}
        >
          Go to Post Create Page
        </Button>
        <Button
          className="post-publish-btn"
          onClick={handleNavigateToMessageCenter}
        >
          Go to Message Center
        </Button>
        <Button className="post-publish-btn" onClick={handleNavigateToUser}>
          Go to User Center
        </Button>
      </View>
    </View>
  );
}
