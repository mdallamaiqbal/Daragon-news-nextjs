"use client"
import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png"
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="flex justify-between container mx-auto mt-6">
            <div></div>
            <ul className="flex justify-between items-center gap-3 text-gray-700">
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>
            {isPending ?<span class="loading loading-dots loading-lg"></span> : user ? (<div className="flex items-center gap-2">
                <h3 className="text-gray-700 font-bold">Hello, {user.name}</h3>
                <Image src={user?.image || userAvatar} width={60} height={60} alt="user avatar" />
             <button className="btn bg-purple-500 text-white" onClick={async()=>await authClient.signOut()}>Logout</button>
          </div>) :
         (<button className="btn bg-purple-500 text-white"><Link href={"/login"}>Login</Link></button> )}
        </div>
    );
};

export default Navbar;