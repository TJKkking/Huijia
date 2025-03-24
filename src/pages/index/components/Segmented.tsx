import { useEffect } from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";

interface SegmentedProps {
  options: string[];
  value?: string;
  defaultValue?: string;
  onChange: (val: string) => void;
  size?: "small" | "middle" | "large";
  className?: string;
  block?: boolean;
  maxItemWidth?: number; // 每项最大宽度(px)
  maxContainerWidth?: number; // 整体最大宽度(px)，仅 block=true 时生效
}

export default function Segmented({
  options,
  value,
  defaultValue,
  onChange,
  size = "middle",
  className = "",
  block = false,
  maxItemWidth = 88,
  maxContainerWidth,
}: SegmentedProps) {
  useEffect(() => {
    if (!value && defaultValue) {
      onChange(defaultValue);
    }
  }, []);

  const sizeClasses = {
    small: "text-xs px-2 py-1",
    middle: "text-sm px-3 py-1.5",
    large: "text-base px-4 py-2",
  };

  const containerStyle =
    block && maxContainerWidth
      ? { maxWidth: `${maxContainerWidth}px`, width: "100%" }
      : undefined;

  return (
    <View
      className={classNames(
        "rounded-full bg-gray-100 p-1 transition-all",
        block ? "w-full flex" : "inline-flex",
        className
      )}
      style={containerStyle}
    >
      {options.map((opt) => {
        const isActive = opt === value;
        return (
          <Text
            key={opt}
            style={{ maxWidth: `${maxItemWidth}px` }}
            className={classNames(
              "rounded-full transition-all cursor-pointer leading-none flex items-center justify-center text-center flex-1",
              sizeClasses[size],
              isActive
                ? "bg-white shadow text-purple-600 font-semibold"
                : "text-gray-500"
            )}
            onClick={() => onChange(opt)}
          >
            {opt}
          </Text>
        );
      })}
    </View>
  );
}
