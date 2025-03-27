import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { FC } from "react";

interface ImageUploaderProps {
  value: string[];
  onChange: (urls: string[]) => void;
  max?: number;
}

const ImageUploader: FC<ImageUploaderProps> = ({
  value,
  onChange,
  max = 9,
}) => {
  const handleAddImage = async () => {
    try {
      const res = await Taro.chooseImage({
        count: max - value.length,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
      });

      const newImages = res.tempFilePaths;
      onChange([...value, ...newImages].slice(0, max));
    } catch (e) {
      console.log("取消选择图片");
    }
  };

  const handleRemove = (index: number) => {
    const updated = [...value];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <View className="grid grid-cols-3 gap-2">
      {value.map((url, idx) => (
        <View className="relative" key={idx}>
          <Image
            src={url}
            mode="aspectFill"
            className="object-cover w-full rounded-lg aspect-square"
          />
          <View
            className="absolute top-0 right-0 px-1 text-xs text-white rounded-bl bg-black/60"
            onClick={() => handleRemove(idx)}
          >
            删除
          </View>
        </View>
      ))}

      {value.length < max && (
        <View
          onClick={handleAddImage}
          className="flex items-center justify-center w-full text-2xl bg-gray-100 rounded-lg aspect-square text-m3-outline"
        >
          +
        </View>
      )}
    </View>
  );
};

export default ImageUploader;
