import axios from "axios";
import { ACCESS_TOKEN, ENV_BE, REFRESH_TOKEN } from "../constants/index";

// console.log(getToken);

axios.defaults.headers.common["Authorization"] = "token";
axios.defaults.baseURL = ENV_BE;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const getAPI = async ({
  path,
  params,
  query,
}: {
  path: string;
  params?: string;
  query?: string;
}) => {
  const getToken = localStorage.getItem(ACCESS_TOKEN);

  try {
    const response = await axios.get(`${path}`, {
      params,
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    return response;
  } catch (error: any) {
    console.log(error);

    // check token expired - kiem tra token het han => refresh lai acccess new.
    if (error && error.response && error.response.status === 401) {
      if (localStorage.getItem(REFRESH_TOKEN)) {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        const refreshTokenResponse = await postAPI({
          path: "auth/refresh-token",
          body: {
            refreshToken,
          },
        });
        localStorage.setItem(
          ACCESS_TOKEN,
          refreshTokenResponse.data.accessToken
        );
        return refreshTokenResponse;
      }
    }
    return error;
  }
};
// POST
export const postAPI = ({ path, body }: { path: string; body: any }) => {
  const getToken = localStorage.getItem(ACCESS_TOKEN);
  return axios.post(path, body, {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  });
};

export const putAPIProduct = (body: {
  id: number;
  productName: string;
  crrPrice: string;
  oldPrice: string;
  cate_id: number;
  slug: string;
  imgName: string;
}) => {
  return axios.put(`http://localhost:8080/products/${body.id}`, body);
  // .then((response) => {
  //   return response.status;
  // });
};
export const putAPIImagePrd = (body: {
  id: number;
  product_id: number;
  imgDetail: string;
}) => {
  return axios.put(`http://localhost:8080/product-images/${body.id}`, body);
  // .then((response) => {
  //   return response.status;
  // });
};

// DELETE

export const deleteAPIProduct = (body: {
  id: number;
  productName: string;
  crrPrice: string;
  oldPrice: string;
  cate_id: number;
  slug: string;
  imgName: string;
}) => {
  return axios.delete(`http://localhost:8080/products/${body.id}`);
};
export const deleteAPIProductIMG = (id: number) => {
  return axios.delete(`http://localhost:8080/product-images/${id}`);
};
