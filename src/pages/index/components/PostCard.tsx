import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import classNames from "classnames";

interface PostCardProps {
  avatar?: string;
  author: string;
  tag: string;
  title: string;
  content: string;
  liked: number;
  commented: number;
  starred: number;
  time: string;
  className?: string;
}

export default function PostCard({
  avatar,
  author,
  tag,
  title,
  content,
  liked,
  commented,
  starred,
  time,
  className,
}: PostCardProps) {
  const iconColor = "#79747E"; // 对应 m3-outline，可替换为 text-m3-outline
  const iconSize = 37;

  return (
    <View
      className={classNames(
        "rounded-2xl shadow-sm px-4 py-3 mb-3 bg-m3-surface dark:bg-m3-dark-surface",
        className
      )}
    >
      {/* 顶部作者信息 */}
      <View className="flex items-center justify-between">
        <View className="flex items-center space-x-2">
          <View className="flex items-center justify-center w-8 h-8 text-sm rounded-full bg-m3-primaryContainer text-m3-onPrimaryContainer dark:bg-m3-dark-primaryContainer dark:text-m3-dark-onPrimaryContainer">
            {avatar || author[0] || "A"}
          </View>
          <View className="flex flex-col leading-tight">
            <Text className="text-sm font-medium text-m3-onSurface dark:text-m3-dark-onSurface">
              {author}
            </Text>
            <Text className="text-xs text-m3-primary dark:text-m3-dark-primary">
              #{tag}
            </Text>
          </View>
        </View>
        <View className="flex items-center space-x-1 text-sm text-m3-outline dark:text-m3-dark-outline">
          <Text>{starred}</Text>
          <IconFont name="star" size={iconSize} color={iconColor} />
        </View>
      </View>

      {/* 标题与正文 */}
      <View className="mt-2">
        <Text className="mb-1 text-base font-semibold text-m3-onSurface dark:text-m3-dark-onSurface">
          {title}
        </Text>
        <Text className="mt-1 text-sm leading-snug text-m3-onSurfaceVariant dark:text-m3-dark-onSurfaceVariant line-clamp-2">
          {content}
        </Text>
      </View>

      {/* 操作栏 */}
      <View className="flex items-center justify-between mt-3 text-sm text-m3-outline dark:text-m3-dark-outline">
        <View className="flex space-x-4">
          <View className="flex items-center space-x-1">
            <IconFont name="favorite" size={iconSize} color={iconColor} />
            <Text>{liked}</Text>
          </View>
          <View className="flex items-center space-x-1">
            <IconFont name="comment" size={iconSize} color={iconColor} />
            <Text>{commented}</Text>
          </View>
        </View>
        <Text>{time}</Text>
      </View>
    </View>
  );
}
