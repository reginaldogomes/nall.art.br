import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Dados agora fixos dentro do componente
  const phoneNumber = "5531998811678";
  const message = "Olá! Gostaria de fazer um orçamento para um evento.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        relative
        inline-flex
        h-12
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-gradient-to-r from-[#25D366] to-[#128C7E]
        px-6
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:shadow-lg
        hover:ring-2
        hover:ring-green-400/50
        focus:outline-none
        focus:ring-2
        focus:ring-green-400/50
      `}
    >
      <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
      <div className="relative flex items-center">
        <div
          className="
            mr-4
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            transition-transform
            duration-300
            group-hover:scale-110
            group-hover:rotate-12
          "
        >
          <FaWhatsapp className="h-5 w-5 text-[#128C7E]" />
        </div>
        <span className="text-base">Agendar pelo WhatsApp</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
