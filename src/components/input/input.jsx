import "./input.css";

export const Input = ({ text, type, name, value, onChange, required }) => {
  return (
    <div className="groupInput">
      <label htmlFor={name}>{text}</label>
      {type === "select" ? (
        <select id={name} name={name} value={value} onChange={onChange} required={required}>
          <option value="">Selecione...</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Moradia">Moradia</option>
          <option value="Lazer">Lazer</option>
          <option value="Salário">Salário</option>
          <option value="Outros">Outros</option>
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};
