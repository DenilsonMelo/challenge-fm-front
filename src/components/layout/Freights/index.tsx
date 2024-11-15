import { FaEdit } from "react-icons/fa";
import {
  Container,
  TableHeader,
  TableContent,
  Actions,
  Content,
  Sidebar,
  SidebarHeader,
} from "./styles";
import SearchInput from "@/components/common/SearchInput";
import { Fragment, useState } from "react";
import FormFreight from "@/components/forms/FormFreight";
import { FreightResponseData } from "@/domain/Freight";

type FreightsProps = {
  data: FreightResponseData[];
};

export default function Freights({ data }: FreightsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Sidebar $isOpen={isOpen}>
        <SidebarHeader>
          <span>Novo Frete</span>
          <div className="close-button" onClick={toggleSidebar}>
            X
          </div>
        </SidebarHeader>
        <FormFreight />
      </Sidebar>
      <Actions>
        <SearchInput />
        <div className="add-button" onClick={toggleSidebar}>
          +
        </div>
      </Actions>
      <Content>
        <TableHeader>
          <span>Numero</span>
          <span>Data</span>
          <span>Transportadora/Embarcadora</span>
          <span>Tipo de carga</span>
          <span>Status</span>
          <span>Custo total (R$)</span>
          <span>Ações</span>
        </TableHeader>
        <TableContent>
          {data.map((item) => (
            <Fragment key={item.id}>
              <span>{item.id}</span>
              <span>{item.dateFreight}</span>
              <span>{item.carrier.name}</span>
              <span>{item.packages.type}</span>
              <span>{item.status}</span>
              <span>{item.payment.amount}</span>
              <FaEdit />
            </Fragment>
          ))}
        </TableContent>
      </Content>
    </Container>
  );
}
