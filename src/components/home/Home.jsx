import { Btn } from "../btn/Btn";
import { assets } from "../../assets/assets";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <section className="balance">
        <div>
          <h4>SALDO ATUAL</h4>
          <span className="value">R$ {0.0}</span>
        </div>
      </section>

      <section className="revenue">
        <div>
          <h4>RECEITAS</h4>
          <span className="value">R$ {0.0}</span>
        </div>
      </section>
      <section className="transactions">
        <div>
          <h4>Transações</h4>
          <Btn ico={assets.plus} text="Nova transação"></Btn>
        </div>
      </section>
    </div>
  );
};
