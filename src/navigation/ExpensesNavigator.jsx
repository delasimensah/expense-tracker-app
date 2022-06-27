import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { IconButton, Icon } from "native-base";
import { useColorScheme } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

// screens
import { RecentExpenses, AllExpenses } from "../screens";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  RecentExpenses: "hourglass",
  AllExpenses: "calendar",
};

const createScreenOptions = ({ route, navigation }) => {
  return {
    headerTintColor: colors.light.primary,
    headerTitleStyle: {
      fontFamily: fonts.body.medium,
    },
    tabBarLabelStyle: {
      fontFamily: fonts.body.regular,
    },
    tabBarActiveTintColor: colors.light.primary,
    tabBarIcon: ({ size, color }) => {
      const iconName = TAB_ICON[route.name];

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerRight: ({ tintColor }) => {
      return (
        <IconButton
          icon={<Icon as={Ionicons} name="add" />}
          borderRadius="full"
          _icon={{
            color: tintColor,
            size: "lg",
          }}
          onPress={() => navigation.navigate("ManageExpense")}
        />
      );
    },
  };
};

const ExpensesNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) =>
        createScreenOptions({ route, navigation })
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
