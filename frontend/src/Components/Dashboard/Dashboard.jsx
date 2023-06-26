import React, { useEffect } from "react";
import { dollar } from "../../utils/icons";
import { useGlobalContext } from "../../content/context";

import styles from "./Dashboard.module.css";

export function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1>All Transactions</h1>

      <div className={styles["amount-container"]}>
        <div className={styles["dash-income"]}>
          <h2>Total Income: </h2>
          <p>
            {dollar} {totalIncome()}
          </p>
        </div>

        <div className={styles["dash-expense"]}>
          <h2>Total Expense: </h2>
          <p>
            {dollar} {totalExpenses()}
          </p>
        </div>

        <div className={styles.balance}>
          <h2>Total Balance: </h2>
          <p>
            {dollar} {totalBalance()}
          </p>
        </div>

        <div className={styles["salary-con"]}>
          <h2 className={styles["salary-title"]}>
            Min <span>Salary</span>Max
          </h2>
          <div className={styles["salary-item"]}>
            <p>${Math.min(...incomes.map((item) => item.amount))}</p>
            <p>${Math.max(...incomes.map((item) => item.amount))}</p>
          </div>
        </div>

        <div className={styles["expense-con"]}>
          <h2 className={styles["expense-title"]}>
            Min <span>Expense</span>Max
          </h2>
          <div className={styles["expense-item"]}>
            <p>${Math.min(...expenses.map((item) => item.amount))}</p>
            <p>${Math.max(...expenses.map((item) => item.amount))}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
