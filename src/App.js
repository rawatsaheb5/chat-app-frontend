import "./App.css";

import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
import { useAuth } from "./context/Auth";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/home/Home";

function App() {
  const { auth } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/" element={
          <PrivateRoute >
            <Home />
          </PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
