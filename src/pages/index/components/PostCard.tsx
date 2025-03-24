import { View, Text } from "@tarojs/components";
import IconFont from "../../../components/iconfont";

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
}: PostCardProps) {
  return (
    <View className="bg-white rounded-2xl shadow-sm px-4 py-3 mb-3">
      {/* 顶部信息 */}
      <View className="flex items-center justify-between">
        <View className="flex items-center space-x-2">
          <View className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 text-sm">
            {avatar || "A"}
          </View>
          <View className="flex flex-col">
            <Text className="text-sm text-black font-medium leading-tight">
              {author}
            </Text>
            <Text className="text-xs text-purple-500 leading-tight">
              #{tag}
            </Text>
          </View>
        </View>
        <View className="flex items-center space-x-2 text-gray-400 text-xs">
          <Text>{starred}</Text>
          <IconFont name="star" size={20} color="#9ca3af" />
        </View>
      </View>

      {/* 标题 */}
      <View className="mt-2">
        <Text className="text-base font-semibold text-black mb-1">{title}</Text>
        <Text className="text-sm text-gray-500 leading-snug line-clamp-2">
          {content}
        </Text>
      </View>

      {/* 操作栏 */}
      <View className="flex justify-between items-center mt-3 text-xs text-gray-400">
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
