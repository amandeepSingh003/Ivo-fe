import React from "react";
import Logo from "../../assets/images/icons/logomain.png"
import User from "../../assets/images/avatars/01.png"
const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg p-3 header">
            <div className="container align-items-center">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" width={230} />
                </a>
                <div className="d-flex gap-3 align-items-center">
                    <img
                        src={User}
                        className="rounded-circle avatar-img"
                        alt="..."
                    />
                    <p className="text-black fw-semibold m-0">Mark Antony</p>
                </div>
            </div>
        </nav>
    )
}

export default Header