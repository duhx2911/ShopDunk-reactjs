import axios from "axios";
import {
  deleteAPIProduct,
  deleteAPIProductIMG,
  postAPI,
  putAPIImagePrd,
  putAPIProduct,
} from "../../api";
import { AppDispatch } from "../";
import { getAPI } from "./../../api/index";

const startCountAction =
  (value: number, isIncre: boolean) => (dispatch: AppDispatch) => {
    // xu ly du lieu dau vao
    // dieu kien (condition)
    // call api
    if (isIncre) {
      console.log("check action increment");
      return dispatch({
        type: "increment",
        state: value,
      });
    }
    console.log("check action decrement");
    return dispatch({
      type: "decrement",
      state: value,
    });

    // call api
    // check status tra ve cua api
    // su dung dispatch de push vao trong reducer
  };
// PRODUCT
const getProduct = (id: number) => async (dispatch: AppDispatch) => {
  dispatch({
    type: "SHOW_LOADING",
  });
  const response = await axios.get(`http://localhost:8080/products/${id}`);
  if (response.status) {
    dispatch({
      type: "SAVE_PRODUCTS",
      products: response.data.data || [],
    });
  }

  dispatch({
    type: "HIDE_LOADING",
  });
};

const getListProduct = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: "SHOW_LOADING",
  });
  const response = await getAPI({ path: "/products" });
  if (response.status) {
    dispatch({
      type: "SAVE_PRODUCTS",
      products: response.data.data || [],
    });
  } else {
    dispatch({
      type: "HIDE_LOADING",
    });
  }
};

const createProduct =
  (body: any, callback: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING",
    });
    const response = await postAPI({
      path: "/products",
      body,
    });
    // console.log("test", response.data);
    if (response.status === 200) {
      if (response.data.status === "success") {
        if (response.data)
          dispatch({
            type: "SAVE_LIST_PRODUCTS",
            product: response.data.data || [],
          });

        // console.log("test", response.data);
      }
    }
    if (callback) {
      callback(response.data.status);
    }
    dispatch({
      type: "HIDE_LOADING",
    });
  };
const updateProduct =
  (body: any, callback: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING",
    });
    const response = await putAPIProduct(body);
    if (response.status === 200) {
      if (response.data.status === "success") {
        if (response.data)
          dispatch({
            type: "UPDATE_LIST_PRODUCTS",
            product: response.data.data || [],
          });
      }
    }
    if (callback) {
      callback(response.data.status);
    }
    dispatch({
      type: "HIDE_LOADING",
    });
  };
const delProduct =
  (body: any, callback: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING",
    });
    const response = await deleteAPIProduct(body);

    if (response.status) {
      if (response.data.status === "success") {
        if (response.data)
          dispatch({
            type: "DELETE_PRODUCT",
            id: response.data.data || [],
          });
      }
    }
    if (callback) {
      callback(response.data.status);
    }
    dispatch({
      type: "HIDE_LOADING",
    });
  };
const INCREA_COUNT = (value: number) => ({
  type: "increment",
  state: value,
});

const DECRE_COUNT = (value: number) => ({
  type: "decrement",
  state: value,
});

// CATEGORY
const getCategory = (id: number) => async (dispatch: AppDispatch) => {
  dispatch({
    type: "SHOW_LOADING_CATE",
  });
  const response = await axios.get(`http://localhost:8080/categories/${id}`);
  if (response.status) {
    dispatch({
      type: "SAVE_CATEGORIES",
      categories: response.data.data || [],
    });
  }

  dispatch({
    type: "HIDE_LOADING_CATE",
  });
};

const getListCategory = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: "SHOW_LOADING",
  });
  const response = await axios.get("http://localhost:8080/categories");
  if (response.status) {
    dispatch({
      type: "SAVE_CATEGORIES",
      categories: response.data.data || [],
    });
  } else {
    dispatch({
      type: "HIDE_LOADING",
    });
  }
};
// IMAGE PRODUCT
const getListImagePrd = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: "SHOW_LOADING_IMG",
  });
  const response = await axios.get("http://localhost:8080/product-images");
  if (response.status) {
    dispatch({
      type: "SAVE_IMAGES",
      images: response.data.data || [],
    });
  } else {
    dispatch({
      type: "HIDE_LOADING_IMG",
    });
  }
};
const createImageProduct =
  (body: any, callback: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING_IMG",
    });
    const response = await postAPI({
      path: "http://localhost:8080/product-images",
      body,
    });
    // console.log("test", response.data);
    if (response.status === 200) {
      if (response.data.status === "success") {
        if (response.data)
          dispatch({
            type: "SAVE_LIST_IMAGES",
            image: response.data.data || [],
          });
        // console.log("test", response.data);
      }
    }
    if (callback) {
      callback(response.data.status);
    }
    dispatch({
      type: "HIDE_LOADING_IMG",
    });
  };
const updateImageProduct =
  (body: any, callback: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING_IMG",
    });
    const response = await putAPIImagePrd(body);
    if (response.status === 200) {
      if (response.data.status === "success") {
        if (response.data)
          dispatch({
            type: "UPDATE_LIST_IMAGES",
            image: response.data.data || [],
          });
      }
    }
    if (callback) {
      callback(response.data.status);
    }
    dispatch({
      type: "HIDE_LOADING_IMG",
    });
  };
const delImageProduct =
  (id: number, callback: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING_IMG",
    });
    const response = await deleteAPIProductIMG(id);
    if (response.status) {
      if (response.data.status === "success") {
        if (response.data)
          dispatch({
            type: "DELETE_IMAGE",
            id: response.data.data || [],
          });
      }
    }
    if (callback) {
      callback(response.data.status);
    }
    dispatch({
      type: "HIDE_LOADING",
    });
  };
export {
  INCREA_COUNT,
  DECRE_COUNT,
  startCountAction,
  getProduct,
  getListProduct,
  createProduct,
  updateProduct,
  delProduct,
  getCategory,
  getListCategory,
  getListImagePrd,
  createImageProduct,
  updateImageProduct,
  delImageProduct,
};
