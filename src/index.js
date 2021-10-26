import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import {combineReducers,createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import  mySaga from './sagas'
import myfirtstreducer from './reducer'
const SagaMidleware=createSagaMiddleware()

const rootReducer=combineReducers({myfirtstreducer})
const store=createStore(rootReducer,applyMiddleware(SagaMidleware))

SagaMidleware.run(mySaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

