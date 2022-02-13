import { format } from "date-fns";
import type { VFC } from "react";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Card } from "~/components/ui/Card";
import { Layout } from "~/components/ui/Layout";
import { Progress } from "~/components/ui/Progress";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import { useGetSWRdev } from "~/hooks/useGetSWRdev";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { TabTwoScreenProps } from "~/types";
import type { Post } from "~/types/fetcher";

export type Props = TabTwoScreenProps<"TabTwoScreen">;

export const TabTwo: VFC<Props> = () => {
  const color = useThemeColor({}, "text2");
  const { data, isError, isLoading } = useGetSWRdev<Post[]>("/post");

  const renderItem = ({ item }: { item: Post }) => {
    const onNavigation = () => {
      console.info("item.id", item.id);
    };

    const date = format(new Date(item.updatedAt), "yyyy年M月d日");

    return (
      <Card onPress={onNavigation}>
        <View>
          <Text style={styles.shopName}>{item.title}</Text>
          <Text style={styles.date} lightText={color} darkText={color}>
            {date}
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <Layout>
      {isLoading ? (
        <Progress />
      ) : isError ? (
        <Text>エラーが発生しました</Text>
      ) : !data ? (
        <Text>データがありません</Text>
      ) : (
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item, _) => String(item.id)} />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  shopName: {
    paddingBottom: 10,

    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
  },
  date: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
  },
});
