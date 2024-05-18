import React from 'react';

function Header() {
    return (
      <header className="flex justify-center bg-[#171936] items-center">
        <nav className="flex p-2">
          <a href="sobre-mim" className="nav-link cursor-pointer">Sobre mim</a>
          <a href="agende-uma-aula" className="nav-link">Agende uma aula</a>
          <a href="contato" className="nav-link">Contato</a>
        </nav>
      </header>
    );
  }
  

export default Header;