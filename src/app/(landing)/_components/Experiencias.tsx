"use client";

import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const useScaleFactor = (baseWidth = 1440) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setScale(width / baseWidth);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [baseWidth]);

  return scale;
};

const getSafeScaledPosition = (x: number, y: number, scale: number) => {
  if (typeof window === "undefined") return [x, y];

  const screenWidth = window.innerWidth;
  const maxOffset = screenWidth * 0.4;

  const scaledX = x * scale;
  const scaledY = y * scale;

  const clampedX = Math.max(-maxOffset, Math.min(maxOffset, scaledX));
  return [clampedX, scaledY];
};

export const Experiencias = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const scale = useScaleFactor(1440);

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: { autoplay: isPlaying ? 1 : 0, controls: 1 },
  };

  const thumbs = [
    "/exp1.png",
    "/exp2.png",
    "/exp3.png",
    "/exp4.png",
    "/exp5.png",
    "/exp6.png",
  ];

  const leftImageConfigs = [
    { src: "/exp6.png", finalX: -145, finalY: 100 },
    { src: "/exp5.png", finalX: 20, finalY: -120 },
    { src: "/exp1.png", finalX: -120, finalY: -140 },
  ];

  const rightImageConfigs = [
    { src: "/exp3.png", finalX: 120, finalY: 40 },
    { src: "/exp4.png", finalX: 0, finalY: 0 },
    { src: "/exp2.png", finalX: 240, finalY: -200 },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "w-full py-32 flex flex-col items-center justify-center px-2 relative overflow-hidden"
      )}
    >
      <h3 className={cn("text-[32px] font-extrabold text-[#CAB167] uppercase")}>
        Experiências One
      </h3>
      <p className={cn("text-white/80 mb-10")}>Veja tudo que rolou até agora</p>

      <div className="relative w-full max-w-6xl flex items-center justify-center">
        <div className="hidden lg:flex flex-col gap-8 absolute left-0">
          {leftImageConfigs.map((config, i) => {
            const [x, y] = getSafeScaledPosition(
              config.finalX,
              config.finalY,
              scale
            );
            return (
              <AnimatedImage
                key={i}
                src={config.src}
                from="left"
                finalX={x}
                finalY={y}
                visible={isInView}
              />
            );
          })}
        </div>

        <div className="relative w-full max-w-3xl aspect-video rounded-[8px] overflow-hidden z-10">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              aria-label="Play video"
              className="w-full h-full relative flex items-center justify-center group lg:w-[620px] lg:h-[384px] mx-auto"
            >
              <Image
                src="https://img.youtube.com/vi/IFYy7MZZ0A4/hqdefault.jpg"
                alt="Thumb"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="z-10 flex items-center justify-center w-[69px] h-[69px] bg-[#B9B9B9] rounded-full pl-1 transition-transform group-hover:scale-110 shadow-lg">
                  <Image src="/play.png" alt="Play" width={36} height={36} />
                </div>
              </div>
            </button>
          ) : (
            <YouTube
              videoId="IFYy7MZZ0A4"
              opts={opts}
              className="aspect-video lg:w-[620px] lg:h-[384px] mx-auto"
            />
          )}
        </div>

        <div className="hidden lg:flex flex-col gap-8 absolute right-0">
          {rightImageConfigs.map((config, i) => {
            const [x, y] = getSafeScaledPosition(
              config.finalX,
              config.finalY,
              scale
            );
            return (
              <AnimatedImage
                key={i}
                src={config.src}
                from="right"
                finalX={x}
                finalY={y}
                visible={isInView}
              />
            );
          })}
        </div>
      </div>

      <div className="lg:hidden w-full mt-6">
        <Carousel className="w-full">
          <CarouselContent className="-ml-[10px] flex gap-2">
            {thumbs.map((src, index) => (
              <CarouselItem
                key={src}
                className="basis-[160px] shrink-0 grow-0 pl-[10px]"
              >
                <div className="relative w-[160px] h-[160px] rounded-[8px] overflow-hidden">
                  <Image
                    src={src}
                    alt={`Experiência ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

type AnimatedImageProps = {
  src: string;
  from: "left" | "right";
  finalX: number;
  finalY: number;
  visible: boolean;
};

const AnimatedImage = ({
  src,
  from,
  finalX,
  finalY,
  visible,
}: AnimatedImageProps) => {
  const startX = from === "left" ? -600 : 600;

  return (
    <motion.div
      initial={{ x: startX, y: finalY, opacity: 0 }}
      animate={visible ? { x: finalX, y: finalY, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.5,
      }}
      className="relative overflow-hidden"
    >
      <img src={src} alt="exp" className="object-cover" />
    </motion.div>
  );
};
