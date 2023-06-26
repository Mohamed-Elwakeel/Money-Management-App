import React from "react";
import {
  dollar,
  calender,
  comment,
  trash,
  money,
  freelance,
  stocks,
  users,
  bitcoin,
  card,
  yt,
  piggy,
  book,
  food,
  medical,
  tv,
  takeaway,
  clothing,
  circle,
} from "../../utils/icons";

import "./IncomeItem.css";

import { dateFormat } from "../../utils/dateFormat";

export default function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "traveling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  return (
    <div className="income-item">
      <div className="icon">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>

      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="income-item-text">
            <p>
              {dollar} {amount}
            </p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>
              {comment} {description}
            </p>
          </div>
          <div className="btn-con">
            <button onClick={() => deleteItem(id)}>{trash}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
