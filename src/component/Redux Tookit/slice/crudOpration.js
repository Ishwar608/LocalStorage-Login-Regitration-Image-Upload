import { createSlice } from '@reduxjs/toolkit'
import { myData } from '../../DataBase/DataBase';

const initialState = {
  notes: [...myData]
};

const crudOpration = createSlice({
  name: 'opretion',
  initialState,
  reducers: {
    addStuData: (state, action) => {
      state.notes.push(action.payload);
    },
    dltStuData: (state, action) => {
      state.notes.splice(action.payload,1);
    },
    edtStuData: (state, action) => {
      state.notes=action.payload;
    },

  }
});

export const {addStuData ,dltStuData,edtStuData} = crudOpration.actions

export default crudOpration.reducer