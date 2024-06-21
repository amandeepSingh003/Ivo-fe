import logo from './logo.svg';
import './App.css';
import "./assets/css/style.css"
import "./assets/css/bootstrap.min.css"
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthMiddleware from './middlewares/authMiddleware';
import Login from './pages/Authentication/Login.jsx';
import Register from './pages/Authentication/Register.jsx';
import ForgotPassword from './pages/Authentication/ForgotPassword.jsx';
import OtpVerification from './pages/Authentication/OtpVerification.jsx';
import CreateNewPassword from './pages/Authentication/CreateNewPassword.jsx';
import PasswordResetComplete from './pages/Authentication/PasswordResetComplete.jsx';
import Dashboard from './pages/RegisterationSteps/CreateProject.jsx';
import ProtectedMiddleware from './middlewares/protectedMiddleware';
import RegisterLayout from './pages/RegisterationSteps/RegisterLayout.jsx';
import CreateProject from './pages/RegisterationSteps/CreateProject.jsx';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<AuthMiddleware />}>
            <Route index element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword/>} />
            {/* <Route path='/otp-verification' element={<OtpVerification/>} /> */}
            {/* <Route path='/create-password' element={<CreateNewPassword/>} /> */}
            {/* <Route path='/password-reset-complete' element={<PasswordResetComplete/>} /> */}
            <Route path='*' element={<Login />} />
          </Route>
          <Route path='/dashboard' element={<ProtectedMiddleware/>} >
            <Route index element={<CreateProject />} />
          </Route>
        </Routes>
        <ToastContainer closeButton={false} position="top-right" />
      </Router>
    </React.Fragment>
  );
}

export default App;
