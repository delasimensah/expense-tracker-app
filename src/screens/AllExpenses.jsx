import { FlatList } from "react-native";
import { Box, Center, Text, HStack, Pressable, VStack } from "native-base";
import moment from "moment";
import { useSelector } from "react-redux";

const AllExpenses = ({ navigation }) => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <Box flex={1} px={6} pt={6}>
      <HStack
        p={2}
        borderRadius={6}
        justifyContent="space-between"
        alignItems="center"
        bgColor="brand.primary"
      >
        <Text fontSize="sm" color="white">
          Total
        </Text>

        <Text fontSize="lg" bold color="white">
          GHC {expensesSum.toFixed(2)}
        </Text>
      </HStack>

      {expenses.length < 0 ? (
        <Center flex={1}>
          <Text>No Expenese</Text>
        </Center>
      ) : (
        <FlatList
          data={expenses}
          renderItem={(itemData) => (
            <Pressable
              onPress={() => {
                navigation.navigate("ManageExpense", {
                  expenseId: itemData.item.id,
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
                      {itemData.item.description}
                    </Text>

                    <Text>
                      {moment(itemData.item.date).format("YYYY-MM-DD")}
                    </Text>
                  </VStack>

                  <Center
                    px={3}
                    bgColor="brand.primary"
                    minW={16}
                    borderRadius={6}
                  >
                    <Text color="white" bold>
                      {itemData.item.amount.toFixed(2)}
                    </Text>
                  </Center>
                </HStack>
              )}
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </Box>
  );
};

export default AllExpenses;
