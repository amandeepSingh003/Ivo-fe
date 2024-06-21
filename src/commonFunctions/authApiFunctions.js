import * as url from "../helpers/apiEndPoints"
import { post } from "../helpers/axiosHelpers"

const login = async(data) =>{
    return await post(url.LOGIN, data)
}

const register = async(data) =>{
    return await post(url.REGISTER, data)
}

const forgotPassword = async(data) => {
    return await post(url.FORGOT_PASSWORD, data)
}

const otpVerification = async(data) => {
    return await post(url.OTP_VERIFICATION, data)
}

const sendOtp = async(action, data) => {
    return await post(url.SEND_OTP + `${action}/`, data)
}

const createNewPassword = async(data) => {
    return await post(url.CREATE_NEW_PASSWORD, data)
    
}

export { login, register, forgotPassword, otpVerification, sendOtp, createNewPassword }