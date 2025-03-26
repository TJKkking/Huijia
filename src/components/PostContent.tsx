import { View, Text, Image } from "@tarojs/components";
import { FC } from "react";

interface PostContentProps {
  avatar: string;
  nickname: string;
  tag: string;
  favoriteCount: number;
  isFavorited: boolean;
  title: string;
  content: string;
  images?: string[];
  time: string;
}

const PostContent: FC<PostContentProps> = ({
  avatar,
  nickname,
  tag,
  favoriteCount,
  isFavorited,
  title,
  content,
  images = [""],
  time,
}) => {
  return (
    <View className="py-2 text-m3-onSurface dark:bg-m3-dark-surfaceContainer dark:text-m3-dark-onSurface">
      {/* 顶部作者信息 */}
      <View className="flex items-center justify-between">
        <View className="flex items-center gap-x-2">
          <Image
            src={avatar}
            className="w-8 h-8 bg-gray-200 rounded-full"
            mode="aspectFill"
          />
          <View className="flex flex-col">
            <Text className="text-sm font-medium leading-none">{nickname}</Text>
            <Text className="text-xs text-m3-outline leading-tight mt-0.5">
              {time}
            </Text>
          </View>
        </View>
        <View className="flex items-center space-x-1">
          <Text className="text-xs text-m3-outline">{favoriteCount}</Text>
          <Text className="text-base text-yellow-500">★</Text>
          <Text className="text-lg text-m3-outline">⋮</Text>
        </View>
      </View>

      {/* 标题 */}
      <Text className="block mt-3 text-lg font-bold leading-snug">{title}</Text>

      {/* 正文 */}
      <Text className="block mt-2 text-sm leading-relaxed whitespace-pre-line">
        {content}
      </Text>

      {/* 图片区 */}
      {images.length > 0 && (
        <View className="grid grid-cols-3 gap-2 mt-3">
          {images.map((src, idx) => (
            <View
              key={idx}
              className="w-full overflow-hidden bg-gray-100 rounded-md aspect-square"
            >
              <Image src={src} className="w-full h-full" mode="aspectFill" />
            </View>
          ))}
        </View>
      )}

      {/* 时间戳 */}
      {/* 此处时间已前移至头像区域下方，无需重复 */}
    </View>
  );
};

export default PostContent;
