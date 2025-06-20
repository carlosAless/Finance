import { Input } from "../input/input";
import { Btn } from "../btn/Btn";
import "./Novatransacao.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export const Novatransacao = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="novatransacao">
      <div className="arrow_back">
        <Link to="/">
          <img src={assets.arrow_back} alt="arrow_back" />
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="title">Nova transação</div>

        <Input text={"Valor"} type="number"></Input>
        <Input text={"Categoria"} type="select"></Input>
        <Input text={"Descrição"} type="text"></Input>
        <Input text={"Data"} type="date"></Input>

        <Btn text={"Salvar"} type="submit"></Btn>
      </form>
    </div>
  );
};
