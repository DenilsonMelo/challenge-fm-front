import { CarrierResponseData } from "@/domain/Carrier";
import { TitleSection } from "../layout/Header/styles";
import { Container, CarrierLabels, CarrierContent } from "./styles";
import { Fragment } from "react";
import SearchInput from "../common/SearchInput";

type CarriersProps = {
  data: CarrierResponseData[];
};

export default function Carriers({ data }: CarriersProps) {
  return (
    <Container>
      <TitleSection>Transportadoras</TitleSection>
      <SearchInput placeholder="Buscar transportadoras"/>
      <CarrierLabels>
        <span>ID</span>
        <span>Nome</span>
      </CarrierLabels>
      <CarrierContent>
        {data.map((item) => (
          <Fragment key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
          </Fragment>
        ))}
      </CarrierContent>
    </Container>
  );
}
