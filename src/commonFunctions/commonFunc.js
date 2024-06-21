import { SECRETEKEYS } from "../helpers/secreteKeys";

export const maskEmail = (email) => {
    let splitedEmail = email.split('@');
    return `${splitedEmail[0].charAt(0)}****@${splitedEmail[1]}`
}

export const storeUserData = (data) => {
    if(data){
        localStorage.setItem(SECRETEKEYS?.AUTHUSER, data)
    }
}

export const storeUserTokens = (tokens) => {
    if(tokens){
        localStorage.setItem(SECRETEKEYS?.AUTHTOKEN, tokens)
    }
}
