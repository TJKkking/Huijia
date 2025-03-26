import { View } from "@tarojs/components";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import UserInfoCard from "@/components/UserInfoCard";
import ProfileGrid from "@/components/ProfileGrid";
import SettingList from "@/components/SettingList";

export default function Profile() {
  return (
    <PageLayout
      header={<Header title="个人中心" back={false} />}
      fixedTopHeight={100}
    >
      <UserInfoCard />

      <View className="px-4 mt-4">
        <ProfileGrid />
      </View>

      <View className="px-4 mt-4">
        {/* <SettingList
          items={[
            [
              { icon: "🎓", label: "校园认证", onClick: () => {} },
              { icon: "📝", label: "意见反馈", onClick: () => {} },
              { icon: "❓", label: "关于我们", onClick: () => {} },
            ],
            [
              { icon: "⚙️", label: "设置", onClick: () => {} },
              { icon: "🚪", label: "退出登录", onClick: () => {} },
            ],
          ]}
        /> */}
        <SettingList
          lists={[
            [
              { icon: "🎓", label: "校园认证" },
              { icon: "📝", label: "意见反馈" },
              { icon: "❓", label: "关于我们" },
            ],
            [
              { icon: "⚙️", label: "设置" },
              { icon: "🚪", label: "退出登录" },
            ],
          ]}
        />
      </View>
    </PageLayout>
  );
}
