import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

// Register a new user
// {
//     "name": "Adrian Cross",
//     "email": "across@mail.com",
//     "password": "examplepwd12345"
//   }
export const register = createAsyncThunk(
  'auth/register',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Log in an existing user
// {
//   "email": "string",
//   "password": "string"
// }
export const logIn = createAsyncThunk('auth/login', async () => {});

// Log out the current user
export const logOut = createAsyncThunk('auth/logout', async () => {});
