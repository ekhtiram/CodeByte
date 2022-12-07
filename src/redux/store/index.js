import {configureStore} from '@reduxjs/toolkit';
import {getUser} from '../slice/userSlice';

const store = configureStore({
  reducer: {
    users: getUser,
    // selectedUser: SelectedUserSlice,
  },
});
export default store;
