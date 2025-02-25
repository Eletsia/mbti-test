import instance from "./instance";

export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await instance.post("/login?expiresIn=15m", userData);
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
};

export const getUserProfile = async (userData) => {
  const response = await instance.get("/user", userData);
  return response.data;
};

export const getOtherUserProfile = async (userData) => {
  const response = await instance.get("/user?user_id=${userData.id}", userData);
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await instance.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
