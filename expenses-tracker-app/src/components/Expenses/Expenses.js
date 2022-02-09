import Card from "../UI/Card";
import React from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [expenseFilter, setExpenseFilter] = React.useState("2022");

    const getExpenseFilterHandler = (newExpenseFilter) => {
        setExpenseFilter(newExpenseFilter);
    };

    const expenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === expenseFilter
    );

    return (
        <Card className="expenses">
            <ExpenseFilter
                filterYear={expenseFilter}
                onExpenseFilter={getExpenseFilterHandler}
            />
            <ExpensesChart expenseItems={expenses} />
            <ExpensesList items={expenses} />
        </Card>
    );
};

export default Expenses;
