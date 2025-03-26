import { Text } from "@tarojs/components";
import { FC, CSSProperties } from "react";

interface MaterialIconProps {
  name: string;
  size?: number | string; // 默认单位 px
  color?: string;
  weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700";
  grade?: number; // Material 设计中支持 grade，默认 0
  fill?: "0" | "1"; // 轮廓或填充
  className?: string;
  style?: CSSProperties;
}

const MaterialIcon: FC<MaterialIconProps> = ({
  name,
  size = 20,
  color = "inherit",
  weight = "400",
  grade = 0,
  fill = "0",
  className = "",
  style = {},
}) => {
  const fontVariationSettings = `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' 24`;

  return (
    <Text
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings,
        fontSize: typeof size === "number" ? `${size}px` : size,
        color,
        ...style,
      }}
    >
      {name}
    </Text>
  );
};

export default MaterialIcon;
