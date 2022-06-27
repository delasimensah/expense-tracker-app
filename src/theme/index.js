import { extendTheme } from "native-base";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { colors } from "./colors";
import { fontConfig } from "./fonts";

const config = {
  useSystemColorMode: true,
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

export const theme = extendTheme({
  // colors: {
  //   primary: colors.light.primary,
  // },
  fontConfig,
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
  // config,
  // components: {
  //   Button: {
  //     defaultProps: {
  //       backgroundColor: "primary",
  //     },
  //   },
  //   Text: {
  //     defaultProps: {
  //       _dark: {
  //         color: "white",
  //       },
  //       light: {
  //         color: "black",
  //       },
  //     },
  //   },
  //   Box: {
  //     defaultProps: {
  //       flex: 1,
  //       _dark: {
  //         color: "black",
  //       },
  //       light: {
  //         color: "white",
  //       },
  //     },
  //   },
  // },
});
