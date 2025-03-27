import { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Taro from "@tarojs/taro";
import Header from "@/components/Header";
import PostList from "./components/PostList";
import Segmented from "./components/Segmented";
import Tabs from "./components/Tabs";
import PageLayout from "@/components/PageLayout";
import IconFont from "@/components/iconfont";

interface PostCardProps {
  id?: string;
  avatar?: string;
  author: string;
  tag: string;
  title: string;
  content: string;
  liked: number;
  commented: number;
  starred: number;
  time: string;
  className?: string;
}

const mockPosts: PostCardProps[] = Array.from({ length: 10 }).map((_, i) => ({
  avatar: "https://ootao.cn/static/avatar.jpg",
  author: i % 2 === 0 ? "Alice" : "Bob",
  tag: i % 3 === 0 ? "求助" : i % 3 === 1 ? "信息" : "吐槽",
  title: `Mock 帖子标题 ${i + 1}`,
  content: `这里是帖子内容摘要部分，测试文字第 ${i + 1} 条。`,
  liked: Math.floor(Math.random() * 20),
  commented: Math.floor(Math.random() * 10),
  starred: Math.floor(Math.random() * 5),
  time: `2025年03月${10 + i}日 14:3${i}`,
}));

export default function Index() {
  const [category, setCategory] = useState("全部");
  const [sortKey, setSortKey] = useState("new");
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [page, setPage] = useState(1);

  useLoad(() => {
    console.log("Page loaded.");
  });

  useEffect(() => {
    const filtered =
      category === "全部"
        ? mockPosts
        : mockPosts.filter((p) => p.tag === category);
    setPosts(filtered);
  }, [category, sortKey]);

  useEffect(() => {
    console.log("sortKey changed:", sortKey);
  }, [sortKey]);

  const loadMore = () => {
    console.log("加载更多");
  };

  return (
    <>
      <PageLayout
        header={<Header title="代号: 酱油" searchBar />}
        topContent={
          <>
            <View className="flex items-center justify-center mt-2">
              <Segmented
                block
                size="large"
                maxItemWidth={88}
                maxContainerWidth={360}
                options={["全部", "求助", "信息", "吐槽"]}
                value={category}
                onChange={(val) => setCategory(val)}
                className="text-primary border-outline"
              />
            </View>

            <View className="mt-3">
              <Tabs
                defaultActiveKey={sortKey}
                activeLineMode="auto"
                onChange={(key) => setSortKey(key)}
              >
                <Tabs.Tab title="最新" key="new" />
                <Tabs.Tab title="最热" key="hot" />
                <Tabs.Tab title="精选" key="best" />
              </Tabs>
            </View>
          </>
        }
        onScrollToLower={loadMore}
      >
        <PostList posts={posts} />
      </PageLayout>

      <View
        className="fixed z-50 flex items-center justify-center rounded-full shadow-lg bottom-20 right-6 w-14 h-14 bg-m3-primary"
        onClick={() => {
          Taro.navigateTo({ url: "/pages/post/index" });
          console.log("跳转到发布页");
        }}
      >
        <IconFont name="edit_square" size={60} color="#FFFFFF" />
      </View>
    </>
  );
}
