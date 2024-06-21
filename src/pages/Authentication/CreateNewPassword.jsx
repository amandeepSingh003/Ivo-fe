import React, {useState} from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import * as Yup from "yup"
import { useFormik } from "formik";
import { Validation } from "../../helpers/validationHelpers"
import InputError from "../../common/inputError";
import { createNewPassword } from "../../commonFunctions/authApiFunctions";
import { toast } from "react-toastify";
import PasswordResetComplete from "./PasswordResetComplete";

const CreateNewPassword = ({email, otp}) => {
    const [isPasswordCreated, setIsPasswordCreated] = useState(false)
    const CreatePasswordForm = useFormik({
        enableReinitialize: true,

        initialValues: {
            password: "",
            confirmPassword: "",
        },

        validationSchema: Yup.object({
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
        }),

        onSubmit: async values => {
            try{
                let data = new URLSearchParams({
                    email: email,
                    password: values.password,
                    confirm_password: values?.confirmPassword,
                    otp: otp
                })

                const result = await createNewPassword(data)
                if(result){
                    toast.success(result?.data?.message)
                    setIsPasswordCreated(true)
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
            {!isPasswordCreated? <AuthLayout title="Create New Password">
                <form
                    className="form-body row g-3"
                    onSubmit={e => {
                        e.preventDefault()
                        CreatePasswordForm.handleSubmit()
                        return false
                    }}
                >
                    <div className="col-12">
                        <label
                            htmlFor="inputPassword"
                            className="form-label fw-medium text-dark-color"
                        >
                            New Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="form-control p-2"
                            id="inputPassword"
                            onChange={CreatePasswordForm.handleChange}
                            onBlur={CreatePasswordForm.handleBlur}
                            value={CreatePasswordForm.values.password}
                            invalid={
                                CreatePasswordForm.touched.password && CreatePasswordForm.errors.password
                                    ? "true"
                                    : "false"
                            }
                        />
                        {CreatePasswordForm.touched.password && CreatePasswordForm.errors.password ? (
                            <InputError error={CreatePasswordForm?.errors?.password} />
                        ) : null}
                    </div>
                    <div className="col-12">
                        <label
                            htmlFor="inputPassword"
                            className="form-label fw-medium text-dark-color"
                        >
                            Confirm Password
                        </label>
                        <input
                            name="confirmPassword"
                            type="password"
                            className="form-control p-2"
                            id="inputPassword"
                            onChange={CreatePasswordForm.handleChange}
                            onBlur={CreatePasswordForm.handleBlur}
                            value={CreatePasswordForm.values.confirmPassword}
                            invalid={
                                CreatePasswordForm.touched.confirmPassword && CreatePasswordForm.errors.confirmPassword
                                    ? "true"
                                    : "false"
                            }
                        />
                        {CreatePasswordForm.touched.confirmPassword && CreatePasswordForm.errors.confirmPassword ? (
                            <InputError error={CreatePasswordForm?.errors?.confirmPassword} />
                        ) : null}
                    </div>
                    <div className="col-12 col-lg-12">
                        {/* <Link
                            to="/password-reset-complete"
                            className="w-100 d-block text-decoration-none"
                        > */}
                            <div className="d-grid ">
                                <button
                                    type="submit"
                                    className="btn bg-main text-white p-2"
                                >
                                    Continue
                                </button>
                            </div>
                        {/* </Link> */}
                    </div>
                </form>
            </AuthLayout> : <PasswordResetComplete />}
        </>

    )
}

export default CreateNewPassword;