import { View, Text, Image } from "@tarojs/components";
import { FC } from "react";
import classNames from "classnames";

interface MessageCardProps {
  type: "system" | "user";
  avatar?: string;
  nickname?: string;
  title: string;
  description: string;
  postTitle?: string;
  time: string;
  unread?: boolean;
  count?: number;
}

const MessageCard: FC<MessageCardProps> = ({
  type,
  avatar,
  nickname,
  title,
  description,
  postTitle,
  time,
  unread = false,
  count = 0,
}) => {
  const showCount = count > 1;

  return (
    <View
      className={classNames(
        "flex items-start p-3 rounded-xl mb-1 shadow-sm",
        unread
          ? "bg-m3-surfaceContainerHighest dark:bg-m3-dark-surfaceContainerHighest"
          : "bg-white dark:bg-m3-dark-surface",
        "transition-all duration-150"
      )}
    >
      {/* 头像 / 系统图标 */}
      <View className="relative mr-3">
        {type === "system" ? (
          <View className="flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full bg-m3-primary/20 dark:bg-m3-dark-primary/20 text-m3-primary dark:text-m3-dark-primary">
            📢
          </View>
        ) : (
          <Image
            src={avatar || ""}
            className="w-10 h-10 bg-gray-200 rounded-full"
            mode="aspectFill"
          />
        )}
        {unread && (
          <View className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
        )}
      </View>

      {/* 内容区域 */}
      <View className="flex-1">
        <View className="flex items-center justify-between">
          <Text className="text-sm font-medium text-m3-onSurface dark:text-m3-dark-onSurface">
            {title}
            {type === "system" && (
              <Text className="ml-2 text-xs px-2 py-0.5 rounded-full bg-m3-primary text-white">
                公告
              </Text>
            )}
            {showCount && (
              <Text className="text-xs text-m3-outline dark:text-m3-dark-outline">
                {" "}
                · 共 {count} 条新回复
              </Text>
            )}
          </Text>
          <Text className="ml-2 text-xs text-m3-outline dark:text-m3-dark-outline whitespace-nowrap">
            {time}
          </Text>
        </View>
        <Text className="mt-1 text-sm text-m3-onSurfaceVariant dark:text-m3-dark-onSurfaceVariant">
          {description}
        </Text>
        {!!postTitle && (
          <Text className="mt-1 text-sm truncate text-m3-outline dark:text-m3-dark-outline">
            《{postTitle}》
          </Text>
        )}
      </View>
    </View>
  );
};

export default MessageCard;
