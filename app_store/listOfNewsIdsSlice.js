import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl =
  "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty";

const listOfNewsIdsSlice = createSlice({
  name: "listOfNewsIds",
  initialState: {
    listOfNewsIds: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListOfNewsIds.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListOfNewsIds.fulfilled, (state, action) => {
      state.listOfNewsIds = action.payload;
      state.loading = false;
    });
    builder.addCase(getListOfNewsIds.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setListOfNewsIds } = listOfNewsIdsSlice.actions;
export default listOfNewsIdsSlice.reducer;

export const getListOfNewsIds = createAsyncThunk(
  "listOfNewsIds/getListOfNewsIds",
  async () => {
    const response = await axios.get(baseUrl);
    // console.log("Loading get list of news ids -> ", `${response.data}`);
    return response.data;
  }
);
