import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useState } from "react";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import PostContent from "@/components/PostContent";
import CommentHeader from "@/components/CommentHeader";
import CommentList from "@/components/CommentList";

const PostDetailPage = () => {
  const [commentOrder, setCommentOrder] = useState<"asc" | "desc">("desc");
  const [comments, setComments] = useState([
    {
      id: "1",
      avatar: "/assets/avatar-a.png",
      nickname: "Alice",
      content:
        "这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语",
      time: "2025年03月21日 09:47",
    },
    {
      id: "2",
      avatar: "/assets/avatar-a.png",
      nickname: "Alice",
      content: "再次让人感受到 DeepSeek 等开源模型……",
      time: "2025年03月21日 09:47",
    },
    {
      id: "3",
      avatar: "/assets/avatar-b.png",
      nickname: "Bob",
      content: "这是一个测试评论。",
      time: "2025年03月22日 10:00",
    },
    {
      id: "4",
      avatar: "/assets/avatar-c.png",
      nickname: "Charlie",
      content: "另一个测试评论。",
      time: "2025年03月22日 10:30",
    },
    {
      id: "5",
      avatar: "/assets/avatar-d.png",
      nickname: "Dave",
      content: "最后一个测试评论。",
      time: "2025年03月22日 11:00",
    },
  ]);

  useLoad(() => {
    console.log("Post detail loaded");
  });

  return (
    <PageLayout
      header={<Header title="#发布" back={true} />}
      fixedTopHeight={88}
    >
      <View className="px-4 py-3">
        <PostContent
          avatar="/assets/avatar-a.png"
          nickname="Alice"
          tag="info"
          favoriteCount={8}
          isFavorited={true}
          title="这是标题"
          content="这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语这句话后来演变成成语“饮水思源”这个成语"
          images={["/assets/dog1.jpg", "/assets/dog2.jpg", "/assets/dog3.jpg"]}
          time="今天 18:34"
        />

        <CommentHeader
          count={comments.length}
          order={commentOrder}
          onToggleOrder={() =>
            setCommentOrder(commentOrder === "desc" ? "asc" : "desc")
          }
        />

        <CommentList comments={comments} />
      </View>
    </PageLayout>
  );
};

export default PostDetailPage;
