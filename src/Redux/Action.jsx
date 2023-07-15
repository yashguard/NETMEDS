import { add_email, add_password } from "./ActionType"

export const addEmail = (email) => {
    return { type: add_email, email }
}

export const addPassword = (password) => {
    return {type : add_password, password}
}