import React from "react";
import StepsNavbar from "./stepsNavbar";

const RegisterLayout = ({ children, activeStep}) => {
    return (
        <>
         <div className="wrapper-auth h-full py-5 bg-lightest">
                <div className="container">
                    <StepsNavbar activeStep={activeStep}/>
                    {children}
                </div>
            </div>
        </>

    )
}

export default RegisterLayout;