import moment from 'moment';


export default [{
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
