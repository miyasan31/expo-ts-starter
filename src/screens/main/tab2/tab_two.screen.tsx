import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/TabTwo";
import { TabTwo } from "~/components/screen/TabTwo";

export const TabTwoScreen: VFC<Props> = (props) => {
  return <TabTwo {...props} />;
};
