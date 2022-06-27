import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

// navigators
import AppNavigator from "./AppNavigator";

import { theme, navigationTheme } from "../theme";

const Navigation = () => {
  return (
    <>
      <StatusBar style="dark" />

      <NativeBaseProvider theme={theme}>
        <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default Navigation;
