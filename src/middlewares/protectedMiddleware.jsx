import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layouts/protectedLayout/Header";
import { SECRETEKEYS } from "../helpers/secreteKeys";
// import AuthSiderbar from "../layouts/authLayout/AuthSidebar";

const ProtectedMiddleware = () => {
    const authToken = localStorage.getItem(SECRETEKEYS?.AUTHTOKEN)
    return (<React.Fragment>
        <Header />
        <div className="wrapper-auth">
            <div className="row login-container g-0 m-0">
                {/* <AuthSiderbar /> */}
                {authToken ? <Outlet /> : <Navigate to="/login" replace={true} />}
            </div>
        </div>
    </React.Fragment>)
}

export default ProtectedMiddleware;