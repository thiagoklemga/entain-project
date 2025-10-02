"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const Promocoes = () => {
  return (
    <section
      id="promocoes"
      className={cn(
        "relative w-full min-h-[60vh] flex items-center justify-center mt-[200px] lg:mt-[260px]"
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

      <div className="relative z-10 text-center px-4">
        <h2
          className={cn(
            "text-[44px] leading-[64px] font-extrabold uppercase text-[#CAB167]"
          )}
        >
          Promoções Exclusivas
        </h2>

        <p className={cn("mb-8 lg:w-1/2 mx-auto")}>
          Bônus personalizados, ofertas especiais e competições que valem
          experiências únicas — incluindo prêmios internacionais e acesso a
          momentos inesquecíveis.
        </p>

        <button
          className={cn(
            "px-6 h-11 rounded-md font-semibold text-sm border text-white border-white transition-all duration-300 cursor-pointer",
            "hover:bg-white/10 hover:scale-105"
          )}
        >
          Ver Promoções ONE
        </button>
      </div>
    </section>
  );
};
