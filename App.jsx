import { NativeBaseProvider, Center, Text } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Text>Expense Tracker</Text>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
