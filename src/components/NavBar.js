import React from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {

    const Links = [
        {
            id: 1,
            Links: 'Home'
        },
        {
            id: 2,
            Links: 'About'
        },
        {
            id: 3,
            Links: 'Porfolio'
        }


    ]


    return (
        <div className="flex justify-between items-center w-full
         h-20 text-white bg-black fixed px-[90px] py-[18px]">
            <div>
                <h1 className="font-bold text-5xl ml-2 font-signature">
                    Priyank Raiyani
                </h1>
            </div>

            <div>
                <ul className="flex">
                    <li className="px-5 cursor-pointer capitalize
                  font-medium text-white hover:scale-105 duration-200">
                        Home
                    </li>


                </ul>
            </div>

        </div>
    )
}
export default NavBar;