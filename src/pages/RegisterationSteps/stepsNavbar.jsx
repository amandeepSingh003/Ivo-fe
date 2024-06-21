import React, { useState } from "react";
import Header from "../../layouts/protectedLayout/Header";
import FinancialDetails from "./FinancialDetails";
import { Outlet } from "react-router-dom";
import CreateProject from "./CreateProject";

const StepsNavbar = ({ activeStep }) => {

    return (
        <>
           <h3 className="text-center fs-3 text-black fw-bold mb-5">
                        Let’s get started with adding your office details!
                    </h3>
                    <div className="text-center d-flex indicators-step justify-content-center mb-4">
                        <span className={activeStep === 1? "step-indicator active" : "step-indicator"} id="step-1-indicator">
                            1
                        </span>
                        <span className={activeStep === 2? "step-indicator active": "step-indicator"} id="step-2-indicator">
                            2
                        </span>
                        <span className={activeStep === 3? "step-indicator active": "step-indicator"} id="step-3-indicator">
                            3
                        </span>
                    </div>
            {/* select role modal */}
            <div className="modal" id="selectrolemodal">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header bg-main">
                            <h4 className="modal-title text-center fs-5 ms-auto text-white">
                                Invite{" "}
                            </h4>
                            <button
                                type="button"
                                className="btn-close text-white"
                                data-bs-dismiss="modal"
                                style={{ filter: "invert(126)" }}
                            />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body p-4">
                            <p className="text-black fw-medium text-center">
                                <img
                                    src="./assets/images/icons/paperplane.png"
                                    alt=""
                                    width={28}
                                    className="me-2"
                                />
                                Invite:
                                <span className="text-main">handry@gmail.com</span>
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <div className="profile-role ">
                                    <img
                                        src="./assets/images/authentication/admin.png"
                                        alt=""
                                        style={{ width: "70%" }}
                                    />
                                </div>
                                <div className="profile-role">
                                    <img
                                        src="./assets/images/authentication/backend.png"
                                        alt=""
                                        style={{ width: "80%" }}
                                    />
                                </div>
                                <div className="profile-role">
                                    <img
                                        src="./assets/images/authentication/social-worker.png"
                                        alt=""
                                        style={{ width: "80%" }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer border-0 justify-content-center pb-4">
                            <button
                                type="button"
                                className="btn bg-main fs-6 p-2 text-white px-5"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* preview modal */}
            <div className="modal" id="previewmodal">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header bg-main">
                            <h4 className="modal-title text-center fs-5 ms-auto text-white">
                                Preview{" "}
                            </h4>
                            <button
                                type="button"
                                className="btn-close text-white"
                                data-bs-dismiss="modal"
                                style={{ filter: "invert(126)" }}
                            />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body p-4">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <small className="preview-heading fw-semibold">Office Name</small>
                                </div>
                                <div className="col-md-6">
                                    <small className="preview-data">Sozial- und Jugenddienste</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <small className="preview-heading fw-semibold">
                                        Office Nick Name
                                    </small>
                                </div>
                                <div className="col-md-6">
                                    <small className="preview-data">Landsberger Allee</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <small className="preview-heading fw-semibold">
                                        Office Purpose
                                    </small>
                                </div>
                                <div className="col-md-6">
                                    <small className="preview-data">Landsberger Allee</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <small className="preview-heading fw-semibold">Street</small>
                                </div>
                                <div className="col-md-6">
                                    <small className="preview-data">Landsberger Allee</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <small className="preview-heading fw-semibold">Street no.</small>
                                </div>
                                <div className="col-md-6">
                                    <small className="preview-data">214a</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <small className="preview-heading fw-semibold">ZIP-code</small>
                                </div>
                                <div className="col-md-6">
                                    <small className="preview-data">10115</small>
                                </div>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer gap-1 border-0 justify-content-center pb-4">
                            <button
                                type="button"
                                className="btn m-0 fs-6 p-2 px-5 btn-outline-primary text-main"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                className="btn bg-main m-0 fs-6 p-2 text-white px-5"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepsNavbar;