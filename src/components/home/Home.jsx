import { Btn } from "../btn/Btn";
import { assets } from "../../assets/assets";
import "./Home.css";
import { TransactionContext } from "../Transactions/TransactionContext";
import { useContext } from "react";

export const Home = () => {
  const { balance, transactions } = useContext(TransactionContext); // Agora está correto

  return (
    <div className="home">
      <section className="balance">
        <div>
          <h4>SALDO ATUAL</h4>
          <span className="value">R$ {balance}</span>
        </div>
      </section>

      <div className="balance-container">
        <section className="revenue">
          <div>
            <h4>RECEITAS</h4>
            <span className="value">R$ {0.0}</span>
          </div>
        </section>

        <section className="expense">
          <h4>DESPESAS</h4>
          <span className="value">R$ {0.0}</span>
        </section>
      </div>

      <section className="transactions">
        <div>
          <h4>Transações</h4>
          {transactions.map((e) => {
            console.log(e);
          })}
          <Btn ico={assets.plus} text="Nova transação"></Btn>
        </div>
      </section>
    </div>
  );
};
