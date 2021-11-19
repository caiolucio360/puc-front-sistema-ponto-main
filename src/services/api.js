import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3333",
});

api.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
//api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default api;

// headers: {
//   "Access-Control-Allow-Headers":
//     "Origin, X-Requested-With, Content-Type, Accept",
// },
