import * as actionTypes from './actions' //actionType now is a javascript object which has all the consts from actions.js as properties  

const initialState = {
  counter: 0,
  results: [],
};

//The reducer is just a function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      //   const newState = Object.assign({}, state);
      //   newState.counter = state.counter + 1;
      return {
        // newState,
        ...state, // distributing the old state, we're overwriting counter, we're not touching results.
        counter: state.counter + 1,
      };
      case actionTypes.DECREMENT:
      return {
        ...state, // distributing the old state, we're overwriting counter, we're not touching results.
        counter: state.counter - 1,
      };
      case actionTypes.SUBTRACT:
      return {
        ...state, // distributing the old state, we're overwriting counter, we're not touching results.

        counter: state.counter - action.val,
      };
      case actionTypes.ADD:
      return {
        ...state, // distributing the old state, we're overwriting counter, we're not touching results.

        counter: state.counter + action.val,
      };
      case actionTypes.STORE_RESULT:
      return {
        ...state, // distributing the old state, we're overwriting counter, we're not touching results.
        results: state.results.concat({ id: new Date(), value: state.counter }), //simply is like push but where push manipulates the original value, concat returns a new array which is the older array plus the argument you add to concat.
      };
      case actionTypes.DELETE_RESULT:
      //1st way of doing it, with spread operator:
      //   const id = 2;
      //   const newArray = [...state.results]
      //   state.results.splice(id, 1) //important if the elements in state results were objects as they actually are, the objects themselves are still pointing to the same objects they did before.
      //if you just plan on removing an object though, that is okay because you won't touch the object, you just remove it from the array, that's a difference.
      // newArray.results.splice(id, 1)
      //2nd way with filter method
      //return true for every element which doesn't have a certain ID or which is not at a certain index
      //!const updateArray = state.results.filter((result, index) => index!== id);//when is true it includes the element in the new array
      //since this function here is executed on each element, we don't need to get information about which index this element is at,
      const updateArray = state.results.filter(
        (result) => result.id !== action.resultElId
      ); //this is a payload of this action
      //filter returns a new array, doesn't touch the old one, returns a new one. Filter takes a function as an input, the function is executed on each element in the array, it determines whether this element fulfils a certain condition to make it into the new array which is returned by filter or not.

      return {
        ...state, // distributing the old state, we're overwriting counter, we're not touching results.
        // results: newArray.results.concat({
        results: updateArray,
      };
    default:
      return state;
  }
  //   if (action.type === "INCREMENT") {
  //     return {
  //       counter: state.counter + 1,
  //     };
  //   }
  // Decrement
  //   if (action.type === "DECREMENT") {
  //     return {
  //       counter: state.counter - 1,
  //     };
  //   }
  // Subtract
  //   if (action.type === "SUBTRACT") {
  //     return {
  //       counter: state.counter - action.val,
  // counter: state.counter -5
  //     };
  //   }
  // Add
  //   if (action.type === "ADD") {
  //     return {
  //       counter: state.counter + action.val,
  //     };
  //   }

  //   return state;
};

export default reducer;
