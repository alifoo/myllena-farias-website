import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialMediaBar = () => {
  return (
    <div className="flex space-x-4">
      <FaInstagram
        className="h-8 w-8 text-gray-600 hover:text-gray-800 cursor-pointer"
        onClick={() =>
          window.open("https://www.instagram.com/myllenaviolin/", "_blank")
        }
      />
      <FaWhatsapp
        className="h-8 w-8 text-gray-600 hover:text-gray-800 cursor-pointer"
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send?phone=5541984742479&text=Oi!%20Gostaria%20de%20agendar%20uma%20aula%20de%20violino",
            "_blank"
          )
        }
      />
      <SiGmail
        className="h-8 w-8 text-gray-600 hover:text-gray-800 cursor-pointer"
        onClick={() => window.open("mailto:myllena.robfar@gmail.com", "_blank")}
      />
    </div>
  );
};

export default SocialMediaBar;
