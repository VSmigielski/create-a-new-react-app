import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {
    const [showButton, setShowButton] = useState(true)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        onAddExpense(expenseData)
    }

    const showForm = () => {
        setShowButton(false)
    }

    const showAddButton = () => {
        setShowButton(true)
    }

    let button = <button onClick={showForm}>Add New Expense</button>

    return (
        <div className="new-expense">
            {showButton ? button : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showAddButton={showAddButton}/>}
        </div>
    )
}

export default NewExpense
