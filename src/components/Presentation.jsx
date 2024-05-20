import React from 'react';
import myllenaImg from '../assets/art14-cropped2.png';

function Presentation() {
    return (
      <div className="flex flex-col md:flex-row justify-center bg-[#E1E0DF]">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/2">
            <h1 className="pl-8 md:pl-10 md:pt-12 pt-2 text-5xl md:text-9xl md:pl-2 whitespace-pre-line text-[#171936] main-presentation-text">Myllena Farias</h1>
            <p className="md:p-12 p-8 pb-0 pt-1 text-xl md:text-3xl whitespace-pre-line font-SatoshiRegular text-[#171936]">
              Oi, tudo bem? Sou a Myllena, tenho 20 anos e sou <b>violinista</b>, atualmente cursando Bacharelado na Escola de Música e Belas Artes do Paraná (EMBAP).{'\n'} {'\n'}
              Me dedico ao estudo do <b>violino</b> desde os 13 anos e continuo me aprimorando e explorando o caminho da música.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-auto">
            <img src={myllenaImg} alt="Myllena Farias" className="w-full h-auto"/>
          </div>
        </div>
      </div>
    );
  }
  
  

export default Presentation;