"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Headphones, Gift, Trophy, Info } from "lucide-react";

type Item = {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: Item[] = [
  { id: "beneficios", label: "Benefícios ONE", icon: Trophy },
  { id: "promocoes", label: "Promoções Exclusivas", icon: Gift },
  { id: "suporte", label: "Meu Gerente", icon: Headphones },
  { id: "sobre", label: "Sobre o Clube", icon: Info },
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
    <section className={cn("py-6 sticky top-4 z-50")}>
      <div
        className={cn(
          "mx-auto inline-flex items-center justify-center",
          "rounded-[100px] border-2 bg-[#FFFFFF14] border-[#FFFFFF33] backdrop-blur",
          "h-[60px] px-1"
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
                  "flex items-center p-[14px] rounded-full transition-all",
                  "text-white hover:bg-white/10",
                  isActive && "lg:ring-1 lg:bg-white/10"
                )}
              >
                <Icon width={16} height={16} />
                <span
                  className={cn(
                    "text-sm font-medium tracking-wide overflow-hidden whitespace-nowrap transition-all duration-200",
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
