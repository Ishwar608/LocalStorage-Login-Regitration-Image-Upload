import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: []
};

const regiOpration = createSlice({
  name: 'opretion',
  initialState,
  reducers: {
    singUp: (state, action) => {
      state.data.push(action.payload);
    },
    
  }
});

export const {singUp} = regiOpration.actions

export default regiOpration.reducer