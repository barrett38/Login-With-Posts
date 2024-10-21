import { createContext, useReducer, useEffect } from "react";

const initialState = {
  userId: null,
  token: null,
  exp: null,
  username: null
};

const AuthContext = createContext();

const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("exp");
  const storedId = localStorage.getItem("userId");
  const storedName = localStorage.getItem("username");

  let remainingTime = storedExp - new Date().getTime()
  if(remainingTime < 0) {
    localStorage.clear()
    return null
  }
  //TODO CALCULATE REMAINING TIME FROM THE EXP DATE.

  return {
    token: storedToken,
    exp: storedExp,
    userId: storedId,
    username: storedName
  };
};

const AuthContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        let { token, exp, userId, username } = action.payload;
        localStorage.setItem("token", token);
        localStorage.setItem("exp", exp);
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username);
        return { ...state, token, exp, userId, username };
      case "LOGOUT":
        localStorage.clear();
        return initialState;
      case "RETURNING_USER":
        let { token: t, userId: u, exp: e, username: n } = action.payload;
        return { ...state, token: t, userId: u, exp: e, username: n };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let localData = getLocalData();
    if (localData) {
      dispatch({ type: "RETURNING_USER", payload: localData });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
