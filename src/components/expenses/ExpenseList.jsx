import { Pressable, HStack, VStack, Text, Icon } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const deleteRow = (id) => {
    console.log(id);
  };

  const renderHiddenItem = (itemData) => (
    <HStack flex="1" my={2}>
      <Pressable
        w="70"
        ml="auto"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(itemData.item.id)}
        _pressed={{
          opacity: 0.5,
        }}
        borderRightRadius={6}
      >
        <VStack alignItems="center" space={1}>
          <Icon as={<Ionicons name="trash" />} color="white" size="sm" />
          <Text fontSize="sm" fontWeight="medium" color="white">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <SwipeListView
      data={expenses}
      renderItem={(itemData) => <ExpenseItem item={itemData.item} />}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-70}
      stopRightSwipe={-70}
      disableRightSwipe
    />
  );
};

export default ExpenseList;
