import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
<<<<<<< HEAD
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 40
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 100
}));

store.dispatch(setTextFilter('gas'));

=======
import 'normalize.css/normalize.css';
import './styles/styles.scss';

>>>>>>> d24604c3df50f3bbe23d64f1d743d82d44bb48ca
ReactDOM.render(<AppRouter />, document.getElementById('app'));