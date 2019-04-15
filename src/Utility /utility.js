import React from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const NotificationWarn = (msg) => {
   toast.warn(msg, {
      autoClose: 3000,
      closeButton: false,
      position: toast.POSITION.TOP_RIGHT
   })
}

const NotificationSuccess = (msg) => {
   toast.success(msg, {
      autoClose: 3000,
      closeButton: false,
      position: toast.POSITION.TOP_RIGHT
   })
}
const NotificationError = (msg) => {
   toast.error(msg, {
      autoClose: 3000,
      closeButton: false,
      position: toast.POSITION.TOP_RIGHT
   })
}
const GetLocalstorage = () => {

   let arr = [];
   arr = JSON.parse(localStorage.getItem('user'));
   return arr;

}
const SetLocalstorage = (arr) =>{
   localStorage.setItem('user',JSON.stringify(arr));
}
export { NotificationWarn, NotificationError, NotificationSuccess, GetLocalstorage,SetLocalstorage};
