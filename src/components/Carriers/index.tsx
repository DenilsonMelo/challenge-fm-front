import { TitleSection } from "../layout/Header/styles";
import { Container, CarrierLabels, CarrierContent } from "./styles";

export default function Carriers() {
  return (
    <Container>
      <TitleSection>Transportadoras</TitleSection>
      <CarrierLabels>
        <span>ID</span>
        <span>Nome</span>
      </CarrierLabels>
      <CarrierContent>
        <span>1</span>
        <span>Denilson</span>
        <span>2</span>
        <span>Carlos Augusto</span>
        <span>32</span>
        <span>Pedro</span>
      </CarrierContent>
    </Container>
  );
}
