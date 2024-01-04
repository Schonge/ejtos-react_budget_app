import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalSpent = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("The budget cannot exceed £20,000");
        } else if(event.target.value < totalSpent) {
            alert("The budget cannot be lower than the total expense");
        } else {
            setNewBudget(event.target.value);
        }
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;