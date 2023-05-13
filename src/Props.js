function getProps(userDetailsList) {
  const income = userDetailsList.filter(
    eachItem => eachItem.selectedOption === 'INCOME',
  )
  const totalIncome = income.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.amount),
    0,
  )

  const expenses = userDetailsList.filter(
    eachItem => eachItem.selectedOption === 'EXPENSES',
  )

  const totalExpenses = expenses.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.amount),
    0,
  )

  const totalBalance = totalIncome - totalExpenses

  return {totalIncome, totalExpenses, totalBalance}
}

export default getProps
