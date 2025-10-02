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
        "relative flex min-h-screen flex-col items-center text-white",
        "bg-[linear-gradient(180deg,#000E1C_0.94%,#002041_5.49%)]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 hidden top-[600px] lg:block",
          "bg-[url('/BG.png')] bg-no-repeat bg-cover bg-center"
        )}
      />

      <div className="relative z-10 w-full">
        <TopContainer />
        <ScrollNavBar />
        <Experiencias />
        <Beneficios />
        <Promocoes />
        <MeuGerente />
        <Sobre />
      </div>
    </main>
  );
}
