import { View, ScrollView } from "@tarojs/components";
import { useLoad, navigateTo } from "@tarojs/taro";
import Header from "@/components/Header";
import PostList from "./components/PostList";
import Segmented from "./components/Segmented";
import Tabs from "./components/Tabs";
import PageLayout from "@/components/PageLayout";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <PageLayout
      header={<Header title="代号: 酱油" back={false} home={false} />}
      topContent={
        <>
          <View className="flex items-center justify-center mt-2">
            <Segmented
              block
              size="large"
              maxItemWidth={88}
              maxContainerWidth={360}
              options={["全部", "求助", "信息", "吐槽"]}
              value={"全部"}
              onChange={() => {}}
              className="text-primary border-outline"
            />
          </View>

          <View className="mt-3">
            <Tabs
              defaultActiveKey="new"
              activeLineMode="auto"
              onChange={(key) => console.log(key)}
            >
              <Tabs.Tab title="最新" key="new" />
              <Tabs.Tab title="最热" key="hot" />
              <Tabs.Tab title="精选" key="best" />
            </Tabs>
          </View>
        </>
      }
      onScrollToLower={() => console.log("加载更多")}
    >
      <PostList />
    </PageLayout>
  );
}
