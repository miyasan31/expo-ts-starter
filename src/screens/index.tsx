import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React, { useMemo } from "react";
import type { ColorSchemeName } from "react-native";

import { AuthProvider } from "~/components/functional/AuthProvider";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { RootStackParamList } from "~/types";
import { linkingConfiguration } from "~/utils/linkingConfiguration";

import { NotFoundScreen } from "./404.screen";
import { ModalScreen } from "./hoge.modal";
import { BottomTabNavigator } from "./main";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigations: VFC<{ colorScheme: ColorSchemeName }> = (props) => {
  const themeResult = useMemo(() => {
    return props?.colorScheme === "dark" ? DarkTheme : DefaultTheme;
  }, [props]);

  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <NavigationContainer linking={linkingConfiguration} theme={themeResult}>
      <AuthProvider>
        <RootStack.Navigator initialRouteName="Main">
          <RootStack.Screen
            name="Main"
            component={BottomTabNavigator}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: backgroundColor },
            }}
          />

          <RootStack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{ title: "Oops!" }} />

          <RootStack.Group screenOptions={{ presentation: "modal" }}>
            <RootStack.Screen name="Modal" component={ModalScreen} options={{ title: "Oops!" }} />
          </RootStack.Group>
        </RootStack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};
