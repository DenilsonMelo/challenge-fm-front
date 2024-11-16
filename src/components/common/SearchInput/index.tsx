import { FaSearch } from "react-icons/fa";
import { IconWrapper, Input, InputContainer } from "./styles";

type SearchInputProps = {
  placeholder: string;
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <InputContainer>
      <IconWrapper>
        <FaSearch />
      </IconWrapper>
      <Input type="text" placeholder={placeholder} />
    </InputContainer>
  );
}
