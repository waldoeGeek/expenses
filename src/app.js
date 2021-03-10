import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// })



store.dispatch(addExpense({ description: 'Water Bill', amount: 2000, createdAt: 50000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 4000, createdAt: 22000000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 1000 }))

// store.dispatch(setTextFilter('water'));


// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000)
// store.dispatch(getVisibleExpenses());


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(store.getState());


const jsx = (
  <Provider store={store}>
    <AppRouter/>

  </Provider>
)



// const appRoot = document.getElementById('app');

// ReactDOM.render(<AppRouter/>, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));
