import { useState } from "react";

import { useGlobalContext } from "../../content/context";

import "./ExpenseForm.css";

const initialInputState = {
  title: "",
  amount: "",
  date: "",
  category: "",
  description: "",
};

export function ExpenseForm({ isOpen, onClose }) {
  const { addExpense, getExpenses } = useGlobalContext();

  const [inputState, setInputState] = useState(initialInputState);
  const { title, amount, date, category, description } = inputState;

  const handleInput = function (name) {
    return function (e) {
      {
        setInputState({ ...inputState, [name]: e.target.value });
      }
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense(inputState);
    onClose();

    setInputState(initialInputState);
  };

  return (
    <div className={`form-container ${isOpen ? "shown" : ""}`}>
      <article className="expense-form">
        <h2>Add Expense</h2>

        <button className="close-button" onClick={onClose}>
          <i className="fa-solid fa-x" />
        </button>

        <form className="basic-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            name={"title"}
            placeholder="Expense Title"
            onChange={handleInput("title")}
          />

          <input
            type="text"
            value={amount}
            name={"amount"}
            placeholder="Expense Amount"
            onChange={handleInput("amount")}
          />

          <input
            placeholder="Enter A Date"
            type="date"
            value={date}
            name="date"
            onChange={handleInput("date")}
          />

          <select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="traveling">Traveling</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="description"
            value={description}
            placeholder="Add A Reference"
            id="description"
            onChange={handleInput("description")}
          />

          <button type="submit">
            <i className="fa-solid fa-plus" /> Add Expense
          </button>
        </form>
      </article>
    </div>
  );
}
