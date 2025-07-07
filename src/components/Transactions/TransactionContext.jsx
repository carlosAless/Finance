import { createContext, useContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const expenses = transactions
    .filter((t) => t.value < 0)
    .reduce((total, t) => total + Math.abs(t.value), 0);
  const balance = transactions.reduce((total, t) => total + t.value, 0);
  const revenues = transactions.filter((t) => t.value > 0).reduce((total, t) => total + t.value, 0);

  return (
    <TransactionContext.Provider
      value={{
        addTransaction,
        balance,
        revenues,
        expenses,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransactions must be used within a TransactionProvider");
  }
  return context;
};
