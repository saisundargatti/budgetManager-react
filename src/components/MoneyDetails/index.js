import './index.css'

const MoneyDetails = ({
  totalBalance,
  totalIncome,
  totalExpenses,
  eachStyle,
}) => {
  const formattedTotalBalance = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(totalBalance)
  const formattedTotalIncome = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(totalIncome)
  const formattedTotalExpenses = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(totalExpenses)

  const {url, alt, name, backgroundColor, borderColor} = eachStyle
  let data

  switch (name) {
    case 'Balance':
      data = <p data-testid="balanceAmount">{formattedTotalBalance}</p>
      break
    case 'Income':
      data = <p data-testid="incomeAmount">{formattedTotalIncome}</p>
      break
    case 'Expenses':
      data = <p data-testid="expensesAmount">{formattedTotalExpenses}</p>
      break
    default:
      data = <p>No data available</p>
      break
  }

  return (
    <div style={{backgroundColor, borderColor}} className="balance-card">
      <img src={url} alt={alt} className="icon" />
      <div className="data-item">
        <p>Your {name}</p>
        {data}
      </div>
    </div>
  )
}

export default MoneyDetails
