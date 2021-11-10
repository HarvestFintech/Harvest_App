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
    logIn: (state, action) => {
      console.log('login request start');

      //   axios
      //     .post('https://192.168.1.17:7070/auth/login', action.payload)
      //     .then(res => console.log(res))
      //     .catch(err => console.log(err));

      fetch('https://localhost:7070/auth/login')
        .then(response => response.json())
        .then(json => {
          console.log('json.movies');
        })
        .catch(error => {
          console.error(error);
        });

      state.token = action.payload;
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
export const {logIn, logOut} = userSlice.actions;

// export const addThunk =
//   (step = 1) =>
//   async dispatch => {
//     setTimeout(() => {
//       console.log('SS: addAsync called...');
//       dispatch(debugAdd(step));
//     }, 2000);
//   };

export default userSlice.reducer;
