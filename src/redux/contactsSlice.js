import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://65ad7bfcadbd5aa31be0dca3.mockapi.io/phonebook/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await axios.delete(`${API_URL}/${contactId}`);
  return contactId;
});

const initialState = {
  entities: [],
  loading: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.entities = state.entities.filter((contact) => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
