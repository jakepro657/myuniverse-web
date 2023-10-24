import axios from "axios";

export const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

export const useGetUser = async () => {
  try {
    const url = `/auth/login/success`;
    const { data } = await axios.get(url, { withCredentials: true });
    // console.log(data.user._json)
    return data.user._json;
  } catch (err) {
    console.log(err);
  }
};
