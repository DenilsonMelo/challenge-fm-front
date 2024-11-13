import Image from "next/image";
import { Container, Logo, TabItem, Tabs } from "./styles";
import Link from "next/link";
import { RxDashboard, RxExit, RxTextAlignJustify } from "react-icons/rx";
import { PiGear, PiPackage, PiTruckLight } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Aside() {
  const currentPathname = usePathname();
  return (
    <Container>
      <Logo>
        <Image src={"/myIcon.svg"} alt="Frete Mais" width={115} height={56} />
      </Logo>
      <Tabs>
        <TabItem $active={currentPathname === "/home"}>
          <Link href="/home">
            <RxDashboard size={20} />
            Dashboard
          </Link>
        </TabItem>
        <TabItem $active={currentPathname === "/"}>
          <Link href="/">
            <PiPackage size={20} />
            Fretes
          </Link>
        </TabItem>
        <TabItem $active={currentPathname === "/"}>
          <Link href="/">
            <PiTruckLight size={20} />
            Transportadoras
          </Link>
        </TabItem>
        <TabItem $active={currentPathname === "/"}>
          <Link href="/">
            <TbUsers size={20} />
            Motoristas
          </Link>
        </TabItem>
        <TabItem $active={currentPathname === "/"}>
          <Link href="/">
            <PiTruckLight size={20} />
            Veículos
          </Link>
        </TabItem>
      </Tabs>
      <div className="separator"></div>
      <Tabs>
        <TabItem $active={currentPathname === "/"}>
          <Link href="/">
            <PiGear size={20} />
            Configurações
          </Link>
        </TabItem>
        <TabItem $active={currentPathname === "/"}>
          <Link href="/">
          <IoIosHelpCircleOutline size={20} />
            Ajuda
          </Link>
        </TabItem>
        <TabItem $active={currentPathname === "/"}>
          <Link href="/">
            <RxExit size={20} />
            Sair
          </Link>
        </TabItem>
      </Tabs>
    </Container>
  );
}
