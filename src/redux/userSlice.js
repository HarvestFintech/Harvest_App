import {createSlice} from '@reduxjs/toolkit';

import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: null,
    userData: {},
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logIn: async (state, action) => {
      console.log('login request start');
      let res = await axios
        .post('http://localhost:7070/auth/login', action.payload, {});

      if (res.data.status === 200) {
        console.log(res.data.payload.token);
        state.token = res.data.payload.token;
      } else {
        // silent error
      }

      state.isLoggedIn = true;
      state.userData = {};

      console.log('login request end');
    },
    logOut: state => {
      state.token = null;
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
});

// ACTIONS EXPORT
export const {logIn, logOut, updateToken} = userSlice.actions;

// export const addThunk =
//   (step = 1) =>
//   async dispatch => {
//     setTimeout(() => {
//       console.log('SS: addAsync called...');
//       dispatch(debugAdd(step));
//     }, 2000);
//   };

export default userSlice.reducer;
