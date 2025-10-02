"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Sobre = () => {
  const beneficios = [
    "R$ 2.000 de bônus no mês do seu aniversário",
    "Cashback semanal",
    "Atendimento dedicado e exclusivo",
    "Bônus mais altos e personalizados",
    "Competições exclusivas ONE",
    "Torneios privados de Cassino",
    "Acesso antecipado a jogos e promoções",
    "Convites para eventos Sportingbet ONE",
    "Presentes exclusivos entregues na sua casa",
    "Camarote ONE no Maracanã",
    "Ingressos para jogos do Palmeiras",
    "Ingressos para jogos da Libertadores e Sul-Americana",
    "Ingressos para jogos da NBA nos Estados Unidos",
  ];

  return (
    <section
      id="sobre"
      className={cn(
        "pb-16 pt-[calc(180px+64px)] w-full flex flex-col items-center px-4"
      )}
    >
      <h2
        className={cn(
          "text-[32px] font-extrabold uppercase text-[#CAB167] mb-6 text-center"
        )}
      >
        Sobre o Sportingbet One
      </h2>

      <div className={cn("max-w-3xl text-center mb-10 space-y-4")}>
        <p className={cn("text-white/90")}>
          <b>ONE</b> não é pra todo mundo. É um <b>clube exclusivo</b>, feito
          pra quem não quer mais do mesmo. Pra quem valoriza o detalhe, o
          cuidado, a experiência feita sob medida. Aqui, o atendimento e as
          experiências são pensados pra você. Convites únicos, criados pra{" "}
          <b>quem joga diferente</b>.
        </p>

        <p className={cn("text-white/90")}>
          <b>ONE</b> é sobre reconhecer quem faz parte. Sobre estar mais perto.
          Sobre viver o inusitado sem medo, porque você sabe que{" "}
          <b>a emoção não tem replay</b>. O jogo além do jogo não é pra todos.{" "}
          <b>É pra você</b>.
        </p>
      </div>

      <div
        className={cn(
          "w-full max-w-3xl rounded-lg overflow-hidden border border-white/10"
        )}
      >
        <div
          className={cn(
            "grid grid-cols-[50%_25%_25%] px-4 py-3 lg:py-5 text-sm font-bold uppercase text-white/80 bg-transparent items-center"
          )}
        >
          <span></span>
          <img
            src="/Logo (1).png"
            alt="Sportingbet Logo"
            className="block lg:hidden mx-auto"
          />
          <img
            src="/App Icon Logo.png"
            alt="Sportingbet Logo"
            className="hidden lg:block mx-auto"
          />
          <img
            src="/Group 5.png"
            alt="Sportingbet Logo"
            className="block lg:hidden mx-auto"
          />
          <img
            src="/Logo One.png"
            alt="Sportingbet Logo"
            className="hidden lg:block mx-auto"
          />
        </div>

        <div>
          {beneficios.map((beneficio, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-[50%_25%_25%] px-4 py-3 text-white/90 text-sm transition-colors duration-200",
                i % 2 !== 0 ? "bg-transparent" : "bg-[#FFFFFF0D]",
                "hover:bg-white/10"
              )}
            >
              <span>{beneficio}</span>
              <span className="flex justify-center items-center">
                <Image
                  src="/Cancelled.png"
                  alt="Cancelled"
                  width={24}
                  height={24}
                />
              </span>
              <span className="flex justify-center items-center">
                <Image src="/Win.png" alt="Win" width={24} height={24} />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={cn("py-16 w-full flex flex-col items-center mt-[180px]")}>
        <h2
          className={cn(
            "text-[32px] font-extrabold uppercase text-[#CAB167] leading-[64px] text-center"
          )}
        >
          Perguntas Frequentes
        </h2>

        <div className={cn("w-full max-w-3xl rounded-lg overflow-hidden ")}>
          <Accordion
            type="single"
            collapsible
            className="w-full border-none text-sm"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className={cn("border-b border-[#BEC2C6]")}
              >
                <AccordionTrigger className="text-white text-left transition-colors lg:pb-10 lg:pt-9 py-5 duration-200 hover:text-[#CAB167] ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={cn("text-white/80 pb-4 ")}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className={cn(
            "w-full max-w-3xl rounded-lg flex flex-col gap-4 items-start"
          )}
        >
          <div className={cn("flex items-center gap-2")}>
            <Image
              src="/How to play.png"
              alt="Cancelled"
              width={24}
              height={24}
            />{" "}
            <h3 className={cn("text-[#CAB167] font-bold")}>
              Ainda tem dúvidas?
            </h3>
          </div>
          <p className={cn("text-white/80 text-sm")}>
            Entre em contato com o seu gerente, que está pronto para ajudar você
            a aproveitar ao máximo seus benefícios.
          </p>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "Como mantenho meu status de Sportingbet ONE?",
    answer:
      "O Sportingbet ONE é um clube exclusivo para membros convidados. Para manter seu status, basta continuar sendo um cliente ativo e engajado com a marca.",
  },
  {
    question: "Como falar com meu Gerente Sportingbet ONE?",
    answer:
      "Você pode falar diretamente pelo contato fornecido na área do seu gerente no site ou app.",
  },
  {
    question:
      "Onde posso solicitar ingressos para jogos do Palmeiras, CONMEBOL, NBA ou camarote do Maracanã?",
    answer:
      "Os ingressos são oferecidos em promoções exclusivas para membros Sportingbet ONE. Fique atento às comunicações no site.",
  },
  {
    question: "Como funciona o bônus de aniversário?",
    answer:
      "Você recebe R$ 2.000 de presente para jogar no mês do seu aniversário.",
  },
  {
    question: "Como posso me tornar Sportingbet ONE?",
    answer:
      "O Sportingbet ONE é um clube exclusivo para convidados. Continue sendo um jogador ativo para aumentar suas chances.",
  },
  {
    question: "Existe algum custo adicional para ser Sportingbet ONE?",
    answer: "Não, o clube é exclusivo e gratuito para os membros convidados.",
  },
  {
    question: "Posso convidar amigos para serem Sportingbet ONE?",
    answer:
      "O ingresso ao clube é apenas por convite da marca, não é possível convidar amigos diretamente.",
  },
];
