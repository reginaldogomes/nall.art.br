import Image from "next/image";
import { cn } from "@/lib/utils"; // use isso se estiver usando Tailwind + className utils

interface LogoProps {
  alt?: string;
  aspectRatio?: string; // Ex: "1 / 1" para quadrado
  className?: string;
}

const Logo = ({
  alt = "Nall - Deejay and Music Producer",
  aspectRatio,
  className,
}: LogoProps) => {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={300}
      height={300}
      className={cn(
        "m-0 p-0 block object-contain",
        aspectRatio && `aspect-[${aspectRatio}]`,
        className
      )}
    />
  );
};

export default Logo;
