import { View, Text, Image } from "@tarojs/components";
import { useState } from "react";
import { AtIcon } from "taro-ui";
import "./Card.module.scss";

interface CardProps {
  avatar: string; // 头像URL
  nickname: string; // 用户名
  tag: string; // 文章标签
  time: string; // 发布时间
  title: string; // 标题
  content: string; // 正文
  likes: number; // 点赞数
  comments: number; // 评论数
  isCollected: boolean; // 是否已收藏
  onClick: () => void; // 点击跳转详情页
}

const Card: React.FC<CardProps> = ({
  avatar,
  nickname,
  tag,
  time,
  title,
  content,
  likes,
  comments,
  isCollected,
  onClick,
}) => {
  const [collected, setCollected] = useState(isCollected);

  return (
    <View className="card-container" onClick={onClick}>
      {/* 顶部信息栏 */}
      <View className="card-header">
        <View className="user-info">
          <Image src={avatar} className="avatar" />
          <View className="user-text">
            <Text className="nickname">{nickname}</Text>
            <Text className="tag">#{tag}</Text>
          </View>
        </View>
        <Text className="time">{time}</Text>
      </View>

      {/* 内容区域 */}
      <View className="card-body">
        <Text className="title">{title}</Text>
        <Text className="content">{content}</Text>
      </View>

      {/* 互动区 */}
      <View className="card-footer">
        <View className="action">
          <AtIcon value="heart" size="18" color="#9CA3AF" />
          <Text>{likes}</Text>
        </View>
        <View className="action">
          <AtIcon value="message" size="18" color="#9CA3AF" />
          <Text>{comments}</Text>
        </View>
        <View
          className="action collect"
          onClick={(e) => {
            e.stopPropagation(); // 防止触发 onClick 跳转详情
            setCollected(!collected);
          }}
        >
          <AtIcon
            value="star"
            size="18"
            color={collected ? "#FACC15" : "#E5E7EB"}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
