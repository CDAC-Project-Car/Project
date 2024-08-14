import axios from "axios";
import { toast } from "react-toastify";

export async function LoginService(email, password) {
  const body = {
    email,
    password,
  };

  try {
    const response = await axios.post(
      "http://localhost:8080/users/login",
      body
    );

    return response;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An error occurred during login";
    toast.error(errorMessage);
  }
}

export async function RegisterService(
  firstName,
  lastName,
  email,
  password,
  address,
  mobileNo,
  dob
) {
  const body = {
    userName: `${firstName} ${lastName}`,
    email,
    password,
    mobileNumber: mobileNo,
    dob,
    userAddress: address,
  };

  const response = await axios.post("http://localhost:8080/users/signup", body);

  return response;
}
