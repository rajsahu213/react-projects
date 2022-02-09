// This is the main file where we include all our React components
import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const [expenses, setExpenses] = React.useState([]);

    const newExpenseSaveHandler = (newExpense) => {
        setExpenses((prevExpenses) => {
            const size = prevExpenses.length;
            newExpense.id = size;
            return [newExpense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onSaveNewExpence={newExpenseSaveHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
