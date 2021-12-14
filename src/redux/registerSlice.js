import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'register',
  initialState: {
    fname: '',
    lname: '',
    email: '',
    bday: '',
    address: '',
    zipcode: '',
    password: '',
    onboardingQA: {},
  },
  reducers: {
    setFname: (state, action) => {
      state.fname = action.payload;
    },
    setLname: (state, action) => {
      state.lname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setBday: (state, action) => {
      state.bday = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setZipcode: (state, action) => {
      state.zipcode = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setOnboarding: (state, action) => {
      state.onboardingQA = action.payload;
    },

    resetData: state => {
      state.fname = '';
      state.lname = '';
      state.email = '';
      state.bday = '';
      state.address = '';
      state.zipcode = '';
      state.password = '';
      state.onboardingQA = {};
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
