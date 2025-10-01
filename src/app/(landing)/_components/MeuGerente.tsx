"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export const MeuGerente = () => {
  return (
    <section
      id="suporte"
      className={cn("py-16 w-full flex flex-col items-center px-4 mb-[180px]")}
    >
      <div
        className={cn(
          "w-full flex flex-col max-w-4xl rounded-lg p-6 relative overflow-hidden",
          "bg-[linear-gradient(180deg,#002041_0%,#000E1C_100%)]",
          "border border-white/10 shadow-md",
          "lg:flex-row lg:gap-10"
        )}
      >
        <div className={cn("flex justify-center items-center mb-3")}>
          <Image
            src="/Headphones.png"
            alt="Atendimento"
            width={120}
            height={110}
            className={cn(
              "object-contain",
              "lg:h-[160px] lg:w-[160px] lg:object-cover"
            )}
          />
        </div>

        <div>
          <p
            className={cn(
              "text-white font-bold text-sm text-center mb-6",
              "text-start"
            )}
          >
            Atendimento pessoal, com quem entende do seu jogo. Suporte exclusivo
            para membros <b>Sportingbet ONE</b>.
          </p>

          <div
            className={cn(
              "h-[1px] w-full bg-gradient-to-r from-transparent via-[#CAB167] to-transparent mb-6"
            )}
          />

          <h3
            className={cn(
              "text-[#CAB167] text-lg font-extrabold text-center mb-4 uppercase",
              "lg:text-start"
            )}
          >
            {"{{NOME DO GERENTE}}"} está pronto para falar com você!
          </h3>

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

          <p className={cn("text-white/60 text-xs mt-4")}>
            Atendimento: XXh - XXh
          </p>
        </div>
      </div>
    </section>
  );
};
