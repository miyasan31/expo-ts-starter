import type { VFC } from "react";
import React, { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import type { TabOneScreenProps } from "types";

const FirstRoute = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0055",
      }}
    >
      <Text>First</Text>
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6200ff",
      }}
    >
      <Text>First</Text>
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export const TabOneScreen: VFC<TabOneScreenProps<"TabOneScreen">> = () => {
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      // eslint-disable-next-line react/jsx-handler-names
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
