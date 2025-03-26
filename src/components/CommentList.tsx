import { View } from "@tarojs/components";
import { FC } from "react";
import CommentCard from "./CommentCard";

interface Comment {
  id: string;
  avatar: string;
  nickname: string;
  content: string;
  time: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <View className="py-8 text-sm text-center text-m3-outline dark:text-m3-dark-outline">
        暂无评论
      </View>
    );
  }

  return (
    <View className="pr-4 mt-2">
      {comments.map((comment, index) => (
        <CommentCard
          key={comment.id}
          avatar={comment.avatar}
          nickname={comment.nickname}
          content={comment.content}
          time={comment.time}
          showDivider={index !== comments.length - 1}
        />
      ))}
    </View>
  );
};

export default CommentList;
