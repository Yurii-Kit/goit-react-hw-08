import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      console.log('fetchContacts');
      const response = await axios.get('/contacts');
      return response.data; //це є payload, який буде передано в редюсер
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      console.log('deleteContact', contactId);
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data.id; // повертаємо id видаленого контакту
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data; // повертаємо новий контакт, який буде додано до стану
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      // повертаємо оновлений контакт, який буде замінено в стані
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
