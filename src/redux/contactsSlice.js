import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './auth/operations';

import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const logOutClearStateReducer = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

const updateContactFulfilledReducer = (state, action) => {
  state.items = state.items.map(item => {
    if (item.id === action.payload.id) {
      item.name = action.payload.name;
      item.number = action.payload.number;
      return item;
    }
    return item;
  });
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    deletingContactId: null,
  },

  reducers: {
    setDeletingContactId: (state, action) => {
      state.deletingContactId = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, pendingReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(fetchContacts.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(deleteContact.rejected, rejectedReducer)
      .addCase(updateContact.fulfilled, updateContactFulfilledReducer)
      .addCase(logOut.fulfilled, logOutClearStateReducer),
});

export const { setDeletingContactId } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const selectDeletingContactId = state =>
  state.contacts.deletingContactId;
