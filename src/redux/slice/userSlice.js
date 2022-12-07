import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
export const getUser = createAsyncThunk('users/getUser', async () => {
  const res = await fetch('https://dummyjson.com/users').then(data =>
    data.json(),
  );
  return res;
});

const users = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getUser.fulfilled]: (state, {payload}) => {
      state.users = payload;
      state.status = 'success';
    },
    [getUser.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});
export default users.reducer;
