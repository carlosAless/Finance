import { Btn } from "../btn/Btn";
import { assets } from "../../assets/assets";
import "./Home.css";
import { TransactionContext } from "../Transactions/TransactionContext";
import { useContext } from "react";
import { Transaction } from "../transaction/Transaction";

export const Home = () => {
  const { balance, transactions, revenues, expenses } = useContext(TransactionContext);

  return (
    <div className="home">
      <section className="balance">
        <div>
          <h4>SALDO ATUAL</h4>
          <span className="value">R$ {balance.toFixed(2)}</span>
        </div>
      </section>

      <div className="balance-container">
        <section className="revenue">
          <div>
            <h4>RECEITAS</h4>
            <span className="value">R$ {revenues.toFixed(2)}</span>
          </div>
        </section>

        <section className="expense">
          <h4>DESPESAS</h4>
          <span className="value">R$ {expenses.toFixed(2)}</span>
        </section>
      </div>

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
          <Btn ico={assets.plus} text="Nova transação"></Btn>
        </div>
      </section>
    </div>
  );
};
