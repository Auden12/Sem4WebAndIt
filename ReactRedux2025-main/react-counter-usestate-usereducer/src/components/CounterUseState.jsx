import { useState } from 'react';

const CounterUseState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {setCount(count + 1);};
    const decrement = () => {setCount(count - 1);};

    return (
        <div>
            <h2>Counter with useState</h2>
            <button className="ui button primary" onClick={increment}>
                Increment
            </button>
            <button className="ui button primary" onClick={decrement}>
                Decrement  
            </button>
            Current count: <span>{count}</span>
        </div>
    );
};


export default CounterUseState;