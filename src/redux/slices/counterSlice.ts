import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@redux/store'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // state.value = state.value + 1
      state.value += 1
    },
    decrement: (state) => {
      // state.value = state.value - 1
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value = state.value + action.payload
      state.value += action.payload
    },
    reset: (state) => {
      state.value = initialState.value
    },
  },
})

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions

export const selectCount = (state: RootState) => state.counterState

export default counterSlice.reducer
