import { useLoad, navigateTo } from "@tarojs/taro";
import "./index.scss";
import PageLayout from "@/components/PageLayout";
import MessageList from "@/components/MessageList";
import Header from "@/components/Header";

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
    <PageLayout
      header={<Header title="消息" back={true} />}
      // fixedTopHeight={88}
    >
      <MessageList />
    </PageLayout>
  );
}
