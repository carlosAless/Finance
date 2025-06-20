// components/btn/Btn.jsx
import "./Btn.css";
export const Btn = ({ text, ico, type = "button", onClick }) => {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {ico ? <img src={ico} alt="icon" /> : ""}
      {text}
    </button>
  );
};
