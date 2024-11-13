import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { Actions, Container, TitleSection } from "./styles";

export default function Header() {
  return (
    <Container>
      <TitleSection>Fretes</TitleSection>
      <Actions>
        <IoMdNotificationsOutline size={24} cursor={"pointer"}/>
        <div>
          <div className="user"></div>
          <span>Olá, <strong>Robert</strong></span>
        </div>
        <IoIosArrowDown size={20} cursor={"pointer"}/>
      </Actions>
    </Container>
  );
}
