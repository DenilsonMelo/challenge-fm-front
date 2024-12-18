import { DriverResponseData } from "@/domain/Driver";
import { TitleSection } from "../layout/Header/styles";
import { Container, DriverLabels, DriverContent } from "./styles";
import { Fragment } from "react";
import SearchInput from "../common/SearchInput";

type DriversProps = {
  data: DriverResponseData[];
};

export default function Drivers({ data }: DriversProps) {
  return (
    <Container>
      <TitleSection>Motoristas</TitleSection>
      <SearchInput placeholder="Buscar motoristas"/>
      <DriverLabels>
        <span>ID</span>
        <span>Nome</span>
      </DriverLabels>
      <DriverContent>
        {data.map((item) => (
          <Fragment key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          </Fragment>
        ))}
      </DriverContent>
    </Container>
  );
}
