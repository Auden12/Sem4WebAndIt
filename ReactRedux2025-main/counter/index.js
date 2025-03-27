//Action creators
const increment = () => ({ type: 'INCREMENT'}); //increment action - without payload
const decrement = () => ({ type: 'DECREMENT'}); //decrement action - without payload



//Reducers
const countReducer = (count=0, action) => {
    if (action.type === 'INCREMENT') { return count + 1; }
    if (action.type === 'DECREMENT') { return count - 1; }
    return count;
};


//Store
const store = Redux.createStore(countReducer);


//update html
function render(){
   document.getElementById("value").innerHTML = store.getState();
}

//Subscribe på ændringer, dvs callback-funktionen render() kaldes når store opdateres
store.subscribe(render);

