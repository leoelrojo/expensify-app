import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectSumExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const statementToReturn = (expenses) => {
    if(expenses.length === 0) {
        return <h1 className="page-header__title page-header__title--message">No expenses</h1>
    } else {
        return (
            expenses.length > 1 
            ? <h1 className="page-header__title"> 
                <span> 
                    {expenses.length} 
                </span> 
                { ' expenses for' } 
                <span> {
                    numeral(expenses.sum / 100)
                    .format('0.00$')
                }
                </span>
            </h1>
            : <h1 className="page-header__title"> 
                <span> 
                    {expenses.length} 
                </span> 
                { ' expense for' } 
                <span> {
                    numeral(expenses.sum / 100)
                    .format('0.00$')
                }
                </span>
            </h1>
        )
    }
};

export const ExpenseTotal = ({ expenses }) => {
    return (
        <div className="page-header">
            <div className="content-container">
                { statementToReturn(expenses) }
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expenses: selectSumExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseTotal);