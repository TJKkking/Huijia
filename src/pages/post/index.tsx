import { useState } from "react";
import {
  View,
  Text,
  Input,
  Textarea,
  Button,
  Image,
  ScrollView,
  Switch,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const categories = ["求助", "拼车", "活动", "咨询", "交友"];

export default function PostPublishPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const handleChooseImage = async () => {
    const res = await Taro.chooseImage({ count: 6 - images.length });
    if (res.tempFilePaths) {
      setImages([...images, ...res.tempFilePaths]);
    }
  };

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(index);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = () => {
    console.log({
      title,
      content,
      contact,
      anonymous,
      category: categories[selectedCategory],
      images,
    });
  };

  return (
    <View className="container">
      <Input
        className="title-input"
        placeholder="输入标题..."
        value={title}
        onInput={(e) => setTitle(e.detail.value)}
      />
      <Textarea
        className="content-input"
        placeholder="请输入正文..."
        value={content}
        onInput={(e) => setContent(e.detail.value)}
        autoHeight
      />

      <ScrollView scrollX className="category-scroll">
        {categories.map((item, index) => (
          <Text
            key={item}
            className={`category-tag ${
              index === selectedCategory ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            #{item}
          </Text>
        ))}
      </ScrollView>

      <View className="image-grid">
        {images.map((img, idx) => (
          <View className="image-wrapper" key={img}>
            <Image src={img} className="image" mode="aspectFill" />
            <Text className="remove-btn" onClick={() => handleRemoveImage(idx)}>
              ×
            </Text>
          </View>
        ))}
        {images.length < 6 && (
          <View className="image-upload" onClick={handleChooseImage}>
            <Text className="plus">+</Text>
          </View>
        )}
      </View>

      <Input
        className="contact-input"
        placeholder="可填写微信 / QQ / 手机号"
        value={contact}
        onInput={(e) => setContact(e.detail.value)}
      />

      <View className="switch-row">
        <Text>匿名发布</Text>
        <Switch checked={anonymous} onChange={() => setAnonymous(!anonymous)} />
      </View>

      <View className="bottom-btn">
        <Button type="primary" onClick={handleSubmit}>
          发布
        </Button>
      </View>
    </View>
  );
}
