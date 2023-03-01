import { configureStore } from '@reduxjs/toolkit';
import crudOpration from '../slice/crudOpration';
import regiOpration from '../slice/regiOpration';

const store = configureStore({
    reducer:{
        crudData : crudOpration,
        regi : regiOpration
    }
});

export default store;