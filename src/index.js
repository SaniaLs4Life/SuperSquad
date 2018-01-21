import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers'
import { addCharacterById } from './actions'

const store = createStore(rootReducer)

store.subscribe(() => console.log('store', store.getState()))
store.dispatch(addCharacterById(2))
//Objects from JSON
//console.log('store.getState()', store.getState())

ReactDOM.render(
    <Provider store={store}>        
    <App />
    </Provider>,
    document.getElementById("root"))