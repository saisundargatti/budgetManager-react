import './index.css'

const Form = ({
  updateTransactionsList,
  title,
  setTitle,
  amount,
  setAmount,
  selectedOption,
  setSelectedOption,
  transactionTypeOptions,
}) => (
  <form onSubmit={updateTransactionsList} className="form-container">
    <h3 className="heading3">Add Transaction</h3>
    <label htmlFor="title">TITLE</label>
    <input
      id="title"
      type="text"
      placeholder="TITLE"
      value={title}
      onChange={event => setTitle(event.target.value)}
    />
    <label htmlFor="amount">AMOUNT</label>
    <input
      id="amount"
      type="text"
      placeholder="AMOUNT"
      value={amount}
      onChange={event => setAmount(event.target.value)}
    />
    <label htmlFor="type">TYPE</label>
    <select
      value={selectedOption}
      onChange={event => setSelectedOption(event.target.value)}
    >
      {transactionTypeOptions.map(eachItem => (
        <option value={eachItem.optionId} key={eachItem.optionId}>
          {eachItem.displayText}
        </option>
      ))}
    </select>
    <button type="submit">Add</button>
  </form>
)

export default Form
