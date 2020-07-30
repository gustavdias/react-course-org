import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import reducer from './store/reducer'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

const rootReducer = combineReducers({
    // counter = ctr
    ctr: counterReducer,
    //res = result
    res: resultReducer
});

//Create Store
const store = createStore(rootReducer);
//Provider is a helper component which allows us to kind of inject our store into the react components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// /To hook up the provider component with our store here, I need to set up a property, a special property expected by the component
registerServiceWorker();
