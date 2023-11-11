export default function Button({ value, onClick }) {
  const className =
    value === "="
      ? "btn-equal"
      : value === "del" || value === "reset"
      ? "btn-action"
      : "btn-reqular";

  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {value}
    </button>
  );
}
