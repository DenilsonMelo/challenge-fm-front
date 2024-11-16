import { FaEdit, FaTrash } from "react-icons/fa";
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
import FreightService from "@/services/Freight";
import { Fragment, useCallback, useEffect, useState } from "react";
import FormFreight from "@/components/forms/FormFreight";
import { FreightResponseData } from "@/domain/Freight";

type FreightsProps = {
  data: FreightResponseData[];
};

export default function Freights({ data }: FreightsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [freights, setFreights] = useState<FreightResponseData[]>([]);

  useEffect(() => {
    if (data) {
      setFreights(data);
    }
  }, [data]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const addFreight = useCallback((newFreight: FreightResponseData) => {
    setFreights((state) => [...state, newFreight]);
  }, []);

  const removeProcedureCallback = useCallback((idToRemove: string) => {
    setFreights((state) => state.filter((item) => item.id !== idToRemove));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await FreightService.delete(id);

      removeProcedureCallback(id);
    } catch (error) {
      console.error(error)
    }
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
        <FormFreight addFreight={addFreight} />
      </Sidebar>
      <Actions>
        <SearchInput placeholder="Buscar frete" />
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
          {freights.map((item) => (
            <Fragment key={item.id}>
              <span>{item.id}</span>
              <span>{item.dateFreight}</span>
              <span>{item.carrier.name}</span>
              <span>{item.packages.type}</span>
              <span>{item.status}</span>
              <span>{item.payment.amount}</span>
              <span className="actions-icons">
                <FaEdit style={{ cursor: "pointer" }} size={16} />
                <FaTrash
                  style={{ cursor: "pointer" }}
                  size={16}
                  onClick={() => handleDelete(item?.id as string)}
                />
              </span>
            </Fragment>
          ))}
        </TableContent>
      </Content>
    </Container>
  );
}
