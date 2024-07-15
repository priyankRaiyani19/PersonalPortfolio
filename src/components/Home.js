import React from 'react';
import HeroImg from '../assets/Hero.png';
import {PiArrowFatRightBold} from "react-icons/pi";
import {Link} from "react-scroll";

const Home = () => {
    return (
        <div name="Home"
             className= " absolute z-0 h-screen w-full bg-gradient-to-b from-black via-black
              to-gray-800  border-b-[1px] border-gray-500">

            {/* Animated Blur Mesh Gradient */}
            <div className=" inset-0 z-0">
                <div
                    className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            </div>

            <div
                className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row sm:flex-row relative z-10">
                <div className="text-white flex flex-col justify-center h-full">
                    <h2 className="lg:text-5xl sm:flex font-bold text-white animate-glowBorder">
                        I'm MERN STACK DEVELOPER
                    </h2>
                    <p className="text-gray-400 font-bold py-4 max-w-screen-2xl">
                        I specialize in frontend development, crafting responsive web applications with React.js and
                        Tailwind CSS. My approach emphasizes seamless user experiences and optimized performance. I love
                        the challenges and creativity involved in web development.
                    </p>
                    <div>
                        <Link to="Portfolio" smooth duration={500}
                              className="group w-fit my-2 px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 cursor-pointer">
                            Portfolio
                            <span className="text-white group-hover:rotate-90 duration-500">
                                <PiArrowFatRightBold size={20} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className=' lg:mt-[610px] md:ml-0 h-[1000px] w-[2000px]'>
                    <img src={HeroImg} alt="Notfound"
                         className="rounded-3xl mx-auto lg:mx-[50px] lg:h-[530px] lg:w-[3300px] md:w-[1000px]"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
