//node import syntax 
const redux = require('redux');
const createStore = redux.createStore;
//is a function but don't execute it yet. createStore allows us to create a new redux store

//create my reducer first before I create the store,
//a store needs to be initialized with a reducer

const initialState = {
    counter: 0
};
//--------------Reducer - You need to create the Reducer before the store
//state = initialState is a feature provided by ES6, I can initialize this argument to the function with a default value, whenever this function is now called with this argument being undefined,it will take the default value instead
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,//never mutate any data
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};
//this function here receives two arguments, the first one is the current state, the second argument is the action
// then the function has to return one thing and that is the updated state.
//--------------Store
const store = createStore(rootReducer);
console.log(store.getState());

//--------------Subscription ______ is set up right after the store was created so that we get informed about any future dispatches.
//Subscriptions make sure that I don't have to manually call getState here in my code if I want to get the current state snapshot but to inform me whenever I need to get a new state because something changed
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});
//Now subscribe takes an argument, a function which will be executed when ever the state is updated, so whenever an action reached the reducer.

//--------------Dispatching a Action
//needs to have a type property. This will later be important building block in getting the information which type of action was dispatched and what we should do in the reducer, that is why type is so important.
//Type then is just some unique identifier of your choice. The convention is to use all uppercase string
store.dispatch({ type: 'INC_COUNTER' });// Adds 1
//type is the one property you have to use like this, you can add any other properties you want to this object
store.dispatch({ type: 'ADD_COUNTER', value: 10 });// Passes a specific value 
console.log(store.getState());

