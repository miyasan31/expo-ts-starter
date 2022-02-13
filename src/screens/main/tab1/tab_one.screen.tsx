import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/TabOne";
import { TabOne } from "~/components/screen/TabOne";

export const TabOneScreen: VFC<Props> = (props) => {
  return <TabOne {...props} />;
};
