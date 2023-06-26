import React, { useState } from "react";

import { useGlobalContext } from "../../content/context";

import "./Form.css";

const initialInputState = {
  title: "",
  amount: "",
  date: "",
  category: "",
  description: "",
};

export function Form({ isOpen, onClose }) {
  const { addIncome, getIncomes } = useGlobalContext();

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

    addIncome(inputState);
    onClose();

    setInputState(initialInputState);
  };

  return (
    <div className={`form-container ${isOpen ? "shown" : ""}`}>
      <article className="income-form">
        <h2>Add Income</h2>

        <button className="close-button" onClick={onClose}>
          <i className="fa-solid fa-x" />
        </button>

        <form className="basic-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            name={"title"}
            placeholder="Salary Title"
            onChange={handleInput("title")}
          />

          <input
            type="text"
            value={amount}
            name={"amount"}
            placeholder="Salary Amount"
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
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="description"
            value={description}
            placeholder="Add A Reference"
            id="description"
            onChange={handleInput("description")}
          ></textarea>

          <button type="submit">
            <i className="fa-solid fa-plus" /> Add Income
          </button>
        </form>
      </article>
    </div>
  );
}
