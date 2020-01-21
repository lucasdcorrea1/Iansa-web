import { authHeader, handleResponse, searchFilter } from "../helpers";
import axios from "axios";

export const axiosService = {
  get,
  post,
  put,
  auth,
  changePassword,
  newPassword,
  forgotPassword,
  login,
  logout,
  register
};

function get(url, params) {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    timeout: 10000
  };
  let urlRequest = process.env.VUE_APP_APIURL + url;
  return axios
    .get(searchFilter(urlRequest, params), requestOptions)
    .then(handleResponse);
}

function post(url, params) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    timeout: 10000
  };

  let urlRequest = process.env.VUE_APP_APIURL + url;
  let data = JSON.stringify(params);

  return axios.post(urlRequest, data, requestOptions).then(handleResponse);
}

function put(url, params) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    timeout: 10000
  };

  let urlRequest = process.env.VUE_APP_APIURL + url;
  let data = JSON.stringify(params);

  return axios.put(urlRequest, data, requestOptions).then(handleResponse);
}

async function auth(email, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    timeout: 20000
  };

  let data = JSON.stringify({ email: email, password: password });

  const response = await axios
    .post(process.env.VUE_APP_APIURL + "/auth/user", data, requestOptions)
    .then(response => handleResponse(response))
    .catch(error => {
      console.log("ERRORAUTH", error);
      return new Promise.reject(handleResponse(error));
    });

  return response;
}

async function login(email, password, id) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    timeout: 20000
  };

  let data = JSON.stringify({
    email: email,
    password: password,
    id_UserCompany: id
  });
  const response = await axios
    .post(
      process.env.VUE_APP_APIURL + `/auth/usercompany`,
      data,
      requestOptions
    )
    .then(response => handleResponse(response))
    .catch(error => {
      console.log("ERRORLOGIN", error);
      return new Promise.reject(handleResponse(error));
    });

  return response;
}

function changePassword(params) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" }
  };
  let data = JSON.stringify(params);

  return axios
    .put(
      process.env.VUE_APP_APIURL + "/user/password/confirm",
      data,
      requestOptions
    )
    .then(handleResponse);
}

function forgotPassword(params) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" }
  };

  let data = JSON.stringify({ email: params });

  return axios
    .put(process.env.VUE_APP_APIURL + `/user/forgot`, data, requestOptions)
    .then(handleResponse);
}

function newPassword(params) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  };

  let data = JSON.stringify(params);

  return axios
    .post(process.env.VUE_APP_APIURL + `/user/confirm`, data, requestOptions)
    .then(handleResponse);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  };

  let data = JSON.stringify(user);

  return axios
    .post(process.env.VUE_APP_APIURL + `/users/register`, data, requestOptions)
    .then(handleResponse);
}
