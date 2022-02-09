import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    let expenseListDisplay = (
        <h2 className="expenses-list__fallback">No Expenses Found</h2>
    );

    const expenses = props.items;

    if (expenses.length > 0) {
        expenseListDisplay = expenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            );
        });
    }

    return <ul className="expenses-list">{expenseListDisplay}</ul>;
};

export default ExpensesList;
