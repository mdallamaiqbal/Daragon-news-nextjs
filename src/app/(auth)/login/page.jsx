'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const LoginPage = () => {
    const {register, 
        handleSubmit,
        formState: {errors}} = useForm();
    const [isShowPassword, setIsShowPassword]=useState(false);
    const handleLoginFunc =async (data)=>{
    const {email,password} = data;
    const { data:res, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
}); 
      if(error){
        alert(error.message)
      }if(res){
        alert("Login successful")
      }
    }
    return (
        <div className="container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
            <div className="p-4 rounded-xl bg-white ">
                <h2 className="mb-4 font-bold text-3xl text-center">Login your account</h2>
               <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" {...register("email", { required: "Email field is required"} )}  className="input" placeholder="Type here email" /> 
                     {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </fieldset>
                <fieldset className="fieldset relative">
                    <legend className="fieldset-legend">Password</legend>
                    <input type={isShowPassword ? "text" : "password"} {...register("password" , { required: "Password field is required"})}  className="input" placeholder="Type here password" /> 
                    <span className=" absolute right-2 top-5 cursor-pointer " onClick={()=> setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash/>}</span>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </fieldset>
                <button className="btn w-full bg-slate-800 text-white">Login</button>
               </form>
               <p className="mt-4">Do not have an account ? 
                 <Link href={"/register"} className="text-blue-500">Register</Link>
               </p>
            </div>
        </div>
    );
};

export default LoginPage;