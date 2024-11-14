import { ReactNode } from "react";
import { Container } from "./styles";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="container ">{children}</div>
    </Container>
  );
}