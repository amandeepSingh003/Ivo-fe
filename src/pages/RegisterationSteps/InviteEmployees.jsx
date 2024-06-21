import React from "react";

const InviteEmployees = () => {

    return (
        <>
            <form id="multi-step-form">
                <div className="form-step" id="step-3">
                    <div className="text-center mb-5">
                        <h4 className="text-black fs-5 fw-bold mb-3">
                            {" "}
                            Invite Your Employees
                        </h4>
                        <p className="text-gray-color fw-medium">
                            Invite your employees by adding their email IDs.
                        </p>
                    </div>
                    {/* financial detail */}
                    <div className="card shadow-none border-0 p-4 mb-5">
                        <div className="card-body">
                            <h2 className="text-main fs-5 fw-semibold mb-4">
                                Invite Employee
                            </h2>
                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="office-name"
                                        >
                                            Email Address
                                        </label>
                                        <div
                                            id="chip-container"
                                            className="p-2 d-flex border rounded"
                                        >
                                            <div id="chip-show-box" />
                                            <input
                                                type="text"
                                                id="chip-input"
                                                className="form-control border-0 shadow-none w-auto"
                                                placeholder="Type something and press enter"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-outline-primary prev-btn px-5 fs-6 py-2"
                            data-prev="step-2"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary px-5 fs-6 py-2"
                            data-bs-toggle="modal"
                            data-bs-target="#previewmodal"
                        >
                            Preview
                        </button>
                        <button
                            type="button"
                            className="btn fs-6 fw-normal py-2 bg-main text-white px-5 "
                            data-bs-toggle="modal"
                            data-bs-target="#selectrolemodal"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default InviteEmployees;