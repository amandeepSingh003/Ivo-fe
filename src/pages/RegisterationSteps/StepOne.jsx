import React, { useState } from "react";

const StepOne = ({setActiveStep}) => {
    return (
        <>
                <div class="col-md-12">
                    <div class="login-cover-img d-flex align-items-center ps-5 ">
                        <div class="w-50 mb-4 me-4 p-4 rounded auth-content">
                            <h1 class="text-white display-2 fw-bold">Welcome! <span>&#128073;</span>Mark Antony</h1>
                            <p class="text-white ">Let’s get you started by entering your office details</p>
                            {/* <a href="{% url 'office:offices-list' %}" class="text-decoration-none"> */}
                                <div class=" ">
                                    <button onClick={() => setActiveStep(1)} type="button" class="btn bg-main fw-normal text-white p-2 px-4">Create a New Project
                                        <i class='bx bx-chevrons-right'></i></button>
                                </div>
                            {/* </a> */}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default StepOne