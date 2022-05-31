import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: {},
  },
  reducers: {
    setUser(state, action) {
      state.users = action.payload;
    },
    logOutUser(state, action) {
      state.users = action.payload;
    },
  },
});

export default usersSlice.reducer;
export const setUser = usersSlice.actions.setUser;
export const logOutUser = usersSlice.actions.logOutUser;
