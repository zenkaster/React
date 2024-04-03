import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, incriment, incrimentByInput } from './features/counterSlice';

export default function App() {
  const counter = useSelector(state => state.counter.value)

  const dispatch = useDispatch();

  return (
    <div>
      {counter}
      <button onClick={() => dispatch(incrimentByInput(4))}>Incriment by input</button>
      <button onClick={() => dispatch(incriment())}>+</button>
      <button onClick={() => dispatch(decriment())}>-</button>
    </div>
  )
}
