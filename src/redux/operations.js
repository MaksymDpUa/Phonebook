import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setDeletingContactId } from './contactsSlice';

// axios.defaults.baseURL = 'https://64cba2232eafdcdc85191a46.mockapi.io';
// https://connections-api.herokuapp.com
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    dispatch(setDeletingContactId(contactId));
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      dispatch(setDeletingContactId(null));
      return response.data;
    } catch (e) {
      dispatch(setDeletingContactId(null));
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, thunkAPI) => {
     try {
      const response = await axios.patch(`/contacts/${contact.id}`, contact.user);
      return response.data;
    } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
