import React from 'react';
import css from '../assets/css.png';
import html from '../assets/html.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import js from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import git from '../assets/Git.png';
import mongodb from '../assets/mongo.png';
import FireBase from '../assets/FireBase.png';


const Experience = () => {

    const imges = [
        {
            id: 1,
            src: html,
            name: "HTML",
            style: 'shadow-orange-700 shadow-yellow-300'
        },
        {
            id: 2,
            src: css,
            name: "CSS",
            style: 'shadow-blue-700 shadow-blue-300'
        },
        {
            id: 3,
            src: tailwind,
            name: "TailWind",
            style: 'shadow-sky-700 shadow-sky-300'
        },
        {
            id: 4,
            src: js,
            name: "Javascript",
            style: 'shadow-yellow-700 hover:shadow-yellow-300'
        },
        {
            id: 5,
            src: react,
            name: "React.js",
            style: 'shadow-blue-700 hover:shadow-blue-300'
        },
        {
            id: 6,
            src: node,
            name: "Node.js",
            style: 'shadow-green-700 hover:shadow-green-300'
        },
        {
            id: 7,
            src: mongodb,
            name: "MongoDb",
            style: 'shadow-green-700 hover:shadow-green-300'
        },
        {
            id: 9,
            src: FireBase,
            name: "FireBase",
            style: 'shadow-yellow-700 hover:shadow-red-300',

        },
        {
            id: 10,
            src: github,
            name: "GitHub",
            style: 'shadow-gray-700 hover:shadow-gray-300'
        },
        {
            id: 9,
            src: git,
            name: "Git",
            style: 'shadow-red-700 hover:shadow-red-400'
        },

        // {
        //     id: 11,
        //     src: Express,
        //     name: "Express.js",
        //     style:'shadow-blue-500'
        // },

    ]

    return (
        <div name="Experience"
             className=" bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen h-screen sm:m-[20]">
            <div className="max-w-screen-lg p-4 mx-auto my-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-5xl font-bold inline border-b-4  py-2 border-gray-400">
                        Experience
                    </p>
                    <p className="py-6 text-3xl ">
                        There are technologies I've worked with
                    </p>
                </div>

                <div className=" w-full h-full grid grid-cols-2 sm:grid-cols-3
                gap-8 px-12 py-8 sm:px-0 text-center">

                    {imges.map(({id, src, name, style}) => (

                        <div key={id}
                             className={` shadow-md hover:scale-110 duration-500 rounded-lg ${style} `}>
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4 text-lg">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;