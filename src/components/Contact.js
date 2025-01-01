import React, { useState } from 'react';
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ db }) => {
    const [profile, setProfile] = useState({
        nameField: "",
        emailField: "",
        messageField: "",
        contactField: "",
    });
    const [isLoading, setIsLoading] = useState(false); // New state for loading

    const handleChange = (event) => {
        const { id, value } = event.target;
        // Validate input for contactField (only allow digits)
        if (id === 'contactField') {
            const isValid = /^\d*$/.test(value);
            if (!isValid) return; // If invalid, do not update state
        }
        setProfile((prevProfile) => ({
            ...prevProfile,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true
        const customId = profile.nameField; // Use name as the custom ID, you can generate any custom ID here
        try {
            await setDoc(doc(db, "FormDetails", customId), {
                name: profile.nameField,
                mail: profile.emailField,
                message: profile.messageField,
                contact: profile.contactField, // Ensure to save the contactField value
            });
            toast.success("Form successfully submitted!");
            setProfile({
                nameField: "",
                emailField: "",
                messageField: "",
                contactField: "",
            });
            setTimeout(() => {
                scrollToTop(); // Smooth scroll to the top
                window.location.reload(); // Reload the page
            }, 3000); // Wait for 3 seconds before reloading the page
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false); // Set loading state to false
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (

        
        <div name="Contact" className="bg-gradient-to-b from-black to-gray-800 w-full text-white p-4 lg:pt-[210px] ">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg w-full mx-auto h-full">
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
                        placeholder="Enter Your Name"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input
                        type="email"
                        id="emailField"
                        onChange={handleChange}
                        value={profile.emailField}
                        required
                        placeholder="Enter Your E-mail Id"
                        className="p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input
                        type="tel"
                        id="contactField"
                        onChange={handleChange}
                        value={profile.contactField}
                        maxLength={10}
                        required
                        placeholder="Enter Your Contact No."
                        className="p-2 mb-5 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <textarea
                        id="messageField"
                        onChange={handleChange}
                        value={profile.messageField}
                        required
                        rows={10}
                        placeholder="Enter Your Message"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={isLoading} // Disable button when loading
                        className={`text-white px-6 py-3 my-8 mx-auto flex items-center hover:scale-105 duration-500 rounded-md ${isLoading ? 'bg-gray-600' : 'bg-gradient-to-r from-red-500 via-red-600 to-red-700'}`}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Contact;
