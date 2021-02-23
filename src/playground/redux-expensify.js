import { createStore, combineReducers } from 'redux';

// expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// filters reducer
const fitersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state = fitersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

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
        sortBy: 'date', //Date or amount
        startDate: undefined,
        endDate: undefined
    }
};