import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Check if token exists

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
