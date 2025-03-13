import { createSlice} from '@reduxjs/toolkit'
import { store } from './store';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state, actions) =>{
      return state.value = state.value + actions.payload
    },
    decrement: (state) => {
      return state.value -= 1
    }
  }
});
const { increment } = counterSlice.actions;


const result = store.dispatch(increment(2))
console.log(result);