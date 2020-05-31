import React from 'React';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectSumExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const statementToReturn = (expenses) => {
    if(expenses.length === 0) {
        return "No expenses"
    } else {
        return (
            expenses.length > 1 
            ? `${expenses.length} expenses for ${
                numeral(expenses.sum / 100)
                .format('0.00$')
            }` 
            : `${expenses.length} expense for ${
                numeral(expenses.sum / 100)
                .format('0.00$')
            }`
        )
    }
};

export const ExpenseTotal = ({ expenses }) => {
    return (
        <div>
        {
            statementToReturn(expenses)
        }
    </div>
    )
};

// const ExpenseTotal = ({ expenseCount, expensesTotal }) => {
//     const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
//     const formattedExpensesSum = numeral(expensesTotal / 100).format('0.00$'');

//     return (
//         <div>
//             <p>Viewing {expenseCount {expenseWord} for {formattedExpensesTotal}</p>
//         </div>
//     );
// };

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expenses: selectSumExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseTotal);