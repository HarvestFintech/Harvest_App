import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './AppSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
