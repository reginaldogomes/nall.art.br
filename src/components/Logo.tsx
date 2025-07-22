import Image from "next/image";

interface LogoProps {
  alt?: string;
  aspectRatio?: string; // Ex: "1 / 1" para quadrado
  className?: string;
}

const Logo = ({
  alt = "Nall - Deejay and Music Producer",
  aspectRatio = "1 / 1",
  className = "",
}: LogoProps) => {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio }}>
      <Image
        src="/logo.png"
        alt={alt}
        className="object-contain"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Logo;
