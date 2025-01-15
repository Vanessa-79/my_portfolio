// import React from "react";
import img3 from "../../assets/images/img3.jpg";
import { FaTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa"; 

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] lgl:p-8 p-4 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        src={img3}
        alt="Profile"
        className="w-full h-64 object-cover rounded-lg mb-2"
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white mb-2">Vanessa Nassanga</h3>
        <p className="text-lg font-normal text-gray-400 mb-2">
          Software Developer
        </p>
        <p className="text-base text-gray-400 mb-4">
          Passionate about technology and always eager to connect. Feel free to
          reach out if you’d like to collaborate or chat!
        </p>
        <p className="text-base text-gray-400 flex items-center justify-center gap-2">
          Phone:{" "}
          <span className="text-lightText" style={{ marginRight: "80px" }}>
            +256 785 507 825
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center justify-center gap-2">
          Email: <br />
          <br />
          <span className="text-lightText" style={{ marginRight: "80px" }}>
            nassangavanessa2@gmail.com
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-orange-500">
          Find me in
        </h2>

        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <a
              href="https://wa.me/256750468584" // Link to WhatsApp chat
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
