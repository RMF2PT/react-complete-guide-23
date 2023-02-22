import "./ExpenseItem.css";

export default function ExpenseItem() {
  const expenseDate = new Date().toLocaleDateString();
  const expenseTitle = "Xbox Gamepass";
  const expensePrice = 12.99;

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}
