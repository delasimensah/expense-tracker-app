import { Text, HStack } from "native-base";
import { addCommas } from "../../utils";

const ExpenseSummary = ({ expenses, title }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <HStack
      p={2}
      borderRadius={6}
      justifyContent="space-between"
      alignItems="center"
      bgColor="brand.primary"
    >
      <Text fontSize="sm" color="white" textTransform="capitalize">
        {title}
      </Text>

      <Text fontSize="lg" bold color="white">
        GH¢ {addCommas(expensesSum.toFixed(2))}
      </Text>
    </HStack>
  );
};

export default ExpenseSummary;
