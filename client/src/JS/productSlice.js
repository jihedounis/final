import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const productadd = createAsyncThunk("product/add", async (product) => {
  try {
    let result = axios.post("http://localhost:5000/product/add", product);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const productget = createAsyncThunk("product/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/product/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const productdelete = createAsyncThunk("product/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/product/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const productupdate = createAsyncThunk(
  "product/update",
  async ({ id, product }) => {
    try {
      let response = await axios.put(`http://localhost:5000/product/${id}`, product);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);



const initialState = {
    product: null,
  status: null,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [productadd.pending]: (state) => {
      state.status = "pending";
    },
    [productadd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [productadd.rejected]: (state) => {
      state.status = "fail";
    },

    [productget.pending]: (state) => {
      state.status = "pending";
    },
    [productget.fulfilled]: (state, action) => {
      state.status = "success";
      state.product = action.payload.data.product;
    },
    [productget.rejected]: (state) => {
      state.status = "fail";
    },
    [productdelete.pending]: (state) => {
      state.status = "pending";
    },
    [productdelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [productdelete.rejected]: (state) => {
      state.status = "fail";
    },
    [   productupdate.pending]: (state) => {
      state.status = "pending";
    },
    [   productupdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [   productupdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default productSlice.reducer;