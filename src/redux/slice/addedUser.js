import {createSlice} from '@reduxjs/toolkit';

export const addedUserSlice = createSlice({
  name: 'selectedUser',
  initialState: {
    selectedUser: '',
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {setSelectedUser} = addedUserSlice.actions;
export default addedUserSlice.reducer;
