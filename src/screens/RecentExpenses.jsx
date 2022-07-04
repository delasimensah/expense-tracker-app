import { useSelector } from "react-redux";
import { getDateMinusDays } from "../utils";

// components
import { Screen, ExpenseSummary, ExpenseList, NoExpenses } from "../components";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <Screen>
      <ExpenseSummary expenses={recentExpenses} title="last 7 days" />

      {recentExpenses.length === 0 ? (
        <NoExpenses text="No expenses in the last 7 days." />
      ) : (
        <ExpenseList expenses={recentExpenses} />
      )}
    </Screen>
  );
};

export default RecentExpenses;
