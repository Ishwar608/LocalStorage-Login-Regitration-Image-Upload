import { createSlice } from '@reduxjs/toolkit'
import { myData } from '../../DataBase/DataBase';

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