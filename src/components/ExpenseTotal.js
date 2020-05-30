import React from 'React';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectSumExpenses from '../selectors/expenses-total';

const statementToReturn = (props) => {
    if(props.expenses.length === 0) {
        return "No expenses"
    } else {
        return (
            props.expenses.length > 1 
            ? `${props.expenses.length} expenses for ${
                numeral(props.expenses.sum / 100)
                .format('0.00$')
            }` 
            : `${props.expenses.length} expense for ${
                numeral(props.expenses.sum / 100)
                .format('0.00$')
            }`
        )
    }
};

export const ExpenseTotal = (props) => ( 
    <div>
        {
            statementToReturn(props)
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectSumExpenses(state.expenses)
    };
};

export default connect(mapStateToProps)(ExpenseTotal);