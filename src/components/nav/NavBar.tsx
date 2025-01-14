
import { useState } from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";
export const NavBar = () => {
  
    
    const [show, setShow] = useState<boolean>(false);
    
    // Correctly define the handleShow function
    const handleShow: () => void = () => {
        setShow(!show); // Toggle the `show` state
    };
    return (
        <>
        <nav className="hidden md:flex items-center justify-between gap-10 bg-white rounded-3xl p-6">
            <div className="flex items-center gap-5 ">
            <h1 className="bg-white text-lg font-bold text-black rounded-full ">PWKY</h1>
            <ul className="flex items-center gap-5">
                <Link to="/" className="bg-gray-900 text-white font-bold px-4 py-2 rounded-full">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Gallery</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Blog</Link>
            </ul>
            </div>
        <div className="flex item-center">
            <ul className="p-2 bg-stone-50 text-black rounded-full flex justify-center items-center w-[130px] gap-3">
               <Link to='/'><FiFacebook/></Link>
               <Link to='/'><FiTwitter/></Link>
               <Link to='/'><FiInstagram/></Link>
            </ul>
            <ul className="flex items-center gap-10 ">
                <li className="p-2 bg-white  text-black rounded-full w-[100px]">
                    <button>Join us</button>
                </li>
            </ul>
        </div>
        </nav>
        <nav className="md:hidden bg-white p-5">
            <ul className="flex item-center justify-between">
                <h1 className="text-xl font-bold">PWKY</h1>
                <button onClick={handleShow}>
                    <MdDashboard size={25}/>
                </button>
            </ul>
            <ul className={`${show ? '-right-0' : '-right-full '} 
            fixed top-0  z-50 w-full bg-white text-black bottom-0 transition-all ease-in duration-500 `}>
            <button onClick={()=>setShow(false)} className="absolute right-10 top-5 cursor-pointer"><IoClose size={30} /></button>
                <div className={`${show ? 'flex flex-col gap-5 ml-5 mt-20':'hidden'}`}>
                <Link to="/" className="">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Gallery</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Blog</Link>
                </div>
                <div className={`${show ? 'flex flex-col gap-5 ml-5 mt-20':'hidden'}`}>
            <ul className="text-black rounded-full flex justify-start items-center gap-2">
               <Link to='/'><FiFacebook/></Link>
               <Link to='/'><FiTwitter/></Link>
               <Link to='/'><FiInstagram/></Link>
            </ul>
            <div className="bg-black px-4 py-2 text-white w-[100px] rounded-full">
                    <button className="">Join us</button>
            </div>
            </div>

            </ul>
        </nav>
        </>
    );
};
