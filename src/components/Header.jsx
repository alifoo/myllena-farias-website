import React from "react";

function Header({ scrollToVideo, scrollToFooter }) {
  return (
    <header className="flex justify-center bg-[#171936] items-center">
      <nav className="flex p-2">
        <a
          href="#"
          onClick={scrollToVideo}
          className="nav-link cursor-pointer no-underline hover:underline"
        >
          Sobre mim
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5541984742479&text=Oi!%20Gostaria%20de%20agendar%20uma%20aula%20de%20violino"
          className="nav-link no-underline hover:underline"
        >
          Agende uma aula
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToFooter();
          }}
          className="nav-link no-underline hover:underline"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;
