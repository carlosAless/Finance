import { useContext } from "react";
import { Grafico } from "../grafico/Grafico";
import { TransactionContext } from "../Transactions/TransactionContext";
import { Btn } from "../btn/Btn";
import { assets } from "../../assets/assets";
import { Transaction } from "../transaction/Transaction";
import "./Resumo.css";

export const Resumo = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="resumo">
      <Grafico />
      <section className="transactions">
        <div>
          <h4>Transações</h4>
          {transactions.length < 1 ? (
            <p>Sem transações</p>
          ) : (
            <ul className="listTransactions">
              {transactions.map((e) => (
                <Transaction
                  key={e.id}
                  value={e.value}
                  description={e.description}
                  category={e.category}
                />
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};
