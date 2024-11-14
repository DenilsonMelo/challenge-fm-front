import { FaEdit } from "react-icons/fa";
import {
  Container,
  TableHeader,
  TableContent,
  Actions,
  Content,
  Sidebar,
  MenuItem,
  SidebarHeader,
} from "./styles";
import SearchInput from "@/components/common/SearchInput";
import { useState } from "react";
import FormFreight from "@/components/forms/FormFreight";

export default function Freights() {
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
          <p>XXXXXXX</p>
          <p>XX/XX - XX:XX</p>
          <p>Username Name</p>
          <p>Nome da carga</p>
          <p>Aguardando lance</p>
          <p>R$ 1.220,00</p>
          <FaEdit />
        </TableContent>
        <TableContent>
          <p>XXXXXXX</p>
          <p>XX/XX - XX:XX</p>
          <p>Username Name</p>
          <p>Nome da carga</p>
          <p>Aguardando lance</p>
          <p>R$ 1.220,00</p>
          <FaEdit />
        </TableContent>
      </Content>
    </Container>
  );
}
