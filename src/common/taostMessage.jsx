import React, { useEffect, useRef } from "react";
import { Toast } from "primereact/toast"
import "primereact/resources/themes/lara-light-cyan/theme.css";

const ToastContainer = ({ action, message }) => {
    const toast = useRef(null);

    useEffect(() => {
        if (action === "success") {
            showSuccess()
        }

    }, [action])

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    }

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
        </div>
    )
}

export default ToastContainer;