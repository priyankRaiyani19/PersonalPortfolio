import React from 'react';
// import DemoPortfolio from '../assets/Portfolio/DemoPortfolio.png';
import Parallax from '../assets/Portfolio/Parallax.png';
import Razorpay from '../assets/Portfolio/Razorpay.png';
import StudyNotion from '../assets/Portfolio/StudyNotion.png';
import VedaVerse from '../assets/Portfolio/VedaVerse.png';
// import PasswordGenerator from '../assets/Portfolio/PasswordGenertor.png';
import ShopingCart from '../assets/Portfolio/ShopingCart'


const Portfolio = () => {

    const images = [

        {
            id: 1,
            src: StudyNotion,
            Name: "Study Notion"

        },
        {
            id: 2,
            src: Razorpay,
            Name: "Razorpay Clone"

        },
        {
            id: 4,
            src: VedaVerse,
            Name: "Veda-Verse"

        },
        {

            id: 3,
            src: "ShopingCart",
            Name: ShopingCart

        },
        {
            id: 5,
            src: Parallax,
            Name: "Parallax"

        },
       
    ]

    return (
        <div name="Portfolio"
             className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen sm:m-[20]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-5xl font-bold inline border-b-4 border-gray-400 ">
                        Portfolio
                    </p>
                    <p className="py-6 text-3xl">
                        Check out some of my work right here
                    </p>
                </div>

                <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
                    {images.map(({id, src, Name}) => (


                        <div key={id}  className=" shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md duration-500 hover:scale-105"/>
                            <div className="flex items-center justify-center mb-0  text-xl">
                                {Name}
                            </div>
                        </div>


                    ))}
                </div>

            </div>
        </div>
    );
};

export default Portfolio;