import { useSelector } from "react-redux";

// components
import { Screen, ExpenseSummary, ExpenseList, NoExpenses } from "../components";

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <Screen>
      <ExpenseSummary expenses={expenses} title="total" />

      {expenses.length === 0 ? (
        <NoExpenses text="No expenses found!" />
      ) : (
        <ExpenseList expenses={expenses} />
      )}
    </Screen>
  );
};

export default AllExpenses;
