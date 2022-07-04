import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { IconButton, Icon, useTheme } from "native-base";
import { sharedScreenOptions } from "./sharedScreenOptions";
import { fonts } from "../theme/fonts";

// screens
import { RecentExpenses, AllExpenses } from "../screens";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  RecentExpenses: "hourglass",
  AllExpenses: "calendar",
};

const createScreenOptions = ({ route, navigation, theme }) => {
  const { colors } = theme;

  return {
    ...sharedScreenOptions,
    tabBarLabelStyle: {
      fontFamily: fonts.nunito.medium,
    },
    tabBarInactiveTintColor: colors.gray[400],
    tabBarIcon: ({ size, color }) => {
      const iconName = TAB_ICON[route.name];

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerRight: () => {
      return (
        <IconButton
          icon={<Icon as={Ionicons} name="add" />}
          borderRadius="full"
          _icon={{
            color: "brand.primary",
            size: "lg",
          }}
          onPress={() => navigation.navigate("ManageExpense")}
        />
      );
    },
  };
};

const ExpensesNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) =>
        createScreenOptions({ route, navigation, theme })
      }
    >
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
