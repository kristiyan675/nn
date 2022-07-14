// import { createStore } from 'redux'

import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }
const initialAuthState = { isAuthenticated: false }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        increase(state, action) { state.counter = state.counter + action.payload },
        toggleCounter(state) { state.showCounter = !state.showCounter }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) { state.isAuthenticated = true },
        logout(state) { state.isAuthenticated = false }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions

export default store;

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.payload,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }


// const store = createStore(counterReducer);
