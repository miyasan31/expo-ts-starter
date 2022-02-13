import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { TabOneStackParamList } from "~/types";

import { ModalScreen } from "./hoge.modal";
import { TabOneScreen } from "./tab_one.screen";

const TabOne = createNativeStackNavigator<TabOneStackParamList>();

export const TabOneNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <TabOne.Navigator
      initialRouteName="TabOneScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
        headerLargeTitle: true,
        headerLargeTitleStyle: {
          fontWeight: "400",
          fontSize: 30,
        },
      }}
    >
      <TabOne.Screen name="TabOneScreen" component={TabOneScreen} options={() => ({})} />

      <TabOne.Group screenOptions={{ presentation: "modal" }}>
        <TabOne.Screen name="Modal" component={ModalScreen} options={{ title: "Oops!" }} />
      </TabOne.Group>
    </TabOne.Navigator>
  );
};
