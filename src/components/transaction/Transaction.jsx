import "./Transaction.css";

export const Transaction = ({ value, description, category }) => {
  return (
    <li className="itemTransaction">
      <p id="description">{description}</p>
      <p id="category">{category}</p>
      <p id="value">R$ {value.toFixed(2)}</p>
    </li>
  );
};
