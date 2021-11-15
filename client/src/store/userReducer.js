export const USER_LOGIN = "APP/USER/USER_LOGIN";

export const initialState = {
  user: null,
};

export const userLogin = (user) => ({
  type: USER_LOGIN,
  user
});

export const userReducer = (state = initialState, action) => {
  if(action.tupe === USER_LOGIN){
    return {
      ...state,
      user: action.user
    }
  }
}

