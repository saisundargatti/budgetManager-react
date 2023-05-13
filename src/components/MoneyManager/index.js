import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import boxComponentStyles from '../../boxComponentStyles'
import MoneyDetails from '../MoneyDetails'
import Form from '../Form'
import getProps from '../../Props'
import TransactionList from '../TransactionList'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const ProfileCard = () => (
  <div className="profileCard">
    <h1 className="heading">Hi, Richard</h1>
    <p className="sub-heading">
      Welcome back to your <span>Money Manager</span>
    </p>
  </div>
)

const MoneyManager = () => {
  const [title, setTitle] = useState('')

  const [amount, setAmount] = useState('')

  const [selectedOption, setSelectedOption] = useState(
    transactionTypeOptions[0].optionId,
  )

  const [transactionsList, setTransactionsList] = useState([])

  const updateTransactionsList = event => {
    event.preventDefault()

    const transaction = {
      id: uuidv4(),
      title,
      amount,
      selectedOption,
    }

    setTransactionsList([...transactionsList, transaction])

    setTitle('')
    setAmount('')
    setSelectedOption(transactionTypeOptions[0].optionId)
  }

  const props = getProps(transactionsList)
  console.log(props)

  const deleteObject = id => {
    const filteredList = transactionsList.filter(eachItem => eachItem.id !== id)
    setTransactionsList(filteredList)
  }
  return (
    <div className="body-container">
      <ProfileCard />
      <section className="component-holder">
        {boxComponentStyles.map(eachItem => (
          <MoneyDetails eachStyle={eachItem} key={eachItem.alt} {...props} />
        ))}
      </section>
      <section className="form-list-container">
        <Form
          {...{
            title,
            setTitle,
            amount,
            setAmount,
            selectedOption,
            setSelectedOption,
            transactionTypeOptions,
            updateTransactionsList,
          }}
        />
        <TransactionList
          transactionsList={transactionsList}
          deleteObject={deleteObject}
        />
      </section>
    </div>
  )
}
export default MoneyManager
