import { UserData } from "./api";
import { authService } from "./auth"


const email = authService.getUserEmail();
const getUserData = async () => {
    const res = await UserData(email)

    return res?.data;

} 
const getUsername = async () => {
    const res = await getUserData()
    return res?.name;
}
const getUserID = async () => {
    const res = await getUserData()
    return res?.id;
}

export const User = { getUsername, getUserData, getUserID }