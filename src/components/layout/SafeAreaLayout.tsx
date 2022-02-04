/* eslint-disable react/destructuring-assignment */
import type { ReactNode, VFC } from "react";
import React from "react";

import type { SafeAreaViewProps } from "~/components/custom";
import { SafeAreaView } from "~/components/custom";
import { KeyboardAvoidingLayout } from "~/components/layout";
import { useThemeColor } from "~/hooks";

type Props = SafeAreaViewProps & {
  children: ReactNode;
};

export const SafeAreaLayout: VFC<Props> = (props) => {
  const { style, lightBgColor, darkBgColor, children } = props;

  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "bg1");

  return (
    <KeyboardAvoidingLayout>
      <SafeAreaView style={[style, { backgroundColor }]}>{children}</SafeAreaView>
    </KeyboardAvoidingLayout>
  );
};

// const defaultStyle = StyleSheet.create({});
