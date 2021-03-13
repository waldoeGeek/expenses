import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

test('Should generate set start date object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('Should generate set end date object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('Should set text filter object', () => {
  const action = setTextFilter('water');
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: 'water'
  });
});

test('should gennerate set text fieltr obhject with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: ''
  });
});

test('should generate action object for sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate action object for sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});