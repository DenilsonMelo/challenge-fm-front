import { TitleSection } from "../layout/Header/styles";
import { Container, CarLabels, CarContent } from "./styles";

export default function Cars() {
  return (
    <Container>
      <TitleSection>Veículos</TitleSection>
      <CarLabels>
        <span>ID</span>
        <span>Modelo</span>
        <span>Tipo</span>
      </CarLabels>
      <CarContent>
        <span>1</span>
        <span>Perua</span>
        <span>Van</span>
      </CarContent>
    </Container>
  );
}
