import { MaterialIcons } from "@expo/vector-icons";
import type { VFC } from "react";
import React from "react";
import { StyleSheet } from "react-native";

import { Card } from "~/components/ui/Card";
import { Layout } from "~/components/ui/Layout";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import type { TabThreeScreenProps } from "~/types";

type List = {
  id: string;
  label: string;
  screen: "Settings";
};

const data: Readonly<List[]> = [{ id: "1", screen: "Settings", label: "設定" }];

export type Props = TabThreeScreenProps<"TabThreeScreen">;

export const TabThree: VFC<Props> = () => {
  const onNavigation = (screen: List["screen"]) => {
    console.info("screen", screen);
  };

  return (
    <Layout>
      {data.map((item) => {
        return (
          <Card key={item.id} onPress={() => onNavigation(item.screen)}>
            <View style={styles.listbox}>
              <Text style={styles.key}>{item.label}</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} />
            </View>
          </Card>
        );
      })}
    </Layout>
  );
};

const styles = StyleSheet.create({
  listbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b333",
  },
  key: {
    width: "90%",
    fontSize: 18,
    textAlign: "left",
    fontWeight: "400",
  },
});
