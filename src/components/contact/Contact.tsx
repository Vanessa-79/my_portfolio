import { useState, ChangeEvent, FormEvent } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
const api = import.meta.env.VITE_API


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
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
      fetch(api+"/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: username,
          phoneNumber,
          email,
          subject,
          message,
        }),

      
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
      style={{
        width: "100%",
        marginLeft: "0px",
        marginRight: "60px",
        paddingTop: "5px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.50)", // Adding shadow
      }}
    >
      <div className="flex justify-center items-center text-center mb-8">
        <Title
          title="CONTACT "
          des="GET IN TOUCH"
          titleStyle={{}} // Provide default styles or an empty object
          descriptionStyle={{}} // Provide default styles or an empty object
        />
      </div>

      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <ContactLeft />

        <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
          <form
            className="w-full flex flex-col gap-2 lgl:gap-6 py-2 lgl:py-5"
            onSubmit={handleSubmit}
          >
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <div className="w-full flex flex-col lgl:flex-row gap-10">
              <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  FULL NAME
                </p>
                <input
                  name="username"
                  onChange={handleChange}
                  value={username}
                  className={`contactInput ${
                    invalidField === "username" ? "border-red-500" : ""
                  }`}
                  type="text"
                />
              </div>

              <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Phone number
                </p>
                <input
                  name="phoneNumber"
                  onChange={handleChange}
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
                name="email"
                onChange={handleChange}
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
                name="subject"
                onChange={handleChange}
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
                name="message"
                onChange={handleChange}
                value={message}
                className={`contactTextArea ${
                  invalidField === "message" ? "border-red-500" : ""
                }`}
                cols={30}
                rows={8}
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
