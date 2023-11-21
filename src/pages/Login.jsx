import React, { useState } from "react"
import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom"
const Login = ()=>{
    const [email,setEmail] =  useState("")
    const [password,setPassword] =  useState("")
    const submitHandler = (e)=>{
        e.preventDefault();

    }
    return <React.Fragment>
        <Navbar/>
       <form className="flex flex-col my-10 bg-slate-300 p-10" onSubmit={submitHandler}>
            <input type="email" placeholder="email" className="p-2 my-1 border-[2px]" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" className="p-2 my-1 border-[2px]"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="bg-yellow-400 " type="submit">
                        Login
                </button>
                <div className="flex justify-between my-1">
                    <Link to={'/forgotPassword'}>
                    Forgot password
                    </Link>
                    <Link to={'/signUp'}>
                    Sign Up
                    </Link>
                </div>
       </form>
    </React.Fragment>
}
export default Login