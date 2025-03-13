
import { createSlice, configureStore} from '@reduxjs/toolkit'

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
 const store = configureStore({
    reducer: counterSlice.reducer
})

const result = store.dispatch(increment(2))
console.log(result);