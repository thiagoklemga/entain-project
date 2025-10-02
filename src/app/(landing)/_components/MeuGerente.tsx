"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export const MeuGerente = () => {
  return (
    <section
      id="suporte"
      className={cn("w-full flex flex-col items-center px-4 pt-[216px]")}
    >
      <div
        className={cn(
          "w-full flex flex-col max-w-3xl rounded-lg p-4 lg:p-6 relative overflow-hidden",
          "bg-[linear-gradient(180deg,#002041_0%,#000E1C_100%)] border border-white/10 shadow-md",
          "transition-transform duration-300 hover:scale-[1.01]",
          "lg:flex-row lg:gap-9"
        )}
      >
        <Image
          src="/Headphones.png"
          alt="Atendimento"
          width={120}
          height={110}
          className={cn(
            "object-contain mx-auto",
            "lg:h-[212px] lg:w-[212px] lg:object-cover"
          )}
        />

        <div className={cn("flex flex-col gap-4")}>
          <p
            className={cn(
              "text-white font-bold text-sm text-center mb-6 lg:mb-0",
              "text-start"
            )}
          >
            Atendimento pessoal, com quem entende do seu jogo. Suporte exclusivo
            para membros <b>Sportingbet ONE.</b>
          </p>

          <h2
            className={cn(
              "text-[#CAB167] text-lg font-extrabold text-start lg:text-center uppercase",
              "lg:text-start"
            )}
          >
            {"{{NOME DO GERENTE}}"} está pronto para falar com você!
          </h2>

          <div className={cn("space-y-2 text-sm text-white")}>
            <div className={cn("flex items-center gap-2")}>
              <Mail className={cn("w-4 h-4 text-[#CAB167]")} />
              <span className={cn("font-semibold")}>email@email.com</span>
            </div>
            <div className={cn("flex items-center gap-2")}>
              <Phone className={cn("w-4 h-4 text-[#CAB167]")} />
              <span className={cn("font-semibold")}>XX XXXXX-XXXX</span>
            </div>
          </div>

          <p className={cn("text-white/60 text-xs")}>Atendimento: XXh - XXh</p>
        </div>
      </div>
    </section>
  );
};
