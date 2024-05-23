import React from "react";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-[#171936] text-white p-10 mt-12 md:mt-0">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/3 mb-6">
          <h5
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alisson-ayres/",
                "_blank"
              )
            }
            className="mb-4 font-SatoshiLight hover:underline"
          >
            criado por Alisson Ayres
          </h5>
        </div>

        {/* Contact Information */}
        <div className="w-full sm:w-1/3 mb-6">
          <h5 className="mb-4 font-bold font-SatoshiBold">AULAS PRESENCIAIS</h5>
          <p className="font-SatoshiMedium">Curitiba-PR</p>
          <p className="font-SatoshiMedium">+55 (41) 99248-8366</p>
          <a
            href="mailto:myllena.robfar@gmail.com"
            className="text-white hover:text-gray-400 font-SatoshiMedium"
          >
            myllena.robfar@gmail.com
          </a>
        </div>

        {/* Clickable Topics */}
        <div className="w-full sm:w-1/3 mb-6">
          <h5 className="mb-4 font-bold font-SatoshiBold">LINKS</h5>
          <a
            href="http://fundacaosolidariedade.org/site/?page_id=396"
            className="block mb-2 hover:underline nav-link-footer no-underline"
          >
            Conheça a Casa Verde
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5541984742479&text=Oi!%20Gostaria%20de%20agendar%20uma%20aula%20de%20violino"
            className="block mb-2 hover:underline nav-link-footer no-underline"
          >
            Agende uma aula
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5541984742479&text=Oi!%20Gostaria%20de%20agendar%20uma%20aula%20de%20violino"
            className="block mb-2 hover:underline nav-link-footer no-underline"
          >
            Faça um orçamento
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
