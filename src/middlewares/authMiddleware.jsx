import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layouts/authLayout/Header";
import AuthSiderbar from "../layouts/authLayout/AuthSidebar";
import { SECRETEKEYS } from "../helpers/secreteKeys";

const AuthMiddleware = () => {
    const authToken = localStorage.getItem(SECRETEKEYS?.AUTHTOKEN)
    return (
    <React.Fragment>
        <Header />
        <div className="wrapper-auth">
            <div className="row login-container g-0 m-0">
                <AuthSiderbar />
                {!authToken? <Outlet /> : <Navigate to="/dashboard" replace={true}/>}
            </div>
        </div>
    </React.Fragment>
)
}
export default AuthMiddleware;