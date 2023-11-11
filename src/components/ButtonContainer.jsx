import Button from "./Button";
export default function ButtonContainer({
  buttonValues,
  onEqualsClick,
  onCommaClick,
  onDeleteClick,
  onSignClick,
  onNumClick,
  onResetClick,
}) {
  return (
    <div className="button-container">
      {buttonValues.map((val, i) => (
        <Button
          onClick={
            val === "="
              ? onEqualsClick
              : val === "/" || val === "x" || val === "+" || val === "-"
              ? onSignClick
              : val === "."
              ? onCommaClick
              : val === "reset"
              ? onResetClick
              : val === "del"
              ? onDeleteClick
              : onNumClick
          }
          key={i}
          value={val}
        />
      ))}
    </div>
  );
}
