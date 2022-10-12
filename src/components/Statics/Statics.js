import React from 'react';
import './Statics.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Statics = () => {
    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    return (
        <div>
            <ToastContainer />
            <button onClick={notify}>Notify!</button>

        </div>
    );
};

export default Statics;