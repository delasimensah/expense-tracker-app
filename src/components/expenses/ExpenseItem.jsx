import { Center, Text, HStack, Pressable, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import abbreviate from "number-abbreviate";

const ExpenseItem = ({ item }) => {
  const { id, description, amount, date } = item;

  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ManageExpense", {
          expenseId: id,
        });
      }}
    >
      {({ isPressed }) => (
        <HStack
          p={3}
          my={2}
          borderRadius={6}
          justifyContent="space-between"
          bgColor="white"
          shadow="1"
          opacity={isPressed ? 70 : 100}
        >
          <VStack>
            <Text fontSize="md" bold>
              {description}
            </Text>

            <Text>{moment(date).format("YYYY-MM-DD")}</Text>
          </VStack>

          <Center px={3} bgColor="brand.primary" minW={16} borderRadius={6}>
            <Text color="white" bold>
              {abbreviate(amount, 2)}
            </Text>
          </Center>
        </HStack>
      )}
    </Pressable>
  );
};

export default ExpenseItem;
