import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [invalidField, setInvalidField] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setError("Please fill in all fields");
      setInvalidField("username");
      setSuccess("");
    } else if (phoneNumber === "") {
      setError("Please fill in all fields");
      setInvalidField("phoneNumber");
      setSuccess("");
    } else if (email === "") {
      setError("Please fill in all fields");
      setInvalidField("email");
      setSuccess("");
    } else if (!emailValidation()) {
      setError("Please enter a valid email address");
      setInvalidField("email");
      setSuccess("");
    } else if (subject === "") {
      setError("Please fill in all fields");
      setInvalidField("subject");
      setSuccess("");
    } else if (message === "") {
      setError("Please fill in all fields");
      setInvalidField("message");
      setSuccess("");
    } else {
      console.log("Form Data:", {
        username,
        phoneNumber,
        email,
        subject,
        message,
      });
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      setError("");
      setSuccess("Message sent successfully!");
      setInvalidField("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-8">
        <Title title="CONTACT" des="GET IN TOUCH" />
      </div>

      <div className="w-full h-auto flex justify-between">
        <ContactLeft />

        <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
          <form
            className="w-full flex flex-col gap-6 py-2"
            onSubmit={handleSubmit}
          >
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <div className="w-full flex gap-10">
              <div className="w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  FULL NAME
                </p>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`contactInput ${
                    invalidField === "username" ? "border-red-500" : ""
                  }`}
                  type="text"
                />
              </div>

              <div className="w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Phone number
                </p>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`contactInput ${
                    invalidField === "phoneNumber" ? "border-red-500" : ""
                  }`}
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Email
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`contactInput ${
                  invalidField === "email" ? "border-red-500" : ""
                }`}
                type="email"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Subject
              </p>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`contactInput ${
                  invalidField === "subject" ? "border-red-500" : ""
                }`}
                type="text"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Message
              </p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`contactTextArea ${
                  invalidField === "message" ? "border-red-500" : ""
                }`}
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
              >
                Send Message
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
