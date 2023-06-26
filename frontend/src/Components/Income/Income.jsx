import React, { useEffect, useState } from "react";
import "./Income.css";
import { useGlobalContext } from "../../content/context";
import { Form } from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

export function Income() {
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);

  const { addIncome, getIncomes, incomes, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="income-main">
      <div className="inner-income">
        <header>
          <div className="title-container">
            <h1>Incomes</h1>

            <span className="total-income">
              <span className="currency">$</span>
              {totalIncome()}
            </span>
          </div>

          <button
            title="Add Income"
            className="add-income"
            onClick={() => setIsIncomeModalOpen(true)}
          >
            <i className="fas fa-plus" />
          </button>
        </header>

        <div className="income-content">
          <Form
            isOpen={isIncomeModalOpen}
            onClose={() => setIsIncomeModalOpen(false)}
          />

          <div className="incomes"></div>
          {incomes.map((income) => {
            const { _id, title, amount, date, category, description, type } =
              income;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                category={category}
                type={type}
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
