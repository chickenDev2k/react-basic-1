import axios from "./axios.customize";
const BASE_URL = await import.meta.env.VITE_BACKEND_URL;
const getAllBookAPI = async (current, pageSize) => {
    const token = localStorage.getItem("access_token");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const URL_BACKEND = `${BASE_URL}/api/v1/book?current=${current}&pageSize=${pageSize}`;
    const res = await axios.get(URL_BACKEND, config);
    console.log(res.data.result);
    return res.data.result;
};
export { getAllBookAPI };
