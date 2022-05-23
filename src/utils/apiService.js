import axios from "axios";

const URL = {
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
};
const ENDPOINT = {
  REGISTER: "accounts:signUp",
  LOGIN: "accounts:signInWithPassword",
};
const API_KEY = "AIzaSyCqS0eMp_B8vr9aIzvlZrk1wcjaQI0u3sE";

axios.defaults.baseURL = "http://localhost:4040";
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
export function registerUserApi(userData) {
  axios.defaults.baseURL = URL.AUTH;
  axios.defaults.params = { key: API_KEY };
  return axios
    .post(ENDPOINT.REGISTER, { ...userData, returnSecureToken: true })
    .then((res) => res.data);
}

export function getTransactionsApi(transType) {
  return axios.get(transType).then(({ data }) => data);
}

export function addTransactionApi(transaction) {
  const { transType } = transaction;
  return axios.post(transType, transaction).then(({ data }) => data);
}

export function removeTransactionApi({ transType, id }) {
  return axios.delete(transType + "/" + id);
}

export function addCategoryApi({ transType, category }) {
  return axios.post(transType + "Cats", category).then(({ data }) => data);
}

export function getCategoriesApi({ transType }) {
  return axios.get(transType + "Cats").then(({ data }) => data);
}
export function removeCategoriesApi({ transType, id }) {
  return axios.delete(transType + "Cats" + "/" + id);
}
