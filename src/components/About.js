import React from 'react';

const About = () => {
    return (
        <div name="About" className= "z-20 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-5xl font-bold inline border-b-4 border-b-gray-400">
                        About
                    </p>

                    <p className="text-xl mt-20">
                        As a frontend developer, I am passionate about crafting exceptional web experiences. My expertise lies in using React.js and Tailwind CSS to build responsive and dynamic web applications that prioritize user engagement and performance. I take pride in creating interfaces that are not only visually appealing but also intuitive and functional.
                    </p>

                    <br/>

                    <p className="text-xl">
                        Throughout my career, I've developed a range of projects, including study management systems and e-libraries, which demonstrate my ability to work with modern web technologies and design principles. I enjoy tackling the challenges that come with web development, constantly striving to learn new skills and improve my craft.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default About;