import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";

// navigators
import AppNavigator from "./AppNavigator";

import { theme, lightTheme, darkTheme } from "../theme";

const Navigation = () => {
  const colorScheme = useColorScheme();

  const status = colorScheme === "dark" ? "light" : "dark";
  const navigationTheme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <>
      <StatusBar style="dark" />

      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default Navigation;
