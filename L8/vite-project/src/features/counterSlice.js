import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incriment: (state) => {
            state.value += 1;
            return state;
        },
        decriment: (state) => {
            state.value -= 1;
            return state
        },
        incrimentByInput: (state, action) => {
            state.value += action.payload;
            return state;
        }
    }
})

export const {
    incriment,
    decriment,
    incrimentByInput
} = counterSlice.actions

export default counterSlice.reducer