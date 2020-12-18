import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:800",
});

export default instance;
