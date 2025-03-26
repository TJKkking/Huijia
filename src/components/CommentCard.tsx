import { View, Text, Image } from "@tarojs/components";
import { FC } from "react";

interface CommentCardProps {
  avatar: string;
  nickname: string;
  content: string;
  time: string;
  showDivider?: boolean;
}

const CommentCard: FC<CommentCardProps> = ({
  avatar,
  nickname,
  content,
  time,
  showDivider = false,
}) => {
  return (
    <View className="flex pb-2 gap-x-2">
      {/* 头像 */}
      <View className="pt-[2px]">
        <Image
          src={avatar}
          className="w-8 h-8 bg-gray-200 rounded-full shrink-0"
          mode="aspectFill"
        />
      </View>

      {/* 评论内容 */}
      <View className="flex-1">
        <View className="flex items-center h-8">
          <Text className="text-sm font-medium leading-8 text-m3-onSurface dark:text-m3-dark-onSurface">
            {nickname}
          </Text>
        </View>
        <Text className="block mt-1 text-sm text-m3-onSurface dark:text-m3-dark-onSurface">
          {content}
        </Text>
        <Text className="block mt-1.5 text-xs text-m3-outline dark:text-m3-dark-outline">
          {time}
        </Text>
        {showDivider && (
          <View className="mt-2 border-b border-m3-outline/10 dark:border-m3-dark-outline/10" />
        )}
      </View>
    </View>
  );
};

export default CommentCard;
