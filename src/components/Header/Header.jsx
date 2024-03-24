import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div className="container mx-auto py-3">
     <div className="navbar">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to={'/'} className='text-base font-bold text-[#757575]'>Statistics</NavLink></li>
            <li><NavLink to={'/applied'} className='text-base font-bold text-[#757575]'>Applied Jobs</NavLink></li>
            <li><NavLink to={'/blogs'} className='text-base font-bold text-[#757575]'>Blog</NavLink></li>
            </ul>
            </div>
            <Link to={'/'} className="text-[#1A1919] text-xl lg:text-3xl font-extrabold">CareerHub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-10">
            <li><NavLink to={'/'} className='text-base font-bold text-[#757575]'>Statistics</NavLink></li>
            <li><NavLink to={'/applied'} className='text-base font-bold text-[#757575]'>Applied Jobs</NavLink></li>
            <li><NavLink to={'/blogs'} className='text-base font-bold text-[#757575]'>Blog</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link to={''} className="py-2 lg:py-5 px-4 lg:px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-white text-xl font-extrabold">Star Applying</Link>
        </div>
        </div>
    </div>
  )
}
