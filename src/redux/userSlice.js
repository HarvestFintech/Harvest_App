import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.token = null;
      state.isLoggedIn = false;
    },
    toggleLog: state => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    // debugAdd: ({value, payload}) => {
    //   value += payload;
    // },
  },
});

// ACTIONS EXPORT
export const {logIn, logOut, toggleLog} = userSlice.actions;

// export const addThunk =
//   (step = 1) =>
//   async dispatch => {
//     setTimeout(() => {
//       console.log('SS: addAsync called...');
//       dispatch(debugAdd(step));
//     }, 2000);
//   };

export default userSlice.reducer;
