"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const Promocoes = () => {
  return (
    <section
      id="promocoes"
      className={cn(
        "relative w-full min-h-[60vh] flex items-center justify-center mb-[180px]"
      )}
    >
      <div className="absolute inset-0">
        <Image
          src="/Pics.png"
          alt="Promoções ONE"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-xl text-center px-4">
        <h2
          className={cn(
            "text-[32px] leading-8 font-extrabold uppercase mb-3 text-[#CAB167]"
          )}
        >
          Promoções Exclusivas
        </h2>

        <p className={cn("mb-8")}>
          Bônus personalizados, ofertas especiais e competições que valem
          experiências únicas — incluindo prêmios internacionais e acesso a
          momentos inesquecíveis.
        </p>

        <button
          className={cn(
            "px-6 h-11 rounded-md font-semibold text-sm border text-white border-white transition-all duration-300",
            "hover:bg-white/10 hover:scale-105"
          )}
        >
          Ver Promoções ONE
        </button>
      </div>
    </section>
  );
};
