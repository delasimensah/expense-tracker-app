import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

// native base
import { NativeBaseProvider } from "native-base";

// navigators
import AppNavigator from "./AppNavigator";

import { theme } from "../theme";

const Navigation = () => {
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
