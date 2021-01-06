import React, { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === "buttonClick") {
    return { ...state, count: state.count + 1 }
  }
  if (action.type === "setUserName") {
    return { ...state, userName: action.payload.userName }
  }
  return state;
}
let AppUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, userName: "" })
  return (
    <div>
      <button onClick={() => {
        dispatch({ type: "buttonClick" })
      }}>Click here</button>
      <h3>Count is: {state.count}</h3>
      <hr />

      <input type="text" name="userName" onChange={(e) => {
        dispatch({ type: "setUserName",  payload: { userName: e.target.value } })
      }} />

      <h3>Username: {state.userName}</h3>
    </div>
  )
}

export default AppUseReducer
