import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
const Login = () => {
  const { auth, setAuth } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signin",
        formData
      );
      console.log("Signin successful:", response.data);
      localStorage.setItem("authToken", response.data.token);
      const user = {
        name: response.data.name,
        email: response.data.email,
        gender: response.data.gender,
        _id: response.data._id,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(true);
      navigate("/");
      // Optionally, redirect or show a success message here
    } catch (error) {
      console.error(
        "Error signing in:",
        error.response ? error.response.data : error.message
      );
      // Optionally, handle or display error feedback here
    }
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
