"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Headphones from "../../../../public/Headphones.png";
import DollarSign from "../../../../public/DollarSign.png";
import Ball from "../../../../public/Ball.png";
import Bag from "../../../../public/Bag.png";
import Gift from "../../../../public/Gift.png";

const benefits = [
  {
    icon: undefined,
    title: "Bônus de aniversário",
    description:
      "R$2.000 de presente para você jogar no mês do seu aniversário.",
  },
  {
    icon: Gift,
    title: "Promoções personalizadas",
    description:
      "Bônus maiores e ofertas criadas com base no seu perfil de jogo.",
    buttonLabel: "Ver minhas Promoções",
  },
  {
    icon: undefined,
    title: "Competições privadas",
    description: "Torneios e prêmios criados só para membros Sportingbet ONE.",
  },
  {
    icon: DollarSign,
    title: "Cashback semanal",
    description: "Jogue mais. Ganhe mais. Parte do valor volta pra você.",
    buttonLabel: "Ver meu Cashback",
    type: "primary",
  },
  {
    icon: Bag,
    title: "Eventos e presentes exclusivos",
    description: "De viagens internacionais a surpresas entregues na sua casa.",
    buttonLabel: "Falar com meu Gerente",
  },
  {
    icon: Headphones,
    title: "Atendimento dedicado",
    description:
      "Um gerente de conta exclusivo para te acompanhar sempre que precisar.",
    buttonLabel: "Falar com meu Gerente",
  },
  {
    icon: Ball,
    title: "Viva os grandes jogos ao vivo",
    description:
      "Camarote Sportingbet ONE no Maracanã e convites para curtir Palmeiras, Libertadores, Sul-Americana e NBA.",
    buttonLabel: "Falar com meu Gerente",
  },
];

const items = [
  { title: "Atendimento dedicado e exclusivo", image: "Support1" },
  { title: "Bônus mais altos e personalizados", image: "Rewards" },
  { title: "Camarote ONE no Maracanã", image: "VIP Cabin" },
  { title: "R$ 2.000 de bônus no mês do seu aniversário", image: "Birthday" },
  { title: "Competições exclusivas ONE", image: "Tournaments" },
  {
    title: "Ingressos para Libertadores e Sul-Americana",
    image: "CONMEBOL",
  },
  { title: "Cashback semanal", image: "Processing Payment" },
  { title: "Torneios privados de Cassino", image: "Roulette" },
  {
    title: "Ingressos para jogos do Palmeiras no Allianz Parque",
    image: "Soccer",
  },
  { title: "Acesso antecipado a jogos e promoções", image: "Promotions" },
  { title: "Convites para eventos Sportingbet ONE", image: "Top Events" },
  {
    title: "Ingressos para jogos da NBA nos Estados Unidos",
    image: "Basketball",
  },
  { title: "Presentes exclusivos entregues na sua casa", image: "Test" },
];

export const Beneficios = () => {
  return (
    <section
      id="beneficios"
      className="w-full px-4 pt-[187px] lg:pt-[calc(187px+32px)] flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-[32px] leading-[64px] font-extrabold uppercase text-[#CAB167]">
        Benefícios Sportingbet One
      </h2>

      <p>
        <b>ONE</b> é sobre enxergar valor na experiência, não apenas no
        resultado.{" "}
      </p>
      <p className="mb-6  ">
        {" "}
        Aqui, cada detalhe importa. Cada convite fala por si. Cada benefício é{" "}
        <b>reconhecimento</b>.
      </p>

      <div className="hidden lg:grid grid-cols-3 gap-6 w-full max-w-[1200px] text-white">
        <div className="flex flex-col gap-6">
          <BenefitCard {...benefits[0]} />
          <BenefitCard {...benefits[1]} />
          <BenefitCard {...benefits[2]} />
        </div>

        <div className="flex flex-col gap-6">
          <BenefitCard {...benefits[3]} />
          <BenefitCard {...benefits[4]} />
        </div>

        <div className="flex flex-col gap-6">
          <BenefitCard {...benefits[5]} />
          <BenefitCard {...benefits[6]} />
        </div>
      </div>

      <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[700px] mt-6">
        {benefits.map((benefit, i) => (
          <BenefitCard key={i} {...benefit} />
        ))}
      </div>

      <Accordion
        type="single"
        defaultValue="beneficios"
        collapsible
        className="w-full mt-[68px] lg:max-w-5xl"
      >
        <AccordionItem value="beneficios">
          <AccordionTrigger className="text-sm font-bold text-center gap-2 justify-center text-white lg:pb-8">
            Conferir todos os benefícios ONE
          </AccordionTrigger>
          <AccordionContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                  <div className="flex items-center min-w-10 h-10 justify-center border border-[#CAB167] rounded-full">
                    <Image
                      src={`/${item.image}.png`}
                      alt={item.title}
                      width={16}
                      height={16}
                      className="text-[#CAB167]"
                    />
                  </div>
                  <span className="text-sm font-bold text-start">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const BenefitCard = ({
  icon: Icon,
  title,
  description,
  buttonLabel,
  type,
}: BenefitCardProps) => {
  return (
    <div
      className={cn(
        "flex items-start gap-4 p-4 w-full h-full",
        "rounded-[8px] border border-[#EAEBEC0D] bg-[#FFFFFF0D] transition-transform duration-300",
        "hover:scale-[1.02] hover:bg-[#FFFFFF14]",
        "lg:flex-col lg:items-center lg:text-center lg:justify-center",
        (title === "Cashback semanal" || title === "Atendimento dedicado") &&
          "lg:py-16"
      )}
    >
      {Icon && (
        <Image
          src={Icon}
          alt={title}
          className="w-[58px] h-[58px] lg:w-[110px] lg:h-[110px]"
        />
      )}
      <div className="flex flex-col gap-1 w-full text-left lg:text-center">
        <h4 className="text-xl font-bold text-[#CAB167]">{title}</h4>
        <p>{description}</p>
        {buttonLabel && (
          <button
            className={cn(
              "mt-5 self-start w-full h-11 rounded-[8px] px-4 transition-all duration-300 cursor-pointer",
              "border text-white font-bold text-sm",
              type === "primary"
                ? "bg-[#CAB167] border-[#CAB167] text-[#002041] hover:bg-[#d8c37e]"
                : "border-white hover:bg-white/10",
              "lg:w-auto lg:mx-auto"
            )}
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

type BenefitCardProps = {
  icon?: string | StaticImport;
  title: string;
  description: string;
  buttonLabel?: string;
  type?: string;
  width?: string;
};
