import type { VFC } from "react";
import React from "react";

import { Layout } from "~/components/ui/Layout";
import { Progress } from "~/components/ui/Progress";
import { Text } from "~/components/ui/Text";
import { useGetSWRdev } from "~/hooks/useGetSWRdev";
import type { TabOneScreenProps } from "~/types";
import type { User } from "~/types/fetcher";

export type Props = TabOneScreenProps<"TabOneScreen">;

export const TabOne: VFC<Props> = () => {
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
