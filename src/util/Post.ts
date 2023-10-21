import axios from "axios";



export const useGetPosts = async () => {
  const response = await axios.get("http://localhost:8000/post");

  return response.data;
};

export const useGetPost = async (i: number) => {
  const response = await axios.get(`http://localhost:8000/post/${i}`);

  return response.data;
};

