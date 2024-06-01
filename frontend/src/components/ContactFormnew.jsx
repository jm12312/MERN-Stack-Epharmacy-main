import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { URL } from "../url"

const ContactForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const changeFullName = (event) => {
        setFullName(event.target.value);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePhone = (event) => {
        setPhone(event.target.value);
    }

    const changeMessage = (event) => {
        setMessage(event.target.value);
    }

    const checkContact = async (event) => {
        event.preventDefault();
        try {
            await axios.post(URL + '/api/message/submit', { fullName, email, phone, message });
            Swal.fire({
                title: "Wow!",
                text: "Your message has been sent!",
                icon: "success"
            });
            window.location.reload(true)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex flex-col items-center space-x-2 pb-4 my-16">
                <h1 className="text-gray-700 poppins text-3xl">Contact {" "} <span className="text-blue-600 font-semibold select-none">Us</span></h1>
                <div className="bg-blue-600 flex items-center justify-center w-16 h-1 mt-2 mb-8 rounded-full"></div>

                <form className="p-6 mt-2 flex flex-col justify-center w-full lg:w-2/4 mx-auto border border-gray-300 rounded-lg" onSubmit={checkContact}>
                    <div className="flex flex-col">

                        <input id="name" placeholder="Full name" type="text" onChange={changeFullName}
                            className="w-full px-4 py-3 mb-4 rounded-lg ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300" />
                        <input id="email" placeholder="Email" type="email" onChange={changeEmail}
                            className="w-full px-4 py-3 mb-4 rounded-lg ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300" />
                        <input id="phone" placeholder="Phone Number" type="tel" onChange={changePhone}
                            className="w-full px-4 py-3 mb-4 rounded-lg ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300" />
                        <div className="mt-6">
                            <textarea placeholder="Your Message" className="mb-4 w-full px-4 py-3 h-36 rounded-lg ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 resize-none" onChange={changeMessage}></textarea>
                        </div>
                        <button className="btn-primary rounded-lg bg-blue-600 text-white px-6 py-3 w-36 mt-6">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ContactForm;
