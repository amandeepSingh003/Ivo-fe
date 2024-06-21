import React, { useState } from "react"
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import * as Yup from "yup"
import { useFormik } from "formik";
import { Validation } from "../../helpers/validationHelpers";
import InputError from "../../common/inputError";
import { register } from "../../commonFunctions/authApiFunctions"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import OtpVerification from "./OtpVerification";

const Register = () => {
    const navigate = useNavigate()
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")

    const RegisterForm = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            termConditions: false,
        },
        validationSchema: () => {
            let schema = Yup.object().shape({
                email: Yup.string()
                    .required("Provide your email address.")
                    .matches(Validation.email, "Please input a valid email address."),
                firstName: Yup.string()
                    .required("Enter your first name.")
                    .matches(Validation.userName, "Please input only alphabetic characters.")
                    .matches(Validation.spaces, "No spaces allowed.")
                    .min(3, "The first name should be at least 3 characters long.")
                    .max(15, "The first name must not exceed 15 characters."),
                lastName: Yup.string()
                    .required("Enter your last name.")
                    .matches(Validation.userName, "Please input only alphabetic characters.")
                    .matches(Validation.spaces, "No spaces allowed.")
                    .min(3, "The last name should be at least 3 characters long.")
                    .max(15, "The last name must not exceed 15 characters."),
                password: Yup.string()
                    .required("Provide your password.")
                    .min(8, "The password must be a minimum of 8 characters.")
                    .max(30, "The password should not exceed 30 characters.")
                    .matches(
                        Validation.password,
                        "Your password must include at least one uppercase letter, one lowercase letter, one digit, and one special character."
                    ),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password')], "Password must match"),
                termConditions: Yup.bool().oneOf(
                    [true],
                    "Please agree to the terms and conditions."
                ),
            })
            return schema
        },
        onSubmit: async (values) => {
            let data = new URLSearchParams({
                first_name: values?.firstName,
                last_name: values?.lastName,
                password: values?.password,
                confirm_password: values?.confirmPassword,
                email: values?.email
            })
            try {
                const result = await register(data)
                if(result){
                    setIsOtpSent(true)
                    setEmail(values?.email)
                }
                toast.success(result?.data?.message)
                
            } catch (error) {
                toast.error(error?.data?.error)
            }
            // let terms = 0
            // values.termConditions ? (terms = 1) : (terms = 0)
            // let data = new URLSearchParams({
            //     email: values.email,
            //     password: values.password,
            //     first_name: values.name,
            //     is_agree: terms,
            // })
            // if (!inviteInfo) {
            //     data.append('country_id', values.country);
            // }
            // if (inviteToken) {
            //     data.append('token', inviteToken)
            // }
            // if (values.gst) {
            //     data.append('gst_enabled', values.gst)
            // }
            // setSpinner(true)
            // setAction(true)
            // dispatch(registerUser(data, props.history))
        },
    })

    return (
        <>
           {!isOtpSent?  <AuthLayout title="Create New Account">
                <form
                    className="form-body row g-3"
                    onSubmit={e => {
                        e.preventDefault()
                        RegisterForm.handleSubmit()
                        return false
                    }}
                >
                    
                    <div className="col-12">
                        <label
                            htmlFor="inputEmail"
                            className="form-label fw-medium text-dark-color"
                        >
                            Business Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="form-control p-2"
                            id="inputEmail"
                            onChange={RegisterForm.handleChange}
                            onBlur={RegisterForm.handleBlur}
                            value={RegisterForm.values.email}
                            invalid={
                                RegisterForm.touched.email && RegisterForm.errors.email
                                    ? "true"
                                    : "false"
                            }
                        />
                        {RegisterForm.touched.email && RegisterForm.errors.email ? (
                            <InputError error={RegisterForm?.errors?.email} />
                        ) : null}
                    </div>
                    <div className="col-6">
                        <label
                            htmlFor="firstName"
                            className="form-label fw-medium text-dark-color"
                        >
                            First Name
                        </label>
                        <input
                            name="firstName"
                            type="text"
                            className="form-control p-2"
                            id="firstName"
                            onChange={RegisterForm.handleChange}
                            onBlur={RegisterForm.handleBlur}
                            value={RegisterForm.values.firstName}
                            invalid={
                                RegisterForm.touched.firstName && RegisterForm.errors.firstName
                                    ? "true"
                                    : "false"
                            }
                        />
                        {RegisterForm.touched.firstName && RegisterForm.errors.firstName ? (
                            <InputError error={RegisterForm?.errors?.firstName} />
                        ) : null}
                    </div>
                    <div className="col-6">
                        <label
                            htmlFor="lastName"
                            className="form-label fw-medium text-dark-color"
                        >
                            Last Name
                        </label>
                        <input
                            name="lastName"
                            type="text"
                            className="form-control p-2"
                            id="lastName"
                            onChange={RegisterForm.handleChange}
                            onBlur={RegisterForm.handleBlur}
                            value={RegisterForm.values.lastName}
                            invalid={
                                RegisterForm.touched.lastName && RegisterForm.errors.lastName
                                    ? "true"
                                    : "false"
                            }
                        />
                        {RegisterForm.touched.lastName && RegisterForm.errors.lastName ? (
                            <InputError error={RegisterForm?.errors?.lastName} />
                        ) : null}
                    </div>
                    <div className="col-12">
                        <label
                            htmlFor="inputPassword"
                            className="form-label fw-medium text-dark-color"
                        >
                            Password
                        </label>
                        <input
                            autoComplete="false"
                            name="password"
                            type="password"
                            className="form-control p-2"
                            id="inputPassword"
                            onChange={RegisterForm.handleChange}
                            onBlur={RegisterForm.handleBlur}
                            value={RegisterForm.values.password}
                            invalid={
                                RegisterForm.touched.password && RegisterForm.errors.password
                                    ? "true"
                                    : "false"
                            }
                        />
                        {RegisterForm.touched.password && RegisterForm.errors.password ? (
                            <InputError error={RegisterForm?.errors?.password} />
                        ) : null}
                    </div>
                    <div className="col-12">
                        <label
                            htmlFor="inputConfirmPassword"
                            className="form-label fw-medium text-dark-color"
                        >
                            Confirm Password
                        </label>
                        <input
                            autoComplete="false"
                            name="confirmPassword"
                            type="password"
                            className="form-control p-2"
                            id="inputConfirmPassword"
                            onChange={RegisterForm.handleChange}
                            onBlur={RegisterForm.handleBlur}
                            value={RegisterForm.values.confirmPassword}
                            invalid={
                                RegisterForm.touched.confirmPassword && RegisterForm.errors.confirmPassword
                                    ? "true"
                                    : "false"
                            }
                        />
                        {RegisterForm.touched.confirmPassword && RegisterForm.errors.confirmPassword ? (
                            <InputError error={RegisterForm?.errors?.confirmPassword} />
                        ) : null}
                    </div>
                    <div className="col-12 col-lg-12">
                        <div className="form-check">
                            <input
                                name="termConditions"
                                className="form-check-input"
                                type="checkbox"
                                // defaultValue=""
                                id="flexCheckDefault"
                                onChange={RegisterForm.handleChange}
                                onBlur={RegisterForm.handleBlur}
                                value={RegisterForm.values.termConditions || ""}
                                invalid={
                                    RegisterForm.touched.termConditions &&
                                        RegisterForm.errors.termConditions
                                        ? "true"
                                        : "false"
                                }
                            />

                            <label
                                className="form-check-label fw-medium text-light-gray"
                                htmlFor="flexCheckDefault"
                            >
                                I've read and accept the{" "}
                                <a href="" className="text-main">
                                    Terms &amp; Conditions
                                </a>{" "}
                                and{" "}
                                <a href="" className="text-main">
                                    Privacy Policy
                                </a>
                            </label>
                            {RegisterForm.touched.termConditions && RegisterForm.errors.termConditions ? (
                                <InputError error={RegisterForm?.errors?.termConditions} />
                            ) : null}
                        </div>
                    </div>
                    <div className="col-12 col-lg-12">
                        <div className="d-grid">
                            <button type="submit" className="btn bg-main text-white p-2">
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 text-center">
                        <p className="mb-0">
                            Already have an account?{" "}
                            <Link
                                className="text-primary font-14 fw-medium"
                                to="/login"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </AuthLayout>
             : <OtpVerification email={email} action="verification" otp={otp} setOtp={setOtp}/>}

        </>
    )
}
export default Register;

