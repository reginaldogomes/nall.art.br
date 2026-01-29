import { Instagram } from "lucide-react";
import { SiSoundcloud, SiTiktok } from "react-icons/si";

export const contactData = {
  email: "contato@nall.art.br",
  phone: "5531998811678",
  socials: [
    {
      name: "Instagram",
      href: "https://instagram.com/nall_music",
      icon: Instagram,
      hoverColor: "hover:text-[#E4405F]",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/nall.dj",
      icon: SiTiktok,
      hoverColor: "hover:text-[#00F2EA]",
    },
    {
      name: "SoundCloud",
      href: "https://soundcloud.com/nallmusic",
      icon: SiSoundcloud,
      hoverColor: "hover:text-[#FF5500]",
    },
  ],
};
