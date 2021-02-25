import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/main.scss';

const store = configureStore();


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// })



store.dispatch(addExpense({ description: 'Water Bill', amount: 52000, createdAt: 70000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 35000, createdAt: 62000 }))

store.dispatch(setTextFilter('water'));
// store.dispatch(getVisibleExpenses());


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(store.getState());




// const appRoot = document.getElementById('app');

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
