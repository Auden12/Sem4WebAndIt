import React from 'react';
import CounterUseState from './components/CounterUseState';
import StepUseStatePrev from './components/StepUseStatePrev';
import ThemeToggleUseState from './components/ThemeToggleUseState';
import SimpleFormUseState from './components/SimpleFormUseState';
import ToDoStoringArraysUseState from './components/ToDoStoringArraysUseState';
import ManagingObjectsUseState from './components/ManagingObjectsUseState';
import BasicUseEffect from './components/BasicUseEffect';
import ClearSideEffectUseEffect from './components/ClearSideEffectUseEffect';
import StateChangeUseEffect from './components/StateChangeUseEffect';
import PropsDrillingUseContext from './components/PropsDrillingUseContext';
import IntroUseContext from './components/IntroUseContext';
import ShoppingChartUseContext from './components/ShoppingChartUseContext';



function App() {
  

  return ( 
    <div className="App">   
            <CounterUseState />
            <StepUseStatePrev />
            <ThemeToggleUseState />
            <SimpleFormUseState />
            <ToDoStoringArraysUseState />
            <ManagingObjectsUseState />
         {/*<BasicUseEffect /> */}
            <ClearSideEffectUseEffect />
            <StateChangeUseEffect />
            <PropsDrillingUseContext />
            <IntroUseContext />
            <ShoppingChartUseContext />
        </div>
   )
}

export default App
