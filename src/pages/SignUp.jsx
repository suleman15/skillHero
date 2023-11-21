import React, { useState } from "react"
import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom"
const SignUp = ()=>{
    const [userName,setUserName] =  useState("")

    const [email,setEmail] =  useState("")
    const [password,setPassword] =  useState("")
    const submitHandler = (e)=>{
        e.preventDefault();

    }
    return <React.Fragment>
        <Navbar/>
       <form className="flex flex-col my-10 bg-slate-300 p-10" onSubmit={submitHandler}>
       <input type="text" placeholder="username" className="p-2 my-1 border-[2px]" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            
            <input type="email" placeholder="email" className="p-2 my-1 border-[2px]" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" className="p-2 my-1 border-[2px]"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="bg-yellow-400 " type="submit">
                        Sign Up
                </button>
                <div className="flex justify-between my-1">
                    <Link to={'/forgotPassword'}>
                    Forgot password
                    </Link>
                    <Link to={'/login'}>
                    Login
                    </Link>
                </div>
       </form>
    </React.Fragment>
}
export default SignUp