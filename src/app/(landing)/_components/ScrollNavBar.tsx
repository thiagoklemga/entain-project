"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";

type Item = {
  id: string;
  label: string;
  icon: string;
};

const items: Item[] = [
  { id: "beneficios", label: "Benefícios ONE", icon: "Sports" },
  { id: "promocoes", label: "Promoções Exclusivas", icon: "Offers" },
  { id: "suporte", label: "Meu Gerente", icon: "Support" },
  { id: "sobre", label: "Sobre o Clube", icon: "Info" },
];

export function ScrollNavBar() {
  const [active, setActive] = React.useState<string>(""); // <- começa vazio

  React.useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const handleScroll = () => {
      let current = "";
      const offset = 150;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
          current = section.id;
          break;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // checa logo no início
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClick = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      className={cn(
        "lg:mb-10 mt-10 lg:mt-20 sticky top-4 z-50 justify-self-center "
      )}
    >
      <div
        className={cn(
          "mx-auto inline-flex items-center ",
          "rounded-full border bg-[#FFFFFF14] border-[#FFFFFF33]",
          "h-14 p-2"
        )}
      >
        <nav className={cn("flex items-center gap-2")}>
          {items.map(({ id, label, icon: Icon }) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => onClick(id)}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex items-center px-4 py-3 rounded-full transition-all duration-300 cursor-pointer",
                  "text-white/80 hover:text-white hover:bg-white/10",
                  isActive && "bg-white/10"
                )}
              >
                <Image
                  src={`/${Icon}.png`}
                  alt={label}
                  width={16}
                  height={16}
                  className="transition-transform group-hover:scale-110"
                />

                <span
                  className={cn(
                    "text-sm font-bold overflow-hidden whitespace-nowrap transition-all duration-200",
                    isActive ? "inline-block pl-2" : "hidden",
                    "lg:inline-block lg:pl-2"
                  )}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
