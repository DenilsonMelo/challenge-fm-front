import { TitleSection } from "../layout/Header/styles";
import { Container, DriverLabels, DriverContent } from "./styles";

export default function Drivers() {
  return (
    <Container>
      <TitleSection>Motoristas</TitleSection>
      <DriverLabels>
        <span>ID</span>
        <span>Nome</span>
      </DriverLabels>
      <DriverContent>
        <span>1</span>
        <span>Denilson</span>
        <span>2</span>
        <span>Carlos Augusto</span>
        <span>32</span>
        <span>Pedro</span>
      </DriverContent>
    </Container>
  );
}
