"use client";

import Aside from "@/components/layout/Aside";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import { ContainerLayout } from "@/components/layout/styles";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ContainerLayout>
      <Header />
      <Aside />
      <Main>{children}</Main>
    </ContainerLayout>
  );
}