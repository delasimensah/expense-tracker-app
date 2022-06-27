import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// screens
import { RecentExpenses, AllExpenses } from "../screens";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  RecentExpenses: "hourglass",
  AllExpenses: "calendar",
};

const createScreenOptions = ({ route, navigation }) => ({
  // headerStyle: {
  //   backgroundColor: "#2980b9"
  // },
  // headerTintColor: "#8e44ad",
  // tabBarActiveTintColor: "#8e44ad",
  tabBarInactiveTintColor: "#bdc3c7",
  // tabBarStyle: {
  //   backgroundColor: "#2980b9",
  // },
  tabBarIcon: ({ size, color }) => {
    const iconName = TAB_ICON[route.name];

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  // headerRight: ({ tintColor }) => {
  //   return (
  //     <IconButton
  //       icon="plus"
  //       color={tintColor}
  //       size={24}
  //       onPress={() => navigation.navigate("ManageExpenses")}
  //     />
  //   );
  // },
});

const ExpensesNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
        }}
      />

      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
        }}
      />
    </Tab.Navigator>
  );
};

export default ExpensesNavigator;
