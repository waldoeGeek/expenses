import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/main.scss';




// const appRoot = document.getElementById('app');

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
