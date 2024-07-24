import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await
    axios.get(`${USERS_API}?role=${role}`); //encode role in query string of URL
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`); //encode name in query string of URL
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`); // encode user id
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete( `${USERS_API}/${userId}` );
  return response.data;
};


