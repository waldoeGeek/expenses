import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const currentState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual(currentState);
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
}); 

test('should set text filter', () => {
  const action = { type: 'SET_TEXT', text: 'bingo' };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe('bingo');
});

test('should set startDate filter', () => {
  const action = { 
    type: 'SET_START_DATE',
    startDate: moment(0).add(3, 'days') 
  };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toEqual(moment(0).add(3, 'days'));
});

test('should set endDate filter', () => {
  const action = { 
    type: 'SET_END_DATE',
    endDate: moment(0).add(5, 'days') 
  };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toEqual(moment(0).add(5, 'days'));
});

