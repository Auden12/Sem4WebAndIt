import React from 'react';
import CounterUseReducer from './CounterUseReducer';
import CounterUseState from './CounterUseState';


const App = () => {
    return (
        <div className="ui segment">
            <CounterUseState />
            <br></br>
            <CounterUseReducer />
        </div>
    );
};

export default App;