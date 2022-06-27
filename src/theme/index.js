import { extendTheme } from "native-base";
import { DefaultTheme } from "@react-navigation/native";

import { colors } from "./colors";
import { fontConfig } from "./fonts";

export const theme = extendTheme({
  colors,
  fontConfig,
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
});

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.brand.primary,
    text: colors.brand.primary,
  },
};
