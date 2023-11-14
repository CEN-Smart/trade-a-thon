"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/tradeathon-logo.jpg";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface LogoProps {
  onClose?: () => void;
  className?: string;
}
const Logo = ({ onClose, className }: LogoProps) => {
  const router = useRouter();
  const goToHome = useCallback(() => {
    router.push("/");
    onClose?.();
  }, [router, onClose]);

  return (
    <>
      <Link className={className} onClick={goToHome} href="/">
        <Image src={logo} alt="Logo" width={40} height={40} priority />
      </Link>
    </>
  );
};

export default Logo;
