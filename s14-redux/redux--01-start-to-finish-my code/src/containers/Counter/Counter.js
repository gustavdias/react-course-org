import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions"; //actionType now is a javascript object which has all the consts from actions.js as properties

class Counter extends Component {
  //   Since you are using Redux, you can remove the state:

  //   state = {
  //     counter: 0,
  //   };

  //   Since you are using Redux, you can remove the counterChangedHandler:
  //   counterChangedHandler = (action, value) => {
  //     switch (action) {
  //       case "inc":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter + 1 };
  //         });
  //         break;
  //       case "dec":
  //         this.setState((prevState) => {15
  //         break;
  //       case "add":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter + value };
  //         });
  //         break;
  //       case "sub":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter - value };
  //         });
  //         break;
  //     }
  //   };

  render() {
    return (
      <div>
        {/* <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHandler("inc")}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler("sub", 5)}
        /> */}

        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        {/* When you click STORE_RESULT, that I simply add the current counter value to my result list 
                and push this result to the result array in reducer.js*/}
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
            //{()=>this.props.onDeleteResult(strResult.id)} You can add parentheses here because this will now not be executed at the point of time this component renders because it's mapped or wrapped inside this anonymous function.
          ))}
        </ul>
      </div>
    );
  }
}
//How to pass the actions we want to dispatch and the state we want to get.
//You do before the export
//You store instructions about how the state managed by redux should be mapped to props you can use in this container
//it actually stores a function which expects the state stored in redux as the input and returns a javascript object which is a map of prop names and slices of the state stored in redux.
const mapStateToProps = (state) => {
  //this state here again, will be given to you by react-redux which of course will reach out to your redux state which of course in turn is the state you set up in reducer.js that has a counter property
  return {
    //give me the value of the counter in our global state managed by redux and give it to me in the form of a property name ctr which I then can use in here.
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};
//here you'll say which kind of actions do I want to dispatch in this container.
const mapDispatchToProps = (dispatch) => {
  //We then here also return a javascript object where we can define some prop names which will hold a reference to a function which should eventually get executed to dispatch an action.
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }), // you dispatch a JS object
    // onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),

    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),

    // onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),

    onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
    // onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),

    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 15 }),
    // onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),

    // Add two new props to mapDispatchToProps because I need two new functions basically, two new dispatch functions.
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    //Now this is something I don't need to pass as a payload though because since the counter is part of my application state, I will have access to it in my reducer anyways later, so I don't need to pass it here as payload.
  };
};
// If you don't have any actions, you don't pass mapDispatchToProps. just leave it empty
// you just want to pass a action, but you don't need access to the state, you pass connect(null, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//Connect then gives us this container with access to this ctr, our property. This now allows us to output the ctr property.
