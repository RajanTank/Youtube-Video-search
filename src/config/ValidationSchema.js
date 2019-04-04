const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-z]+$/i;
const passwordRegex = /^[\S]{8,}$/;
const ValidationSchema = {
   'email': { 'regex': emailRegex, 'errorMsg': 'Enter valid email' },
   'text': { 'regex': nameRegex, 'errorMsg': 'Enter valid name' },
   'password': { 'regex': passwordRegex, 'errorMsg': 'Enter valid password' }
};

export default ValidationSchema;                           