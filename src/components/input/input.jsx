import "./input.css";

export const Input = ({ text, type }) => {
  return (
    <div className="groupInput">
      <label htmlFor="input-value">{text}</label>
      <input type={type} required />
    </div>
  );
};
