import { dashboard, expenses, trend } from "../utils/icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard/details",
  },

  {
    id: 2,
    title: "Incomes",
    icon: trend,
    link: "/dashboard/income",
  },
  {
    id: 3,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard/expenses",
  },
];
