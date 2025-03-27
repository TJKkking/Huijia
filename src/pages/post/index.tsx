import { View, Text, Input, Textarea, Button } from "@tarojs/components";
import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";

const categories = ["求助", "活动", "咨询", "交友"];

const PostEditorPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("求助");
  const [images, setImages] = useState<string[]>([]);
  const [contact, setContact] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const inputBase =
    "w-full px-4 py-3 text-sm rounded-xl bg-m3-surfaceContainerHigh text-m3-onSurface focus:outline-none focus:ring-2 focus:ring-m3-primary/60";

  const textareaBase =
    "w-full text-sm text-m3-onSurface bg-transparent focus:outline-none focus:ring-2 focus:ring-m3-primary/60";

  const handleSubmit = () => {
    const payload = {
      title,
      content,
      category,
      images,
      contact,
      anonymous,
    };
    console.log("提交数据：", payload);
    // TODO: 请求提交逻辑
  };

  return (
    <PageLayout header={<Header title="发布" back />}>
      <View className="flex flex-col px-4 py-5 gap-y-5 bg-m3-surface">
        <Input
          className={inputBase}
          placeholder="输入标题"
          value={title}
          onInput={(e) => setTitle(e.detail.value)}
        />

        <View className="gap-y-2">
          <View className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <View
                key={item}
                className={`px-3 py-1 rounded-full border text-sm font-medium transition-all ${
                  item === category
                    ? "bg-m3-primary text-white border-m3-primary"
                    : "text-m3-outline border-m3-outline"
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </View>
            ))}
          </View>
        </View>

        <View className="w-full p-4 overflow-hidden rounded-xl bg-m3-surfaceContainerHigh">
          <Textarea
            className={textareaBase}
            placeholder="写点什么吧..."
            value={content}
            onInput={(e) => setContent(e.detail.value)}
          />
        </View>

        <View className="gap-y-2">
          <ImageUploader value={images} onChange={setImages} />
        </View>

        <View className="gap-y-2">
          <Input
            className="input-base"
            placeholder="微信 / QQ / 电话等"
            value={contact}
            onInput={(e) => setContact(e.detail.value)}
          />
        </View>

        <View className="flex items-center justify-end gap-3 px-4 py-3 rounded-xl">
          <Text className="text-sm text-m3-onSurfaceVariant">匿名</Text>
          <View
            className={`w-10 h-6 rounded-full relative transition-all duration-200 ${
              anonymous ? "bg-m3-primary" : "bg-m3-outline/30"
            }`}
            onClick={() => setAnonymous(!anonymous)}
          >
            <View
              className={`w-4 h-4 bg-white rounded-full absolute top-1 left-1 shadow-md transition-transform duration-200 ${
                anonymous ? "translate-x-4" : ""
              }`}
            />
          </View>
        </View>

        <Button
          className="w-full py-2 text-sm font-medium text-white rounded-full bg-m3-primary/90"
          onClick={handleSubmit}
          disabled={!title || !content}
        >
          发布
        </Button>
      </View>
    </PageLayout>
  );
};

export default PostEditorPage;
