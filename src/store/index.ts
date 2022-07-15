// import { createStore } from 'redux'

import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    counter: number,
    showCounter: boolean
}

interface AuthState {
    isAuthenticated: boolean
}

const initialCounterState: CounterState = { counter: 0, showCounter: true }
const initialAuthState: AuthState = { isAuthenticated: false }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        increase(state, action: PayloadAction<number>) { state.counter = state.counter + action.payload },
        toggleCounter(state) { state.showCounter = !state.showCounter }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) { 
            state.isAuthenticated = true
        },
        logout(state) { 
            state.isAuthenticated = false 
        }
    }
})

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


// export default store;
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
