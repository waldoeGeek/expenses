import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense object', () => {
  const action = editExpense('123abc', { note: 'New Note Value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New Note Value'
    }
  });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1095800,
    createdAt: 8754215555,
    note: 'This was a note'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('hould setup addExpense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
});