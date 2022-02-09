import React from "react";
import "./ExpenseForm.css";
import "./NewExpense.css";

const ExpenseForm = (props) => {
    const [flag, setFlag] = React.useState(false);
    const cancelFormHandler = () => {
        setFlag(false);
    };

    const [enteredTitle, setEnteredTitle] = React.useState("");
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = React.useState("");
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const [enteredDate, setEnteredDate] = React.useState("");
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSubmitExpense(expenseData);
        setEnteredAmount("");
        setEnteredTitle("");
        setEnteredDate("");
        setFlag(false);
    };

    const addNewExpenseHandler = () => {
        setFlag(true);
    };

    if (!flag) {
        return <button onClick={addNewExpenseHandler}>Add new expense</button>;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelFormHandler}>Cancel</button>
                <button type="submit">add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
