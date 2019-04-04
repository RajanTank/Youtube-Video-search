import {emailRegex,nameRegex,passwordRegex} from './constant';
const ValidationSchema ={'email':{ 'regex':emailRegex,'errorMsg':'Enter valid email' },
                           'text':{'regex':nameRegex,'errorMsg':'Enter valid name'},
                           'password':{'regex':passwordRegex,'errorMsg':'Enter valid password'}};

export default ValidationSchema;                           