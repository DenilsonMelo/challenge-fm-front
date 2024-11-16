import { CarResponseData } from "@/domain/Car";
import { TitleSection } from "../layout/Header/styles";
import { Container, CarLabels, CarContent } from "./styles";
import { Fragment } from "react";
import SearchInput from "../common/SearchInput";

type CarsProps = {
  data: CarResponseData[];
};

export default function Cars({ data }: CarsProps) {
  return (
    <Container>
      <TitleSection>Veículos</TitleSection>
      <SearchInput placeholder="Buscar veículos"/>
      <CarLabels>
        <span>ID</span>
        <span>Modelo</span>
        <span>Tipo</span>
      </CarLabels>
      <CarContent>
        {data.map((item) => (
          <Fragment key={item.id}>
            <span>{item.id}</span>
            <span>{item.model}</span>
            <span>{item.type}</span>
          </Fragment>
        ))}
      </CarContent>
    </Container>
  );
}
