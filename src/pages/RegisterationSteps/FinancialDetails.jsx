import React from "react";
import RegisterLayout from "./RegisterLayout";
import StepsNavbar from "./stepsNavbar";

const FinancialDetails = () => {

    return (
        <>
            <form id="multi-step-form">
                <div className="form-step" id="step-2">
                    <div className="text-center mb-5">
                        <h4 className="text-black fs-5 fw-bold mb-3">Financial Details</h4>
                        <p className="text-gray-color fw-medium">
                            Begin by entering the basic information about the office. This may
                            include the office name, location, contact details, and a unique
                            identifier or code.{" "}
                            <span className="fw-bold">
                                Specify the office's type and purposes, such as a property
                                management office or social worker.
                            </span>{" "}
                        </p>
                    </div>
                    {/* financial detail */}
                    <div className="card shadow-none border-0 p-4 mb-5">
                        <div className="card-body">
                            <h2 className="text-main fs-5 fw-semibold mb-4">
                                Enter Financial Details
                            </h2>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="office-name"
                                        >
                                            Cost Centre
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="office-name"
                                            name="office-name"
                                            placeholder="Enter Office Name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-main fs-5 fw-semibold">
                                    Add Bank Accounts
                                </h2>
                                <button
                                    type="button"
                                    className="btn fs-6 fw-normal py-2 bg-main text-white px-5"
                                    id="add-financial-fields"
                                >
                                    Add
                                </button>
                            </div>
                            <table className="financial-table">
                                <thead>
                                    <tr>
                                        <th>Purpose</th>
                                        <th>Owner Name</th>
                                        <th>IBAN</th>
                                        <th>BIC</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody id="financial-table-form"></tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-outline-primary prev-btn px-5 fs-6 py-2"
                            data-prev="step-1"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="btn fs-6 fw-normal py-2 bg-main text-white px-5 next-btn"
                            data-next="step-3"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FinancialDetails;