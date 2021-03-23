import axios from "axios";

import URL from "./URL";

const instance = axios.create({
  baseURL: URL,
});

export default instance;
