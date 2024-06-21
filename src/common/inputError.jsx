import React from "react";

const InputError = ({ error }) => {

    return (
        <>
            {error && <p className="error">{error}</p>}
        </>
    )
}

export default InputError