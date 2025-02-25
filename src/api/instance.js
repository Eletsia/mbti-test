import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (instance) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      instance.headers.Authorization = `Bearer ${accessToken}`;
    }
    return instance;
  },
  (error) => {
    console.error("요청 인터셉터 오류", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.error("응답 인터셉터 오류", error.response.data.message);
    if (error.response?.status === 401) {
      alert(error.response.data.message);
      localStorage.removeItem("accessToken");
      return Promise.reject(error);
    }
  }
);

export default instance;
