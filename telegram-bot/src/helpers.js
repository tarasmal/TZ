import {createUser} from "./api.js";

export const onStartCreateUser = async (ctx, {id, first_name, username}) => {
    await createUser(id, first_name, username);
}
