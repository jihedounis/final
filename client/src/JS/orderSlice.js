import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const orderadd = createAsyncThunk(
  "order/add",
  async (order) => {
    try {
      let result = axios.post(
        "http://localhost:5000/order/add",
        order
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const orderget = createAsyncThunk("order/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/order/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const orderdelete = createAsyncThunk(
  "order/delete",
  async (id) => {
    try {
      let result = axios.delete(`http://localhost:5000/order/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const orderupdate = createAsyncThunk(
  "order/update",
  async ({ id, edit }) => {
    try {
      let response = await axios.put(
        `http://localhost:5000/order/${id}`,
        edit
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  order: null,
  status: null,
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [orderadd.pending]: (state) => {
      state.status = "pending";
    },
    [orderadd.fulfilled]: (state) => {
      state.status = "succcess";
    },
    [orderadd.rejected]: (state) => {
      state.status = "fail";
    },

    [orderget.pending]: (state) => {
      state.status = "pending";
    },
    [orderget.fulfilled]: (state, action) => {
      state.status = "success";
      state.order = action.payload.data.order;
    },
    [orderget.rejected]: (state) => {
      state.status = "fail";
    },
    [orderdelete.pending]: (state) => {
      state.status = "pending";
    },
    [orderdelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [orderdelete.rejected]: (state) => {
      state.status = "fail";
    },
    [orderupdate.pending]: (state) => {
      state.status = "pending";
    },
    [orderupdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [orderupdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default orderSlice.reducer;
