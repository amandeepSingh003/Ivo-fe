import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import OTPInput from "react-otp-input";
import { otpVerification, sendOtp } from "../../commonFunctions/authApiFunctions";
import { toast } from "react-toastify";
import { maskEmail } from "../../commonFunctions/commonFunc";

const OtpVerification = ({ email, action, otpVerified, setOtpVerified, otp, setOtp }) => {
    const [timer, setTimer] = useState(60)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (timer > 0) {
                let newTime = timer - 1
                setTimer(newTime)
            }
        }, 1000)

        return () => {
            clearInterval(timeInterval)
        }
    }, [timer])

    const handleResend = async () => {
        try {
            const result = await sendOtp("verify", { email: email })
            if (result) {
                toast.success(result?.data?.message)
                setTimer(60)
            }

        } catch (error) {
            toast.error(error?.data?.error)
        }

    }

    const handleSubmit = async () => {
        if (otp) {
            if (action === "verification") {
                try {
                    let data = new URLSearchParams({
                        email: email,
                        otp: otp
                    })
                    const result = await otpVerification(data)
                    if (result) {
                        toast.success(result?.data?.message)
                    }
                } catch (error) {
                    toast.error(error?.data?.error)
                }

            } else {
                setOtpVerified(true)
            }

        }
    }

    return (
        <>
            <AuthLayout title="We have sent a code to your email">

                <p className="font-14 mb-4 text-gray-color">
                    Enter the 6-digit verification code sent to {maskEmail(email)}
                </p>
                <form className="form-body row g-3">
                    {/* <div className="d-inline-flex justify-content-start w-75 gap-3">
                        <input
                            type="email"
                            className="form-control p-2"
                            id="inputEmail"
                        />
                        <input
                            type="email"
                            className="form-control p-2"
                            id="inputEmail"
                        />
                        <input
                            type="email"
                            className="form-control p-2"
                            id="inputEmail"
                        />
                        <input
                            type="email"
                            className="form-control p-2"
                            id="inputEmail"
                        />
                        <input
                            type="email"
                            className="form-control p-2"
                            id="inputEmail"
                        />
                        <input
                            type="email"
                            className="form-control p-2"
                            id="inputEmail"
                        />
                    </div> */}
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span style={{ width: "14px" }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                            display: "block",
                            width: "52px",
                            height: "45px",
                            padding: ".375rem .75rem",
                            fontSize: "1rem",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: "var(--bs-body-color)",
                            backgroundCcolor: "var(--bs-body-bg)",
                            backgroundClip: "padding-box",
                            border: "var(--bs-border-width) solid var(--bs-border-color)",
                            appearance: "none",
                            borderRadius: "var(--bs-border-radius)",
                            transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                        }}
                        focusStyle={{
                            border: "1px solid #6062F9",
                            outline: "none",
                            borderRadius: "12px",
                        }}
                        renderInput={(props) => <input {...props} />}
                    />
                    <div className="col-12 col-lg-12">
                        {/* <Link
                            to="/create-password"
                            className="w-100 d-block text-decoration-none"
                        > */}
                        <div className="d-grid ">
                            <button
                                type="button"
                                className="btn bg-main text-white p-2"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                        {/* </Link> */}
                    </div>
                    <div className="col-12 col-lg-12 ">
                        <p className="mb-0 font-14 mb-3">
                            Didn’t receive the code! {" "}
                            {timer > 0 ?
                                timer + "S" :
                                <a
                                    className="text-main font-14 fw-medium"
                                    onClick={handleResend}
                                // href="authentication-sign-up-cover.html"
                                >
                                    Resend
                                </a>}{" "}
                        </p>
                        <p className="mb-0 font-14">
                            If you don’t see the email in your inbox, check your spam
                            folder.
                        </p>
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}

export default OtpVerification;