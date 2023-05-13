import TransactionItem from '../TransactionItem'
import './index.css'

function TransactionList(props) {
  const {transactionsList, deleteObject} = props

  return (
    <ul className="list-container">
      <h2 className="heading3">History</h2>
      <li className="displayProps">
        <p className="headerElement">Title</p>
        <p className="headerElement">Amount</p>
        <p className="headerElement headerLast">Type</p>
      </li>
      {transactionsList.map(eachItem => (
        <TransactionItem
          key={eachItem.id}
          transactionObject={eachItem}
          deleteObject={deleteObject}
        />
      ))}
    </ul>
  )
}
export default TransactionList
