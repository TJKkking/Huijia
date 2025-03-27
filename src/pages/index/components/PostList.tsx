import { View } from "@tarojs/components";
import PostCard from "./PostCard";
import { FC } from "react";
import { PostCardProps } from "./PostCard"; // 根据实际路径调整

interface PostListProps {
  posts: PostCardProps[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <View className="px-4 mt-3 space-y-4 ">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </View>
  );
};

export default PostList;
