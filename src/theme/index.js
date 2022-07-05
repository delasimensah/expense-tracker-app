import { extendTheme } from "native-base";
import { DefaultTheme } from "@react-navigation/native";

import { colors } from "./colors";
import { fontConfig } from "./fonts";

export const theme = extendTheme({
  colors,
  fontConfig,
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  components: {
    Input: {
      baseStyle: {
        _light: {
          _focus: {
            borderColor: "brand.primary",
          },
        },
      },
    },
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
