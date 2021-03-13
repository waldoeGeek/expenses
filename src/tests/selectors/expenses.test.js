import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';


const testData = [{
  id: '1',
  description: 'gum',
  note: 'ewsdewdfwefwe',
  amount: 193,
  createdAt: 0
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 22000,
    createdAt: moment(0).subtract(21, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    note: 'yum',
    amount: 95,
    createdAt: moment(0).add(21, 'days').valueOf()
  }]

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(testData, filters);
  expect(result).toEqual([ testData[2], testData[1] ]);
}); 

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisibleExpenses(testData, filters);
  expect(result).toEqual([ testData[2], testData[0] ]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(15, 'days')
  };
  const result = getVisibleExpenses(testData, filters);
  expect(result).toEqual([ testData[0], testData[1] ]);
});

test('should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(testData, filters);
  expect(result).toEqual([ testData[1], testData[0], testData[2] ]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined    
  };
  const result = getVisibleExpenses(testData, filters);
  expect(result).toEqual([ testData[2], testData[0], testData[1] ]);
});