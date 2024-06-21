import React, { useState } from "react";
import RegisterLayout from "./RegisterLayout";
import StepOne from "./StepOne";
import AllSteps from "./AllSteps";

const CreateProject = () => {
    const [activeStep, setActiveStep] = useState(0)
    return (
        <>
            {activeStep === 0 ?
                <StepOne setActiveStep={setActiveStep} /> :
                <RegisterLayout activeStep={activeStep}>
                    <AllSteps activeStep={activeStep} setActiveStep={setActiveStep}/>
                </RegisterLayout>
            }
        </>
    )
}

export default CreateProject