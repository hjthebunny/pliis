"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface LogoProps {
  scale: number;
}

const Logo: React.FC<LogoProps> = ({ scale }) => {
  const router = useRouter();
  return (
    <Image
      width={scale}
      height={scale}
      src="/logo.png"
      alt="logo"
      className="mb-[32px] cursor-pointer"
      onClick={() => router.push("/")}
      priority={true}
    />
  );
};

export default Logo;
