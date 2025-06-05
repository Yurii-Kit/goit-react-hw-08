import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }),
});

export default slice.reducer;
