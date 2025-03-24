import { View } from "@tarojs/components";
import PostCard from "./PostCard";

const mockPosts = [
  {
    author: "Alice",
    tag: "info",
    title: "标题四个字",
    content:
      "正文五个字，正文五个字正文五个字正文五个字。正文五个字，正文五个字正文五个字正文五个字。",
    liked: 16,
    commented: 72,
    starred: 8,
    time: "今天 18:45",
  },
  {
    author: "Bob",
    tag: "help",
    title: "标题帮助帖",
    content:
      "这是一段求助内容，希望能得到大家的回复和建议，非常感谢大家的帮助！",
    liked: 9,
    commented: 34,
    starred: 5,
    time: "今天 17:20",
  },
  {
    author: "Charlie",
    tag: "chat",
    title: "随便聊聊",
    content: "吐槽一下今天的考试安排，感觉有点不合理。大家觉得呢？",
    liked: 22,
    commented: 14,
    starred: 3,
    time: "昨天 20:10",
  },
  {
    author: "Charlie",
    tag: "chat",
    title: "随便聊聊",
    content: "吐槽一下今天的考试安排，感觉有点不合理。大家觉得呢？",
    liked: 22,
    commented: 14,
    starred: 3,
    time: "昨天 20:10",
  },
  {
    author: "Charlie",
    tag: "chat",
    title: "随便聊聊",
    content: "吐槽一下今天的考试安排，感觉有点不合理。大家觉得呢？",
    liked: 22,
    commented: 14,
    starred: 3,
    time: "昨天 20:10",
  },
];

export default function PostList() {
  return (
    <View className="px-4 mt-3">
      {mockPosts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </View>
  );
}
