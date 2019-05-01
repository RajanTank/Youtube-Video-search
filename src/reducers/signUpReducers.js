
export const signUpReducers = (userData = [], action) => {
  switch (action.type) {
    case 'SIGNUP_DATA':
      return { ...action.payload };
    case 'ADD_TO_HISTORY':
      userData.history.push(action.payload);
      return { ...userData };
    case 'ADD_TO_WATCHLATER':
      userData.watchlater.push(action.payload);
      return { ...userData };
    default:
      return userData;
  }
}