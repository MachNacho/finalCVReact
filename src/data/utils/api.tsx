import axios from "axios";
import { Hobby } from "../Models/Hobby";

//Base URL for API
const BASE_URL: string = "https://localhost:44383";

// Create an axios instance to handle common configurations like base URL
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get data from the API
export const getData = async () => {
  try {
    const response: Hobby = await apiClient.get("/user");
    return response; // return the data from the response
  } catch (error) {
    throw error; // Re-throw the error for handling in the component
  }
};
