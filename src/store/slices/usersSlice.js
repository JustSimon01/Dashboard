import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from 'services/ApiService';

const initialState = {
  users: null,
  usersRequest: false,
  usersFailed: false,
  usersLoaded: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const userId = action.payload
      state.users = state.users.filter(item => item.id !== userId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.usersRequest = true;
        state.usersFailed = false;
        state.usersLoaded = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersRequest = false;
        state.usersFailed = false;
        state.users = action.payload;
        state.usersLoaded = true;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.usersRequest = false;
        state.usersFailed = true;
        state.usersLoaded = false;
      });
  },
});

export const {
  deleteUser,
  extraReducers
} = usersSlice.actions;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ({ url, method, data }, { rejectWithValue }) => {
  try {
    const response = await ApiService.fetchData({ url, method, data });
    return response;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Error');
  }
});

export default usersSlice.reducer;
