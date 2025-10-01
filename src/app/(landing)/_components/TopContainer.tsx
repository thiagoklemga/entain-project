"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const TopContainer = () => {
  return (
    <section
      className={cn(
        "flex flex-col gap-[28px] w-full max-w-5xl pl-[17px] pr-[15px] pt-11",
        "lg:flex-row lg:pt-20 lg:gap-0 lg:justify-between lg:items-center lg:pl-0 lg:pr-0"
      )}
    >
      <div className={cn("flex flex-col", "lg:max-w-[442px]")}>
        <Image
          src="/TopContainerImage.png"
          alt="Top Container Image"
          width={306}
          height={261}
          className={cn(
            "mx-auto transition-transform duration-300 hover:scale-105",
            "lg:w-[528px] lg:h-[450px] lg:mx-0"
          )}
        />
        <h2
          className={cn(
            "font-extrabold text-[64px] text-[#CAB167] leading-14 mb-4",
            "lg:text-[64px] lg:leading-[72px]"
          )}
        >
          O JOGO ALÉM DO JOGO.
        </h2>
        <p>
          Você agora é parte do <b>Sportingbet ONE</b>: o clube feito para quem
          sabe <b>que experiências valem tanto quanto resultado</b>.
        </p>
      </div>

      <Image
        src="/TopContainerImage.png"
        alt="Top Container Image"
        width={306}
        height={261}
        className={cn("mx-auto", "lg:w-[528px] lg:h-[450px] lg:mx-0")}
      />
    </section>
  );
};
