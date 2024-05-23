import React from "react";
import videoBg from "../assets/video-for-site-2.mp4";
import SocialMediaBar from "./SocialMediaBar";

export default function Video() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#efece8]">
      <div className="order-1 md:order-2 md:w-1/2 p-4 md:p-0 md:ml-44">
        <p className="md:p-12 p-8 pb-0 md:mt-36 pt-1 text-xl md:text-3xl whitespace-pre-line font-SatoshiRegular text-[#171936] md:pb-0">
          Trabalho a 2 anos dando <b>aulas de violino</b> no projeto social e
          cultural <b>Casa Verde</b>, além de tocar na orquestra da Fundação
          Solidariedade.
          <br />
          <br />
          Ensino pessoas a expressar emoção e conexão por meio da música através
          de <b>aulas online</b> e presenciais, além de atuar em performances
          musicais de diversos tipos.
          <br />
          <br />
          Quer entrar em contato comigo? É só me chamar em uma rede social ou
          via e-mail. 🎻
        </p>
        <div className="md:ml-12 justify-center flex md:justify-start m-8 mb-4 md:m-0">
          <SocialMediaBar />
        </div>
      </div>
      <div className="order-2 w-10/12 md:order-1 md:w-4/12 md:mt-24 md:ml-48 flex justify-center md:justify-end md:mb-24">
        <video
          className="w-full h-auto rounded-full"
          src={videoBg}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
