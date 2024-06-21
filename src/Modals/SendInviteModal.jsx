import React from "react";

const SendInviteModal = () => {

    return (
        <>
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
        </>

    )
}

export default SendInviteModal