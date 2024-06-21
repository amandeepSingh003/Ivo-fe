import React from "react";
import AuthLayout from "./AuthLayout";
import SuccessIcon from "../../assets/images/icons/19231-payment-successful.png"
import { Link } from "react-router-dom";
const PasswordResetComplete = () => {

    return (
        <>
            <AuthLayout>
                <div className="d-flex gap-2 align-items-center mb-4">
                    <img
                        src={SuccessIcon}
                        alt=""
                        width={120}
                    />
                    <h1 className="fw-semibold ">Password Reset Completed</h1>
                </div>
                <p className="text-dark-color">
                    Now, you can log in to your account with the new password.
                </p>
                <form className="form-body row g-3">
                    <div className="col-12 col-lg-12">
                        <div className="d-grid">
                            <Link to="/login" type="button" className="btn bg-main text-white p-2">
                                Got It
                            </Link>
                        </div>
                    </div>
                </form>
            </AuthLayout>
        </>

    )
}

export default PasswordResetComplete;