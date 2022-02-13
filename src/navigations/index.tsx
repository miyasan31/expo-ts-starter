import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import type { VFC } from "react";
import React, { useMemo } from "react";
import type { ColorSchemeName } from "react-native";

import { AuthProvider } from "~/navigations/AuthProvider";
import { RootNavigator } from "~/navigations/RootNavigator";
import { linkingConfiguration } from "~/utils/linkingConfiguration";

export const Navigations: VFC<{ colorScheme: ColorSchemeName }> = (props) => {
  const themeResult = useMemo(() => {
    return props?.colorScheme === "dark" ? DarkTheme : DefaultTheme;
  }, [props]);

  return (
    <NavigationContainer linking={linkingConfiguration} theme={themeResult}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
