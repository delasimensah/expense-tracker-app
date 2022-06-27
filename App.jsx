import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import {
  useFonts as useRalewayFont,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import Navigation from "./src/navigation";

const App = () => {
  let [ralewayLoaded] = useRalewayFont({
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold,
  });

  if (!ralewayLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
