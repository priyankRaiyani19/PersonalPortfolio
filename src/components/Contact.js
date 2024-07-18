import React, { useState } from 'react';
import {  setDoc, doc} from "firebase/firestore";

const Contact = ({ db }) => {
    const [profile, setProfile] = useState({
        nameField: "",
        emailField: "",
        messageField: "",
        contactField:"",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const customId = profile.nameField; // Use email as the custom ID, you can generate any custom ID here
        try {
            await setDoc(doc(db, "FormDetails", customId), {
                name: profile.nameField,
                mail: profile.emailField,
                message: profile.messageField,
                contact: profile.contactField,
            });
            alert("Form successfully submitted!");
            // window.location.reload();
            setProfile({
                nameField: "",
                emailField: "",
                messageField: "",
                contactField:"",
            });
            window.scrollTo(0, 0);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div name="Contact" className="bg-gradient-to-b from-black to-gray-800 w-full text-white p-4 py-[100px]">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-5xl font-bold inline border-b-4 border-gray-400">Contact</p>
                    <p className="py-6 text-2xl">Fill out a form to contact me</p>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
                    <input
                        type="text"
                        id="nameField"
                        onChange={handleChange}
                        value={profile.nameField}
                        required
                        placeholder="Enter Your Full Name"
                        className="p-2 text-xl  bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input
                        type="email"
                        id="emailField"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        min={10} max={20}
                        onChange={handleChange}
                        value={profile.emailField}
                        required
                        placeholder="Enter Your E-mail"
                        className="p-2 my-5 text-xl  bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input
                         type="tel" maxLength={10}
                        id="contactField"
                        onChange={handleChange}
                        value={profile.contactField}
                        required
                        placeholder="Enter Your Contact No."
                        className="p-2 mb-5 text-xl  bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <textarea
                        id="messageField"
                        onChange={handleChange}
                        value={profile.messageField}
                        required
                        maxLength={300}
                        rows={8}
                        placeholder="Enter Your Message"
                        className="p-2 bg-transparent text-xl border-2 rounded-md text-white focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="text-white px-6 py-3 my-8 mx-auto flex items-center hover:scale-105 duration-500 rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
