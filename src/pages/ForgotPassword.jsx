import React, { useState } from "react"
import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom"
const ForgotPassword = ()=>{
    const [email,setEmail] =  useState("")
    const submitHandler = (e)=>{
        e.preventDefault();

    }
    return <React.Fragment>
        <Navbar/>
       <form className="flex flex-col my-10 bg-slate-300 p-10" onSubmit={submitHandler}>
            <input type="email" placeholder="email" className="p-2 my-1 border-[2px]" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button className="bg-yellow-400 " type="submit">
                        Reset Password
                </button>
                <div className="flex justify-between my-1">
                    <Link to={'/login'}>
                    Login
                    </Link>
                    <Link to={'/signUp'}>
                    Sign Up
                    </Link>
                </div>
       </form>
    </React.Fragment>
}
export default ForgotPassword