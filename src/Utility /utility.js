import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const toastData = {
  autoClose: 3000,
  closeButton: false,
  position: toast.POSITION.TOP_RIGHT
}

const notificationWarn = (msg) => {
  toast.warn(msg, toastData)
}

const notificationSuccess = (msg) => {
  toast.success(msg, toastData)
}

const notificationError = (msg) => {
  toast.error(msg, toastData)
}

const getLocalStorage = () => {
  let arr = JSON.parse(localStorage.getItem('user'));
  return arr;
}

const setLocalStorage = (arr) => {
  localStorage.setItem('user', JSON.stringify(arr));
}

export { notificationWarn, notificationError, notificationSuccess, getLocalStorage, setLocalStorage };
