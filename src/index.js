import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {reducer} from './reducer/reducer'

const store = createStore(reducer,window.STATE_FROM_SERVER)


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
