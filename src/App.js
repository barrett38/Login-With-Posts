import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import AuthContext from "./components/Login/authContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Login/Auth";
import Form from "./components/Form";
import Profile from "./components/Profile";

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={!state.token ? <Auth /> : <Navigate to="/" />}
        />
        <Route
          path="/form"
          element={state.token ? <Form /> : <Navigate to="/auth" />}
        />
        <Route
          path="/profile"
          element={state.token ? <Profile /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
