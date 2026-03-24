"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Server, Smartphone } from "lucide-react";

const STAGES = [
  {
    id: 1,
    title: "Payments & Collection",
    description: "Accept payments fast online and offline. Through cards, UPI, POS solutions, and automated identifiers built for quick settlements.",
    icon: CreditCard,
  },
  {
    id: 2,
    title: "Banking & Infrastructure",
    description: "Power high-performance UPI transactions with intelligent routing. Designed for massive scale to ensure maximum uptime success.",
    icon: Server,
  },
  {
    id: 3,
    title: "Devices & Enablement",
    description: "Hear every successful payment. Reliable Soundbox devices, smart QR networks, and on-ground POS solutions that perform consistently.",
    icon: Smartphone,
  },
];

export default function PaymentJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <section ref={containerRef} className="py-32 relative" style={{ position: "relative" }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            One platform. <br className="md:hidden" />
            <span className="text-primary glow-primary">Every payment solution.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore a powerful, modular payment ecosystem built to simplify collections, strengthen security, and help businesses scale effortlessly - online and offline.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
          {/* Scroll Path Line */}
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full transform md:-translate-x-1/2" />
          
          {/* Animated Active Line */}
          <motion.div 
            className="absolute left-10 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full transform md:-translate-x-1/2 glow-primary z-0"
            style={{ height: pathHeight, opacity: glowOpacity }}
          />

          {/* Payment Packet Particle */}
          <motion.div 
            className="absolute left-10 md:left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#ffffff] transform -translate-x-1/2 md:-translate-x-1/2 z-10"
            style={{ top: pathHeight }}
          />

          <div className="flex flex-col gap-24 relative z-20">
            {STAGES.map((stage, index) => (
              <JourneyNode key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyNode({ stage, index }: { stage: any, index: number }) {
  const isEven = index % 2 === 0;
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { margin: "-50% 0px", once: false });

  return (
    <div ref={nodeRef} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Content */}
      <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
        <motion.div
           animate={{
            scale: isInView ? 1.05 : 0.95,
            opacity: isInView ? 1 : 0.4,
           }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
           className="glass-panel p-8 rounded-2xl hover:scale-[1.07] transition-transform duration-300 hover:glow-secondary cursor-pointer relative overflow-hidden group"
        >
          <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary/40 transition-colors">
              <stage.icon size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">{stage.title}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {stage.description}
          </p>
        </motion.div>
      </div>

      {/* Center Node Bloom */}
      <div className="absolute left-10 md:relative md:left-0 md:w-8 flex justify-center -translate-x-[1.1rem] md:translate-x-0 z-20">
        <motion.div
          animate={{
            scale: isInView ? 1.1 : 0.8,
            borderColor: isInView ? "#00D1FF" : "rgba(255,255,255,0.2)",
            boxShadow: isInView ? "0 0 25px rgba(0,209,255,0.9)" : "0 0 0px rgba(0,0,0,0)",
            backgroundColor: isInView ? "#050505" : "rgba(5, 5, 5, 0)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="w-5 h-5 rounded-full border-4"
        />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1 w-1/2" />
    </div>
  );
}
