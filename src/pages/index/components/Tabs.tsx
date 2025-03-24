import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import {
  useState,
  useEffect,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
} from "react";

interface TabsProps {
  activeKey?: string | null;
  defaultActiveKey?: string | null;
  activeLineMode?: "auto" | "full" | "fixed";
  onChange?: (key: string) => void;
  children: ReactNode;
}

interface TabProps {
  title: string;
  key: string;
}

function Tabs({
  activeKey,
  defaultActiveKey,
  activeLineMode = "auto",
  onChange,
  children,
}: TabsProps) {
  const tabItems = Children.toArray(children).filter(isValidElement);
  const firstKey = tabItems[0]?.key as string;

  const [internalKey, setInternalKey] = useState<string | null>(
    defaultActiveKey || firstKey || null
  );
  const currentKey = activeKey ?? internalKey;

  const handleChange = (key: string) => {
    if (activeKey === undefined) {
      setInternalKey(key);
    }
    onChange?.(key);
  };

  const getLineClass = () => {
    switch (activeLineMode) {
      case "full":
        return "w-full";
      case "fixed":
        return "w-[24px]";
      case "auto":
      default:
        return "px-2";
    }
  };

  return (
    <View className="w-full">
      <View className="flex justify-between border-b border-gray-200 px-4">
        {tabItems.map((item: any) => {
          const isActive = item.key === currentKey;
          return (
            <View
              key={item.key}
              className="relative pb-2 flex-1 text-center"
              onClick={() => handleChange(item.key)}
            >
              <Text
                className={classNames(
                  "text-sm font-medium transition-all",
                  isActive ? "text-purple-600" : "text-gray-500"
                )}
              >
                {item.props.title}
              </Text>
              {isActive && (
                <View
                  className={classNames(
                    "h-[5px] bg-purple-600 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2",
                    getLineClass()
                  )}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

Tabs.Tab = function Tab(_: TabProps) {
  return null;
};

export default Tabs;
