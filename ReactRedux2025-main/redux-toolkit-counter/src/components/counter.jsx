import React from 'react';
import {useSelector,  useDispatch } from 'react-redux';
import {decrement, increment, selectCount } from './counterSlice';

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>  
      <h2>Redux-Toolkit Counter:</h2>   
        <button className="ui button primary" onClick={() => dispatch(increment())}>
            Increment
        </button>
        <button className="ui button primary" onClick={() => dispatch(decrement())}>
            Decrement
        </button>
        Current count: <span>{count}</span>     
    </div>
  );
}