import { useEffect, useState } from "react";

import { useGlobalContext } from "../../content/context";
import IncomeItem from "../IncomeItem/IncomeItem";
import { ExpenseForm } from "./ExpenseForm";

import "./Expenses.css";

export function Expenses() {
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  const { addExpense, getExpenses, expenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="expenses-main">
      <div className="inner-expense">
        <header>
          <div className="title-container">
            <h1>Expenses</h1>

            <span className="total-expenses">
              <span className="currency">$</span> {totalExpenses()}
            </span>
          </div>

          <button
            title="Add Expense"
            className="add-expense"
            onClick={() => setIsExpenseModalOpen(true)}
          >
            <i className="fas fa-plus" />
          </button>
        </header>

        <div className="expense-content">
          <ExpenseForm
            isOpen={isExpenseModalOpen}
            onClose={() => setIsExpenseModalOpen(false)}
          />

          <div className="expenses"></div>
          {expenses.map((expense) => {
            const { _id, title, amount, date, category, description, type } =
              expense;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
