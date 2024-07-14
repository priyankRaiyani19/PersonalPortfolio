import React from 'react';

const Contact = () => {
    return (
        <div name="Contact" className="bg-gradient-to-b from-black to-gray-800
         w-full text-white p-4 ">
            <div className= " flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-5xl font-bold inline border-b-4 border-gray-400 ">Contact</p>
                    <p className="py-6 text-3xl">Fill The form For Get in touch</p>
                </div>
            </div>

            <div className="flex justify-center items-center " >
                <form action="https://getform.io/f/byvpkola" method="POST" className="flex flex-col w-full md:w-1/2 ">

                    <input type="text"
                           name="name"
                           required={true}
                           placeholder="Enter Your Name"
                           className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
                    />
                    <input type="email"
                           name="mail"
                           required={true}
                           placeholder="Enter Your E-mail Id"
                           className="p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none "
                    />
                    <textarea name="message"
                              id=""
                              required={true}
                              rows={10}
                              placeholder="Enter Your Message"
                              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ">

                    </textarea>
                    <button type="submit"
                            className="text-white px-6 py-3 my-8 mx-auto
                            flex items-center hover:scale-105 duration-500
                             rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700">
                        Submit
                    </button>


                </form>


            </div>


        </div>
    );
};

export default Contact;