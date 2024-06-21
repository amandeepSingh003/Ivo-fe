import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import * as Yup from "yup"
import { useFormik } from "formik";
import { Validation } from "../../helpers/validationHelpers"
import InputError from "../../common/inputError";
import { forgotPassword, sendOtp } from "../../commonFunctions/authApiFunctions";
import { toast } from "react-toastify";
import OtpVerification from "./OtpVerification";
import CreateNewPassword from "./CreateNewPassword";

const ForgotPassword = () => {
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [email, setEmail] = useState("")
    const [otpVerified, setOtpVerified] = useState(false)
    const [otp, setOtp] = useState("")

    const ForgotPasswordForm = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: "",
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .required("Provide your email address.")
                .matches(Validation.email, "Please input a valid email address."),
        }),

        onSubmit: async (values) => {
            let data = new URLSearchParams({
                email: values?.email
            })
            try{
                const result = await sendOtp("forgot",data)
                if(result){
                    toast.success(result?.data?.message)
                    setEmail(values?.email)
                    setIsOtpSent(true)
                }
            }catch(error){
                toast.error(error?.data?.error)
            }

            //   setSpinner(true)
            //   setAction(true)
            //   dispatch(loginUser(values, props.history, "mainlogin", invoiceId))
        },
    })

    return (
        <>
            {!isOtpSent? <AuthLayout title="Forgot password?">
                <form
                    className="form-body row g-3"
                    onSubmit={e => {
                        e.preventDefault()
                        ForgotPasswordForm.handleSubmit()
                        return false
                    }}
                >
                    <div className="col-12">
                        <label
                            htmlFor="inputEmail"
                            className="form-label fw-medium text-dark-color"
                        >
                            Email Address
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="form-control p-2"
                            id="inputEmail"
                            onChange={ForgotPasswordForm.handleChange}
                            onBlur={ForgotPasswordForm.handleBlur}
                            value={ForgotPasswordForm.values.email}
                            invalid={
                                ForgotPasswordForm.touched.email && ForgotPasswordForm.errors.email
                                    ? "true"
                                    : "false"
                            }
                        />
                        {ForgotPasswordForm.touched.email && ForgotPasswordForm.errors.email ? (
                            <InputError error={ForgotPasswordForm?.errors?.email} />
                        ) : null}
                    </div>
                    <div className="col-12 col-lg-12">

                        <div className="d-grid ">
                            <button
                                type="submit"
                                className="btn bg-main text-white p-2"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 text-center">
                        <Link className="text-main " to="/login">
                            Back to login
                            <p />
                        </Link>
                    </div>
                </form>
            </AuthLayout> : !otpVerified?
            <OtpVerification 
                email={email} 
                action={"forgot"} 
                otpVerified={otpVerified} 
                setOtpVerified={setOtpVerified}
                otp={otp} 
                setOtp={setOtp}
            />
            : <CreateNewPassword email={email} otp={otp}/>
            }
        </>
    )
}

export default ForgotPassword;