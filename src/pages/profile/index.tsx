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
      // fixedTopHeight={100}
    >
      <UserInfoCard />

      <View className="px-4 mt-4">
        <ProfileGrid
          items={[
            { icon: "star", label: "我的收藏" },
            { icon: "comment", label: "我的评论" },
            { icon: "mail", label: "我的发布" },
          ]}
        />
      </View>

      <View className="px-4 mt-4">
        <SettingList
          lists={[
            [
              { icon: "verified", label: "校园认证" },
              { icon: "feedback", label: "意见反馈" },
              { icon: "info_l", label: "关于我们" },
            ],
            [
              { icon: "settings", label: "设置" },
              { icon: "logout", label: "退出登录" },
            ],
          ]}
        />
      </View>
    </PageLayout>
  );
}
