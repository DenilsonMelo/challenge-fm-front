"use client";

import Aside from "@/components/layout/Aside";
import Header from "@/components/layout/Header";
import { ContainerLayout } from "@/components/layout/styles";

export default function Layout() {
  return (
    <ContainerLayout>
      <Header />
      <Aside />
    </ContainerLayout>
  );
}