import { createStore, combineReducers } from 'redux';
import {v4 as uuidv4} from 'uuid';


// Action generators

// const addExpense = (
//     { description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0 
//     } = {}
// ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuidv4(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

// const removeExpense = (
//     {
//         id
//     } = {}
// ) => ({
//     type: 'REMOVE_EXPENSE',
//     id
// });

// const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
// })

// Filter
// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT',
//     text
// });

// const sortByDate = () => ({
//     type: 'SORT_BY_DATE',
//     // sortBy: 'date'
// })

// const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT',
//     // sortBy: 'amount'
// })

// const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// });

// const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// });

// expenses Reducer
// const expensesReducerDefaultState = [];

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [
//                 ...state,
//                 action.expense
//             ]
//         case 'REMOVE_EXPENSE':
//             return state.filter(({ id }) => id != action.id)
//         case 'EDIT_EXPENSE':
//             return state.map((expense) => {
//                 if (expense.id == action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     };
//                 } else {
//                     return expense;
//                 }
//             })
//         default:
//             return state;
//     }
// };

// filters reducer
// const fitersReducerDefaultState = {
//     text: '', 
//     sortBy: '', 
//     startDate: undefined, 
//     endDate: undefined
// };

// const filtersReducer = (state = fitersReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT':
//             return {
//                 ...state,
//                 text: action.text
//             }
//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             }
//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             }
//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             }
//             case 'SET_END_DATE':
//                 return {
//                     ...state,
//                     endDate: action.endDate
//                 }
//         default:
//             return state;
//     }
// };

// timestamps(milliseconds) unix epoch
// jan 1st 1970
// 

// get visible expenses
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1;
//         } else if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });
// };

// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state =  store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expense_one = store.dispatch(addExpense({description: 'rent', amount: 30000, createdAt: 710000}))
const expense_two = store.dispatch(addExpense({description: 'coffee', amount: 1222200, createdAt: 20000}))

// store.dispatch(removeExpense({ id: expense_one.expense.id}));

// store.dispatch(editExpense( expense_two.expense.id, { amount: 500  }));

// store.dispatch(setTextFilter( 'coffee' ));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())


// store.dispatch(setEndDate(999))
// store.dispatch(setEndDate())

// console.log(expense_one);
// console.log(expense_two);


const demoState = {
    expenses: [{
        id: 'random',
        description: 'rent',
        note: 'this was the worst rent in my life!',
        amount: 92000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: '', //Date or amount
        startDate: undefined,
        endDate: undefined
    }
};
