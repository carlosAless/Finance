import { useState, useContext } from "react";
import { Input } from "../input/input";
import { Btn } from "../btn/Btn";
import "./Novatransacao.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { TransactionContext } from "../Transactions/TransactionContext";
import { v4 as uuidv4 } from "uuid";

export const Novatransacao = () => {
  const { addTransaction } = useContext(TransactionContext); // Agora está correto

  const [transaction, setTransaction] = useState({
    value: 0.0,
    category: "",
    description: "",
    date: "",
    id: uuidv4(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      ...transaction,
      value: parseFloat(transaction.value),
    });
  };

  return (
    <div className="novatransacao">
      <div className="arrow_back">
        <Link to="/">
          <img src={assets.arrow_back} alt="Voltar" />
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="title">Nova transação</div>

        <Input
          text={"Valor"}
          type="number"
          name="value"
          value={transaction.value}
          onChange={handleChange}
          required
        />
        <Input
          text={"Categoria"}
          type="select"
          name="category"
          value={transaction.category}
          onChange={handleChange}
          required
        />
        <Input
          text={"Descrição"}
          type="text"
          name="description"
          value={transaction.description}
          onChange={handleChange}
          required
        />
        <Input
          text={"Data"}
          type="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          required
        />

        <Btn text={"Salvar"} type="submit"></Btn>
      </form>
    </div>
  );
};
