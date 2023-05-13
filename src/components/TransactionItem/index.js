import './index.css'

function TransactionItem(props) {
  const {transactionObject, deleteObject} = props
  const {id, title, amount, selectedOption} = transactionObject

  const type = selectedOption === 'INCOME' ? 'Income' : 'Expenses'

  return (
    <li className="list-header displayItemProps">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={() => deleteObject(id)}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
