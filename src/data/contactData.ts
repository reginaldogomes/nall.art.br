import { Instagram } from "lucide-react";
import { SiSoundcloud, SiSpotify, SiTiktok } from "react-icons/si";

export const contactData = {
  email: "ozzynall@gmail.com",
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
    {
      name: "Spotify",
      href: "https://open.spotify.com/artist/5A34rQBiHEUvEHOL3eS61m",
      icon: SiSpotify,
      hoverColor: "hover:text-[#1DB954]",
    },
  ],
};
