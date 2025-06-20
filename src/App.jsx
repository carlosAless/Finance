import "./App.css";
import { assets } from "./assets/assets";
import { Resumo } from "./components/resumo/Resumo";
import { Novatransacao } from "./components/novatransacao/Novatransacao";
import { Home } from "./components/home/Home";
import { Link, Routes, Route } from "react-router-dom";
import { Btn } from "./components/btn/Btn";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="title">
          <Link to={"/"}>
            <img src={assets.logo} alt="logo" />
            FINANCE
          </Link>
        </div>

        <menu>
          <ul>
            <li>
              <Link to="/resumo">Resumo de transações</Link>
            </li>
            <li>
              <Link to="/novatransacao">
                <Btn ico={assets.plus} text="Nova transação"></Btn>
              </Link>
            </li>
          </ul>
        </menu>
      </nav>

      <div className="app-content">
        <Routes>
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/novatransacao" element={<Novatransacao />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
