import axios from "axios";
import React, { useState } from "react";

function AddUserToChat({ getAllUserToChat, showModal, closeModal }) {
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("authToken");
  const handleEmailChange = async (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/add-to-chat`, // Replace with your API endpoint
        {
          emailToAdd: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Setting the token in the header
          },
        }
      );
      if (response.status === 200) {
        setEmail("");
        closeModal();
        getAllUserToChat();
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <div>
      {/* Modal */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h2>Enter User Email</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                style={inputStyle}
                required
              />
              <div style={buttonGroupStyle}>
                <button type="submit">Add</button>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Basic styles for modal and overlay
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "10px 0",
  boxSizing: "border-box",
};

const buttonGroupStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
};

export default AddUserToChat;
