import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sharedScreenOptions } from "./sharedScreenOptions";

// navigators
import ExpensesNavigator from "./ExpensesNavigator";

// screens
import { ManageExpense } from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...sharedScreenOptions,
      }}
    >
      <Stack.Screen
        name="ExpenseOverview"
        component={ExpensesNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
