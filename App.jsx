import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import {
  useFonts as useNunitoFont,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import Navigation from "./src/navigation";

const App = () => {
  let [nunitoLoaded] = useNunitoFont({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (!nunitoLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
