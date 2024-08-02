import axios from "axios";

export async function LoginService(email, password) {
    const body = {
        email, password
    }

    // to do
    const response = await axios.post('http://localhost:8080/users/login', body);

    return response;

}

export async function RegisterService(firstName, lastName, email, password, address, mobileNo) {
    const body =
    {
        name: firstName + " " + lastName,
        email, password, address, mobileNumber: mobileNo
    }

    console.log(body)

    // to do
    const response = await axios.post('http://localhost:8080/users/addUser', body)

    return response;

}