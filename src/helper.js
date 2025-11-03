import { CATEGORIES } from "./constant";

export const getId = () => {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
};

export const getDate = () => {
  return new Date().toISOString().split("T")[0];
};

export const getCategoryColor = (color) => {
  const category = CATEGORIES.find((cat) => cat.color === color);
  return category ? category.color : "#808080";
};

export const processDataForPieChart = (expenses) => {
  if (!Array.isArray(expenses) || expenses.length === 0) {
    return [];
  }

  const totalSpending = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount || 0),
    0
  );
  if (totalSpending === 0) {
    return [];
  }
  const spendingByCategory = expenses.reduce((acc, expense) => {
    const categoryName = expense.category;
    const amount = Number(expense.amount || 0);
    acc[categoryName] = (acc[categoryName] || 0) + amount;
    return acc;
  }, {});

  return Object.keys(spendingByCategory).map((categoryName) => {
    const amount = spendingByCategory[categoryName];
    const percentage = Math.round((amount / totalSpending) * 100);
    const categoryInfo = CATEGORIES.find((cat) => cat.name === categoryName);

    return {
      name: categoryName,
      amount,
      value: percentage,
      color: categoryInfo?.color || "#808080",
      text: `${percentage}%`,
    };
  });
};
