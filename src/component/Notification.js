import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

Notification = (msg) => {

   toast(msg, {
      autoClose: 3000,
      closeButton: false,
      position: toast.POSITION.TOP_RIGHT
   });
   
}
export default Notification;