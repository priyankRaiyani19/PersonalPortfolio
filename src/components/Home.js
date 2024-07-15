import React from 'react';
import HeroImg from '../assets/Hero.jpg';
import {PiArrowFatRightBold } from "react-icons/pi";
import {Link} from "react-scroll"

const Home = () => {
    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">

            <div className="max-w-screen-lg mx-auto flex flex-col
             items-center justify-center h-full px-4 md:flex-row ">
                <div className="text-white flex flex-col justify-center h-full">
                    <h2 className="lg:text-4xl sm:text-lg  font-bold text-white">
                        I'm MERN STACK DEVELOPER
                    </h2>
                    <p className=" text-gray-400 font-bold py-4 max-w-screen-2xl ">
                        I specialize in frontend development, crafting responsive web applications with React.js and
                        Tailwind CSS.
                        My approach emphasizes seamless user experiences and optimized performance.
                        I love the challenges and creativity involved in web development.
                    </p>
                    <div>
                        <Link to="Portfolio" smooth duration={500} className="group w-fit my-2 px-6 py-3 flex items-center rounded-md
                        bg-gradient-to-r from-red-500 via-red-600 to-red-700 cursor-pointer ">
                          Portfolio
                            <span className=" text-white group-hover:rotate-90 duration-500">
                                <PiArrowFatRightBold size={20} className=" ml-1"/>
                            </span>

                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImg} alt="Notfound"
                         className="rounded-3xl mx-auto  h-[450px] w-[350px]  md:w-[825px]"/>
                </div>
            </div>
        </div>
    );
};

export default Home;