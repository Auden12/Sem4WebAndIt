import { useReducer } from 'react';

//Bemærk når vi kalder dispatch(argument), vil argument blive overført som andet argument (action) i reduceren
//returværdien bliver den nye state, hvis der ikke returneres noget vil state blive undefined!
//Husk her,ingen async/await, eller request eller promises og heller ingen ydre variable.
const reducer = (state, action) => {
    if (action.type === 'INCREMENT'){return {count: state.count + 1};}
    if (action.type === 'DECREMENT'){return {count: state.count - 1};}
    return state;
};

const CounterUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    const increment = () => {dispatch({type: 'INCREMENT'});};
    const decrement = () => {dispatch({type: 'DECREMENT'});};

    return (
        <div>
            <h2>Counter with useReducer</h2>
            <button className="ui button primary" onClick={increment}>
                Increment
            </button>
            <button className="ui button primary" onClick={decrement}>
                Decrement  
            </button>
            Current count: <span>{state.count}</span>
        </div>
    );
};

export default CounterUseReducer;