import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from 'services/ApiService';

const initialState = {
  id: null,
  name: null,
  username: null,
  email: null,
  address: {
    street: null,
    suite: null,
    city: null,
    zipcode: null,
    geo: {
      lat: null,
      lng: null
    }
  },
  phone: null,
  website: null,
  company: {
    name: null,
    catchPhrase: null,
    bs: null
  }
};

const userInfoSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const {
        id,
        name,
        username,
        email,
        address: { street, suite, city, zipcode, geo: { lat, lng } },
        phone,
        website,
        company: { name: companyName, catchPhrase, bs },
      } = action.payload;

      state.id = id;
      state.name = name;
      state.username = username;
      state.email = email;
      state.address.street = street;
      state.address.suite = suite;
      state.address.city = city;
      state.address.zipcode = zipcode;
      state.address.geo.lat = lat;
      state.address.geo.lng = lng;
      state.phone = phone;
      state.website = website;
      state.company.name = companyName;
      state.company.catchPhrase = catchPhrase;
      state.company.bs = bs;
    },
    clearUserInfo: (state) => {
      Object.assign(state, initialState);
    }
  },
});

export const {
  setUserInfo,
  clearUserInfo
} = userInfoSlice.actions;

export const patchUserData = createAsyncThunk('users/fetchUsers', async ({ url, method, data }, { rejectWithValue }) => {
  try {
    const response = await ApiService.fetchData({ url, method, data });
    return response;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Error');
  }
});

export default userInfoSlice.reducer;
