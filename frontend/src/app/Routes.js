    
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import Profile from "./components/Profile/Profile";
//import SocialCards from "./components/SocialCards/SocialCards";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
     
    </Routes>
  );
};

export default AppRoutes;