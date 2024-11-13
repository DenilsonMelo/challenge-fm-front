import styled from "styled-components";

export const ContainerLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 242px 1fr;
  grid-template-rows: 80px 1fr;
  overflow: hidden;

  grid-template-areas: "aside header" "aside main";

  @media (max-width: 991px) {
    grid-template-areas: "header header" "main main";
  }
`;