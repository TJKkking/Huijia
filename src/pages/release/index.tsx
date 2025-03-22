import { useState, useRef } from "react";
import {
  View,
  Text,
  Input,
  Textarea,
  Button,
  Image,
  Switch,
} from "@tarojs/components";
import "./index.scss";

const categories = ["#Help", "#Carpool", "#Activity"];

export default function Release() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [contact, setContact] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const contactRef = useRef(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleImageUpload = () => {
    // Handle image upload logic
  };

  const handleImageDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!title || !selectedCategory) return;
    setIsSubmitting(true);
    // Handle submit logic
  };

  return (
    <View className="release-page">
      {/* Top navigation bar */}
      <View className="nav-bar">
        <Text className="back-btn">←</Text>
        <Text className="title">Release</Text>
        <Text className="close-btn">✖</Text>
      </View>

      {/* Category selection */}
      <View className="category-section">
        <Text className="section-title">Category (required)</Text>
        <View className="category-options">
          {categories.map((category) => (
            <Text
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Text>
          ))}
        </View>
      </View>

      {/* Title and text input */}
      <View className="input-section">
        <Input
          ref={titleRef}
          className="title-input"
          placeholder="Enter title..."
          value={title}
          onInput={(e) => setTitle(e.detail.value)}
        />
        <Textarea
          ref={contentRef}
          className="text-input"
          placeholder="Enter content..."
          value={content}
          onInput={(e) => setContent(e.detail.value)}
        />
      </View>

      {/* Image upload */}
      <View className="image-upload-section">
        {images.map((image, index) => (
          <View key={index} className="image-wrapper">
            <Image src={image} className="uploaded-image" />
            <Text
              className="delete-btn"
              onClick={() => handleImageDelete(index)}
            >
              x
            </Text>
          </View>
        ))}
        {images.length < 9 && (
          <View className="upload-btn" onClick={handleImageUpload}>
            ➕
          </View>
        )}
      </View>

      {/* Contact information */}
      <View className="contact-section">
        <Input
          ref={contactRef}
          className="contact-input"
          placeholder="WeChat / QQ / Mobile phone number"
          value={contact}
          onInput={(e) => setContact(e.detail.value)}
        />
        <View className="anonymous-switch">
          <Text>Anonymous release</Text>
          <Switch
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.detail.value)}
          />
        </View>
      </View>

      {/* Release button */}
      <Button
        className="release-btn"
        disabled={!title || !selectedCategory || isSubmitting}
        onClick={handleSubmit}
      >
        {isSubmitting ? "Loading..." : "Release"}
      </Button>
    </View>
  );
}
