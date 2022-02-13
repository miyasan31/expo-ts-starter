import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/TabThree";
import { TabThree } from "~/components/screen/TabThree";

export const TabThreeScreen: VFC<Props> = (props) => {
  return <TabThree {...props} />;
};
