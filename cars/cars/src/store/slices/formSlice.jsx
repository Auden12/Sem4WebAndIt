import {createSlice} from '@reduxjs/toolkit';
const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers:{
        changeName(state, action){
            state.name = action.payload;
        },
        changeCost(state, action){
            state.cost = action.payload;
            
        },
        extraReducers(builder){
            builder.addCase(addCar, (state, action) => {
                state.name = '';
                state.cost = 0;
            });
        }
    }
    
})
export const {changeName, changeCost} = formSlice.actions; //"mini-reducer-functions" - action creators
export const formReducer = formSlice.reducer;  //combined reducer