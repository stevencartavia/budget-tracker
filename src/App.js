import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import DateTime from "./components/DateTime";

function App() {
  return (
        <AppProvider>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center gap-5 my-3">
                    <h1>Budget Planner</h1>
                    <DateTime />
                </div>
                <div className="row mt-2">
                    <div className="col-sm">
                        <Budget />
                    </div>
                    <div className="col-sm">
                        <Remaining />
                    </div>
                    <div className="col-sm">
                        <ExpenseTotal />
                    </div>
                </div>
                <h3 className="mt-5">Expenses</h3>
                <div className="row mt-2">
                    <div className="col-sm">
                        <ExpenseList />
                    </div>
                </div>
                <h3 className="mt-5">Add Expense</h3>
                <div className="row mt-2">
                    <div className="col-sm">
                        <AddExpenseForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
}

export default App;
