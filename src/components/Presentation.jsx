import React from 'react';
import myllenaImg from '../assets/art14-cropped2.png';

function Presentation() {
    return (
      <div className="flex justify-center bg-[#E1E0DF]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="pl-12 pt-12 text-6xl md:text-9xl md:pl-2 whitespace-pre-line text-[#171936] main-presentation-text">Myllena Farias</h1>
            <p className="p-12 pt-1 text-xl md:text-4xl whitespace-pre-line font-SatoshiRegular text-[#171936]">
              Oi, tudo bem? Sou a Myllena, tenho 20 anos e sou <b>violinista</b>, atualmente cursando Bacharelado na Escola de Música e Belas Artes do Paraná (EMBAP).{'\n'} {'\n'}
              Me dedico ao estudo do <b>violino</b> desde os 13 anos e continuo me aprimorando e explorando o caminho da música.
            </p>
          </div>
          <div className="">
            <img src={myllenaImg} alt="Myllena Farias" className="w-6/12 md:w-6/12 h-auto"/>
        </div>
        </div>
      </div>
    );
  }
  

export default Presentation;