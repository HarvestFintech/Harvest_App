import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: '',
    userData: {},
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
    logIn: state => {
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.token = '';
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
});

// ACTIONS EXPORT
export const {logIn, logOut, updateToken, updateUserData} = userSlice.actions;

// export const addThunk =
//   (step = 1) =>
//   async dispatch => {
//     setTimeout(() => {
//       console.log('SS: addAsync called...');
//       dispatch(debugAdd(step));
//     }, 2000);
//   };

export default userSlice.reducer;
