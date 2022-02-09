import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const newExpenseSubmitHandler = (newExpenseObject) => {
        props.onSaveNewExpence(newExpenseObject);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={newExpenseSubmitHandler} />
        </div>
    );
};

export default NewExpense;
