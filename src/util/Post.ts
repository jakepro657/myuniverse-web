import axios from "axios";



export const useGetPosts = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post`);

  return response.data;
};

export const useGetPost = async (i: number) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/${i}`);

  return response.data;
};

