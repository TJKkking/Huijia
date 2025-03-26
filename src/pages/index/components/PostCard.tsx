import { View, Text } from "@tarojs/components";
import IconFont from "../../../components/iconfont";
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
  return (
    <View
      className={classNames(
        "rounded-2xl shadow-sm px-4 py-3 mb-3 bg-m3-surface text-black",
        className
      )}
    >
      {/* 顶部信息 */}
      <View className="flex items-center justify-between">
        <View className="flex items-center space-x-2">
          <View className="flex items-center justify-center w-8 h-8 text-sm rounded-full bg-primary-light text-primary">
            {avatar || "A"}
          </View>
          <View className="flex flex-col">
            <Text className="text-sm font-medium leading-tight text-black">
              {author}
            </Text>
            <Text className="text-xs leading-tight text-primary">#{tag}</Text>
          </View>
        </View>
        <View className="flex items-center space-x-2 text-xs text-secondary">
          <Text>{starred}</Text>
          <IconFont name="star" size={20} color="#9ca3af" />
        </View>
      </View>

      {/* 标题 */}
      <View className="mt-2">
        <Text className="mb-1 text-base font-semibold text-black">{title}</Text>
        <Text className="text-sm leading-snug text-secondary line-clamp-2">
          {content}
        </Text>
      </View>

      {/* 操作栏 */}
      <View className="flex items-center justify-between mt-3 text-xs text-secondary">
        <View className="flex space-x-4">
          <View className="flex items-center space-x-2">
            <IconFont name="heart" size={20} color="#9ca3af" />
            <Text>{liked}</Text>
          </View>
          <View className="flex items-center space-x-2">
            <IconFont name="comment" size={20} color="#9ca3af" />
            <Text>{commented}</Text>
          </View>
        </View>
        <Text>{time}</Text>
      </View>
    </View>
  );
}
