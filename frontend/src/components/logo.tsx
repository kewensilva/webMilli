import Image from "next/image";
import logo from "../../public/Milli_botao.webp"

export function LogoIcon() {
  return (
    <Image
      src={logo}
      alt="MIlli"
      width={150}
      height={100}
    />
  )
}