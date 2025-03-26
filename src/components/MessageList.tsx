import { View } from "@tarojs/components";
import MessageCard from "./MessageCard";

const messages = [
  {
    type: "system",
    title: "系统通知",
    description: "校园网络将于今晚 0 点进行维护，期间可能出现短时中断。",
    time: "3 小时前",
    unread: true,
  },
  {
    type: "user",
    avatar: "/assets/avatar-zs.png",
    title: "张三 回复了你",
    description: "我觉得你的观点很有道理！",
    postTitle: "AI 会不会取代程序员？",
    time: "5 分钟前",
    unread: true,
    count: 4,
  },
  {
    type: "user",
    avatar: "/assets/avatar-anon.png",
    title: "匿名用户 回复了你",
    description: "可以看看这篇资料：https://xx.com",
    postTitle: "数据库资料推荐",
    time: "2 天前",
    unread: false,
  },
];

export default function MessageList() {
  return (
    <View className="p-4">
      {messages.map((msg, index) => (
        <MessageCard key={index} {...msg} />
      ))}
    </View>
  );
}
