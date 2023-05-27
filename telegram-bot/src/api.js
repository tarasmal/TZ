import dotenv from "dotenv";
import axios from "axios";

dotenv.config()
export const userApi = `${process.env.BASE_URL}/user`
export const createUser = async (id, first_name, username) => {
    await axios.put(userApi, {id, username, name: first_name})
}
