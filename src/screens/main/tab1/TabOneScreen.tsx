import type { VFC } from "react";
import React, { useState } from "react";
import { useWindowDimensions, View } from "react-native";
import type { NavigationState, SceneRendererProps } from "react-native-tab-view";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Text } from "src/components/custom";
import type { TabOneScreenProps } from "types";

const VirtualRoute = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>virtual</Text>
    </View>
  );
};

const ChallengeRoute = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>challenge</Text>
    </View>
  );
};

const renderScene = SceneMap({
  virtual: VirtualRoute,
  challenge: ChallengeRoute,
});

type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<{
    key: string;
    title: string;
  }>;
};

const renderTabBar = (props: TabBarProps) => (
  <TabBar
    {...props}
    activeColor={"#ff6726"}
    inactiveColor={"#d3d3d3"}
    style={{ backgroundColor: "#fff" }}
    indicatorStyle={{ backgroundColor: "#ff6726", height: 3 }}
  />
);

export const TabOneScreen: VFC<TabOneScreenProps<"TabOneScreen">> = () => {
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: "virtual", title: "ヴァーチャル大会一覧" },
    { key: "challenge", title: "チャレンジ中の大会" },
  ]);
  const [index, setIndex] = useState(0);

  const onIndexChange = (index: number) => {
    setIndex(index);
  };

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      tabBarPosition="top"
      onIndexChange={onIndexChange}
      initialLayout={{ width: layout.width }}
    />
  );
};
