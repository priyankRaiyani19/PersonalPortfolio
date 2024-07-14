import React from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-scroll"

const NavBar = () => {

    const [nav, setNav] = useState();

    const Links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ]

    return (
        <div className="flex justify-between items-center w-full
         h-20 text-white bg-black fixed px-[80px] py-[15px]">
            <div className="flex">
                <h1 className="text-4xl ml-3 font-signature hidden lg:flex   ">
                    Raiyani Priyank
                </h1>
                <h1 className="text-4xl ml-2 font-signature sm:flex  lg:hidden ">
                    R.P.
                </h1>
            </div>

            <div>
                <ul className="md:hidden sm:hidden lg:flex">
                    {Links.map(({id, link}) => (
                        <li
                            key={id}
                            className="px-5 cursor-pointer capitalize
                  font-medium text-white hover:scale-105 duration-200  text-xl hidden lg:flex">
                         <Link to={link} smooth duration={500}> {link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-white sm:flex  lg:hidden md:flex">
                {
                    nav ? <FaTimes size={30}/> : <FaBars size={30}/>
                }
            </div>

            {
                (nav && (
                    <ul
                        className="flex flex-col justify-center items-center
                absolute top-0 left-0 w-full h-screen bg-gradient-to-b
                from-black to-gray-800 text-white ">
                        {Links.map(({id, link}) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-3xl">
                                <Link onClick={()=>setNav(!nav)} to={link}  smooth duration={500}> {link}</Link>
                            </li>
                        ))}
                    </ul>
                ))
            }

        </div>
    )
}
export default NavBar;