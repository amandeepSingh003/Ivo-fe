import React from "react";
import Logo from "../../assets/images/icons/logo.png"
const AuthLayout = ({ title, children }) => {

    return (
        <>
            <div className="col-xl-6 col-md-12 p-5 ">
                <div className="login-cover-wrapper">
                    <div className="shadow-none">
                        <img
                            src={Logo}
                            alt=""
                            width={150}
                            className="mb-4"
                        />
                        {title && <h1 className="fw-semibold mb-5">{title}</h1>}
                        {children}
                    </div>
                </div>
            </div>
        </>
    )

}

export default AuthLayout;
