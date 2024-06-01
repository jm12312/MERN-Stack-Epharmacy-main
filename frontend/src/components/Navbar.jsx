import React, { useContext } from 'react';
import logo from '../assets/images/logo.jpeg';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { URL } from '../url';
import { FaCartShopping } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import toast from "react-hot-toast";
function Navbar() {
    const { user } = useContext(UserContext)

    const { setUser } = useContext(UserContext)
    const handleLogout = async () => {
        try {
            const res = await axios.get(URL + "/api/auth/logout", { withCredentials: true })
            setUser(null)
            toast.success("Logout Successfully");

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <nav className="p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span>
                        <Link to={'/'}><img src={logo} alt="Logo" className="h-32 w-80" /></Link>
                    </span>
                    <div className="flex items-center space-x-4 font-semibold">
                        <NavLink to={"/"} className={({ isActive }) => isActive ? "text-blue-800 hover:text-gray-300 px-5 text-xl underline underline-offset-4" : "text-bg-gray-800 hover:text-gray-300 px-5 text-xl"}>Home</NavLink>
                        <NavLink to={"/products"} className={({ isActive }) => isActive ? "text-blue-800 hover:text-gray-300 px-5 text-xl underline underline-offset-4" : "text-bg-gray-800 hover:text-gray-300 px-5 text-xl"}>Products</NavLink>
                        <NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-blue-800 hover:text-gray-300 px-5 text-xl underline underline-offset-4" : "text-bg-gray-800 hover:text-gray-300 px-5 text-xl"}>Contact</NavLink>

                        {user ? <Link to={"/ordercart"}><h1 className="text-bg-gray-800 hover:text-gray-300 hover:cursor-pointer px-5 text-3xl"><FaCartShopping /></h1></Link> :
                            <Link to={"/login"}><button className="bg-white font-bold py-2 px-4 rounded text-xl">Sign In</button></Link>}
                        {user ? <h1 onClick={handleLogout} className="text-bg-gray-800 hover:text-gray-300 hover:cursor-pointer px-5 text-3xl"><IoIosLogOut /></h1> :
                            <Link to={"/register"}><button className="bg-blue-500 text-white font-bold py-2 px-4 rounded text-xl">Register</button></Link>}
                    </div>
                </div>
            </nav>
            <hr className='border border-black w-full'></hr>
        </>
    );
}

export default Navbar;