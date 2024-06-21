import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import * as Yup from "yup"
import { useFormik } from "formik";
import { Validation } from "../../helpers/validationHelpers"
import InputError from "../../common/inputError";
import { login } from "../../commonFunctions/authApiFunctions";
import { toast } from "react-toastify";
import { storeUserData, storeUserTokens } from "../../commonFunctions/commonFunc";
const Login = () => {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState()

    const LoginForm = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: userInfo?.email || "",
            password: userInfo?.password || "",
            rememberMe: false,
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .required("Provide your email address.")
                .matches(Validation.email, "Please input a valid email address."),
            password: Yup.string()
                .required("Provide your password.")
                // .matches(Validation.password, "Please enter Atleast one capital letter")
                .min(8, "Enter Valid Password."),
            rememberMe: Yup.bool()
        }),

        onSubmit: async values => {
            let data = new URLSearchParams({
                email: values.email,
                password: values.password
            })

            try{
                const result = await login(data)
                const userInfo = result?.data?.data
                if(userInfo){
                    toast.success(result?.data?.message)
                    storeUserData(userInfo?.user)
                    storeUserTokens(userInfo?.access_token)
                    navigate("/dashboard")
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
        <React.Fragment>
            <AuthLayout title="Login Here">
                <form
                    className="form-body row g-3"
                    onSubmit={e => {
                        e.preventDefault()
                        LoginForm.handleSubmit()
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
                            onChange={LoginForm.handleChange}
                            onBlur={LoginForm.handleBlur}
                            value={LoginForm.values.email}
                            invalid={
                                LoginForm.touched.email && LoginForm.errors.email
                                    ? "true"
                                    : "false"
                            }
                        />
                        {LoginForm.touched.email && LoginForm.errors.email ? (
                            <InputError error={LoginForm?.errors?.email} />
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
                            name="password"
                            type="password"
                            className="form-control p-2"
                            id="inputPassword"
                            value={LoginForm.values.password || ""}
                            // type={passwordInputType ? "password" : "text"}
                            placeholder="**********"
                            onChange={LoginForm.handleChange}
                            onBlur={LoginForm.handleBlur}
                            invalid={
                                LoginForm.touched.password &&
                                    LoginForm.errors.password
                                    ? true
                                    : false
                            }
                        />
                        {LoginForm.touched.password && LoginForm.errors.password ? (
                            <InputError error={LoginForm?.errors?.password} />
                        ) : null}
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-check form-switch">
                            <input
                                name="rememberMe"
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckRemember"
                                value={LoginForm?.values?.rememberMe}
                                // defaultChecked={rememberCheck}
                                onChange={LoginForm.handleChange}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckRemember"
                            >
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 text-end">
                        <Link
                            className="text-primary"
                            to="/forgot-password">
                            Forgot Password?
                        </Link>
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
                            Don't have an account?{" "}
                            <Link
                                className="text-primary font-14 fw-medium"
                                to="/register"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </AuthLayout>

        </React.Fragment>)
}

export default Login;