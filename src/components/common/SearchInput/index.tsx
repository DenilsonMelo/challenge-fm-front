import { FaSearch } from "react-icons/fa";
import { IconWrapper, Input, InputContainer } from "./styles";

export default function SearchInput() {
  return (
    <InputContainer>
      <IconWrapper>
        <FaSearch />
      </IconWrapper>
      <Input type="text" placeholder="Buscar frete" />
    </InputContainer>
  );
}
