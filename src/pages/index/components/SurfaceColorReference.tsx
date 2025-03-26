import { View, Text } from "@tarojs/components";

const SurfaceSwatch = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => (
  <View className={`rounded-xl p-4 mb-4 ${className}`}>
    <Text className="text-sm font-semibold text-m3-onSurface">{name}</Text>
    <Text className="text-xs text-m3-onSurface">{className}</Text>
  </View>
);

export default function SurfaceColorReference() {
  return (
    <View className="p-4 bg-m3-background text-m3-onBackground dark:bg-m3-dark-background dark:text-m3-dark-onBackground">
      <Text className="mb-6 text-xl font-bold">🎨 Surface 层级参考</Text>

      <SurfaceSwatch
        name="Surface Container Lowest"
        className="bg-m3-surfaceContainerLowest"
      />
      <SurfaceSwatch
        name="Surface Container Low"
        className="bg-m3-surfaceContainerLow"
      />
      <SurfaceSwatch
        name="Surface Container"
        className="bg-m3-surfaceContainer"
      />
      <SurfaceSwatch
        name="Surface Container High"
        className="bg-m3-surfaceContainerHigh"
      />
      <SurfaceSwatch
        name="Surface Container Highest"
        className="bg-m3-surfaceContainerHighest"
      />
    </View>
  );
}
