import React from "react";

const OfficeInfofmation = () => {

    return (
        <>
            <form id="multi-step-form">
                <div className="form-step active" id="step-1">
                    <div className="text-center mb-5">
                        <h4 className="text-black fs-5 fw-bold mb-3">Office Information</h4>
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
                    <div className="card shadow-none border-0 p-4 mb-5">
                        <div className="card-body">
                            <h2 className="text-main fs-5 fw-semibold mb-4">
                                Enter Office Details
                            </h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="office-name"
                                        >
                                            Office Name
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
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="office-purpose"
                                        >
                                            Office Purpose
                                        </label>
                                        <select
                                            className="form-control"
                                            id="office-purpose"
                                            name="office-purpose"
                                        >
                                            <option value="">Select Office Purpose</option>
                                            <option value="property-management">
                                                Property Management
                                            </option>
                                            <option value="social-worker">Social Worker</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="address"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            placeholder="Enter Address"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="street"
                                        >
                                            Street
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="street"
                                            name="street"
                                            placeholder="Enter Street"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="zip-code"
                                        >
                                            Zip Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zip-code"
                                            name="zip-code"
                                            placeholder="Enter Zip Code"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="city"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            placeholder="Enter City"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="city"
                                        >
                                            City Division
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            placeholder="Enter City"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="country"
                                        >
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="country"
                                            name="country"
                                            placeholder="Enter Country"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="office-email"
                                        >
                                            Office Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="office-email"
                                            name="office-email"
                                            placeholder="Enter Email Address"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label
                                            className="font-14 fw-semibold text-black mb-1"
                                            htmlFor="phone-number"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone-number"
                                            name="phone-number"
                                            placeholder="Enter Phone Number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn fs-6 fw-normal py-2 bg-main text-white px-5 next-btn"
                            data-next="step-2"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default OfficeInfofmation;