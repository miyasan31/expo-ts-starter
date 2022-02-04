import type { VFC } from "react";
import React from "react";

import { Progress } from "~/components";
import { Text } from "~/components/custom";
import { Layout } from "~/components/layout";
import { useGetSWRdev } from "~/hooks";
import type { TabOneScreenProps } from "~/types";
import type { User } from "~/types/fetcher";

export const TabOneScreen: VFC<TabOneScreenProps<"TabOneScreen">> = () => {
  const { data, isError, isLoading } = useGetSWRdev<User>("/user/1");

  return (
    <Layout>
      {isLoading ? (
        <Progress />
      ) : isError ? (
        <Text>Error</Text>
      ) : !data ? (
        <Text>データがありません</Text>
      ) : (
        <>
          <Text>{data.id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.age}</Text>
        </>
      )}
    </Layout>
  );
};
