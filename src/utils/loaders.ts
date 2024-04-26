import axiosClient from "../api";

export async function homeLoader() {
  try {
    const response = await axiosClient.get("?results=20");
    // console.log(response?.data);
    return response?.data?.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}
