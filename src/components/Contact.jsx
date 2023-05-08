import React, { useState,useRef } from "react";
import db from "../firebase/firebaseConfig";
import { ref, update } from "firebase/database";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formInputs, setInputForms] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if(!formInputs.name || !formInputs.email || !formInputs.message) {
        toast.error('Please fill inputs')
    }else{
        update(ref(db, formInputs.name), formInputs);
        emailjs.sendForm('service_eyvo6ys', 'template_i2u8u8j', form.current, '-GawKdftwW1pDhgSY',{
          name: formInputs.name,
          user_name: formInputs.name,
          user_email: formInputs.email,
          message: formInputs.message
        }).then(res => {
          console.log(res.text)
        }).catch(err => console.log(err.text))
        toast.success('Succesfully send message !')
    }
   
  };
  return (
    <div
      className="w-full h-screen bg-[#231f20] flex justify-center items-center p-4"
    >
        <ToastContainer position="top-center"/>
      <form
      ref={form}
        className="flex flex-col max-w-[1000px] w-full"
        onSubmit={handleSendMessage}
      >
        <div className="pb-8" name="contact">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email
          </p>
        </div>
        <input
          className="p-2 text-black outline-0 border-2 transition ease-in-out focus:border-indigo-600"
          type="text"
          placeholder="Name"
          name="user_name"
          value={formInputs.name}
          onChange={(e) =>
            setInputForms({ ...formInputs, name: e.target.value })
          }
        />
        <input
          className="my-4 p-2 text-black  outline-0 border-2 transition ease-in-out focus:border-indigo-600"
          type="email"
          placeholder="Email"
          name="user_email"
          value={formInputs.email}
          onChange={(e) =>
            setInputForms({ ...formInputs, email: e.target.value })
          }
        />
        <textarea
          className="p-2 text-black  outline-0 border-2 transition ease-in-out focus:border-indigo-600"
          name="message"
          rows="10"
          placeholder="Message"
          value={formInputs.message}
          onChange={(e) =>
            setInputForms({ ...formInputs, message: e.target.value })
          }
        ></textarea>
        <button
        type="submit"
          className="text-white border-2 hover:bg-blue-600 hover:rounded hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center transition linear"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
