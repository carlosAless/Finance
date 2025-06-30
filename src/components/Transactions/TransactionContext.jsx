import { createContext, useContext, useState } from "react";

// Cria o contexto
export const TransactionContext = createContext();

// Hook personalizado para usar o contexto

// Provider do contexto
export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const balance = transactions.reduce((total, t) => total + t.value, 0);
  const revenues = transactions.filter((t) => t.value > 0).reduce((total, t) => total + t.value, 0);

  return (
    <TransactionContext.Provider
      value={{
        addTransaction,
        balance,
        revenues,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
