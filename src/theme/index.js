import { extendTheme } from "native-base";

import { colors } from "./colors";
import { fontConfig } from "./fonts";

const config = {
  useSystemColorMode: true,
};

export const theme = extendTheme({
  colors: {
    primary: colors.light.primary,
  },
  fontConfig,
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
  config,
});
