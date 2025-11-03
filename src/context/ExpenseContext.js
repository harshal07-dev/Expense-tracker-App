import { createContext, useContext, useEffect, useState } from "react";
import { getCategoryColor, getDate, getId } from "../helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // getting data from storage
  useEffect(() => {
    const getData = async () => {
      try {
        const storedExpenses = await AsyncStorage.getItem("expenseList");
        if (storedExpenses !== null) {
          setExpenses(JSON.parse(storedExpenses));
        }
      } catch (error) {
        console.error("Failed to load expenses from storage", error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  // Save the data to storage
  useEffect(() => {
    if (isLoading) return;
    const persistExpenses = async () => {
      try {
        await AsyncStorage.setItem("expenseList", JSON.stringify(expenses));
      } catch (error) {
        console.error("Failed to save expenses to storage", error);
      }
    };
    persistExpenses();
  }, [expenses, isLoading]);
  const addExpense = (expense) => {
    const newExpense = {
      id: getId(),
      title: expense.title,
      amount: Number(expense.amount),
      category: expense.category.name,
      date: getDate(),
      color: getCategoryColor(expense.category.color),
      icon: expense.category.icon,
    };

    //update the list
    setExpenses([...expenses, newExpense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpenses = () => useContext(ExpenseContext);
