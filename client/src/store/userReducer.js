export const USER_LOGIN = "APP/USER/USER_LOGIN";

const currUser = JSON.parse(localStorage.getItem("currentUser"));

export const initialState = {
  user: currUser,
};

export const userLogin = (user) => ({
  type: USER_LOGIN,
  user
});

export const userReducer = (state = initialState, action) => {
  if(action.type === USER_LOGIN){
    localStorage.setItem("currentUser", JSON.stringify(action.user));
    return {
      ...state,
      user: action.user,
    };
  }
};

