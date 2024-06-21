import React from "react";
import FinancialDetails from "./FinancialDetails";
import OfficeInfofmation from "./OfficeInformation";
import InviteEmployees from "./InviteEmployees";

const AllSteps = () => {

    return (
        <>
            <OfficeInfofmation />
            <FinancialDetails />
            <InviteEmployees />
        </>
    )
}

export default AllSteps;