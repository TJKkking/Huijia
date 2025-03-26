import { View, Text } from "@tarojs/components";
import { FC } from "react";

interface CommentHeaderProps {
  count: number;
  order: "asc" | "desc";
  onToggleOrder: () => void;
}

const CommentHeader: FC<CommentHeaderProps> = ({
  count,
  order,
  onToggleOrder,
}) => {
  return (
    <View className="flex items-center justify-between pl-1 mt-6 mr-2">
      <Text className="text-lg font-semibold text-m3-onSurface dark:text-m3-dark-onSurface">
        评论 {count}
      </Text>
      <Text
        className="text-sm cursor-pointer text-m3-primary dark:text-m3-dark-primary"
        onClick={onToggleOrder}
      >
        {order === "desc" ? "倒序" : "正序"}
      </Text>
    </View>
  );
};

export default CommentHeader;
