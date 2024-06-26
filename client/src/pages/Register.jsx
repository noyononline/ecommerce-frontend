import React, { useState } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
    const [state,setSate] = useState({
        name : '',
        email : '',
        password : ''
    })
    const inputHandle = (e)=>{
        setSate({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const register = (e) => {
        e.preventDefault()
        console.log(state);
    }
    return(
        <div>
            <Headers />
            <div className="bg-slate-200 mt-4">
                <div className="w-full justify-center items-center p-10">
                    <div className="grid grid-cols-2 w-[60%] mx-auto bg-white rounded-md">
                        <div className="p-10">
                            <h2 className="text-center w-full text-2xl text-slate-600 font-bold">Create a New account</h2>
                            <div>
                                <form onSubmit={register} className="text-slate-600">
                                    <div className="flex flex-col gap-1 mb-2">
                                        <label className="text-slate-700" htmlFor="name">Name</label>
                                        <input onChange={inputHandle} value={state.name} type="text" className="w-full px-3 py-2 border border-slate-200 outline-none text-slate-700 focus:border-indigo-500 rounded-md" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="flex flex-col gap-1 mb-2">
                                        <label className="text-slate-700" htmlFor="email">Email</label>
                                        <input onChange={inputHandle} value={state.email} type="email" className="w-full px-3 py-2 border border-slate-200 outline-none text-slate-700 focus:border-indigo-500 rounded-md" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="flex flex-col gap-1 mb-2">
                                        <label className="text-slate-700" htmlFor="password">Password</label>
                                        <input onChange={inputHandle} value={state.password} type="password" className="w-full px-3 py-2 border border-slate-200 outline-none text-slate-700 focus:border-indigo-500 rounded-md" name="password" id="password" placeholder="Your Password" />
                                    </div>
                                    <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">Register Now</button>
                                </form>
                                <div className="flex justify-center items-center py-2">
                                    <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                                    <span className="px-3 text-slate-600">or</span>
                                    <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                                </div>
                                <button className="px-8 w-full py-2 bg-indigo-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                                    <span><FaFacebookF /></span>
                                    <span>Login with Facebook</span>
                                </button>
                                <button className="px-8 w-full py-2 bg-orange-500 shadow-lg hover:shadow-orange-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                                    <span><AiOutlineGoogle /></span>
                                    <span>Login with Google</span>
                                </button>
                            </div>
                            <div className="text-center text-slate-600 pt-1">
                                <p>Already have an account ? <Link className="text-blue-500" to={'/login'}>Login</Link></p>
                            </div>
                        </div>
                        <div className="w-full h-full py-4 pr-4">
                            <img className="w-full h-full" src="http://localhost:3000/images/register.jpg" alt="Register" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register