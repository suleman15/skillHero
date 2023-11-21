import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Courses from "../pages/Courses"
import Testimonials from "../pages/Testimonials"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import ForgotPassword from "../pages/ForgotPassword"
const MyRoutes = ()=>{
    return <React.Fragment>
        <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/reviews" element={<Testimonials/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>


        
        </Routes>
    </React.Fragment>
}
export default MyRoutes