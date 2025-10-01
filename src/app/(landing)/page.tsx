"use client";

import { cn } from "@/lib/utils";

import { TopContainer } from "./_components/TopContainer";
import { Beneficios } from "./_components/Beneficios";
import { ScrollNavBar } from "./_components/ScrollNavBar";
import { Experiencias } from "./_components/Experiencias";
import { Promocoes } from "./_components/Promocoes";
import { MeuGerente } from "./_components/MeuGerente";
import { Sobre } from "./_components/Sobre";

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center text-white",
        "bg-[linear-gradient(180deg,#000E1C_0.96%,#002041_4.08%)]"
      )}
    >
      <TopContainer />
      <ScrollNavBar />
      <Experiencias />
      <Beneficios />
      <Promocoes />
      <MeuGerente />
      <Sobre />
    </main>
  );
}
