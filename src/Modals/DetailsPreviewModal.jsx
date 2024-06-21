import React from "react";

const DetailsPreviweModal = () => {

    return (
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
    )
}

export default DetailsPreviweModal