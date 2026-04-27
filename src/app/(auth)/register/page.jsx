'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
     const {register, 
        handleSubmit,
        formState: {errors}} = useForm();
     const handleRegisterFunc = (data)=>{
     console.log(data)    
    }
    return (
        <div className="container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
            <div className="p-4 rounded-xl bg-white ">
                <h2 className="mb-4 font-bold text-3xl text-center">Register your account</h2>
               <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" {...register("name", { required: "Name field is required"} )}  className="input" placeholder="Type here name" /> 
                     {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </fieldset>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo URL</legend>
                    <input type="text" {...register("photo", { required: "Photo URL field is required"} )}  className="input" placeholder="Type here Photo URL" /> 
                     {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                </fieldset>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" {...register("email", { required: "Email field is required"} )}  className="input" placeholder="Type here email" /> 
                     {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" {...register("password" , { required: "Password field is required"})}  className="input" placeholder="Type here password" /> 
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </fieldset>
                <button className="btn w-full bg-slate-800 text-white">Register</button>
               </form>
            </div>
        </div>
    );
};

export default RegisterPage;