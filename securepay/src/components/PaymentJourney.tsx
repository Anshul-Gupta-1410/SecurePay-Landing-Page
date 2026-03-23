"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Lock, Globe, Server } from "lucide-react";

const STAGES = [
  {
    id: 1,
    title: "The OLB Group, Inc.",
    description: "SecurePay is an industry-leading mobile payment gateway and product of The OLB Group (Nasdaq: OLB), providing top-tier merchant services.",
    icon: Globe,
  },
  {
    id: 2,
    title: "PCI Compliant Technology",
    description: "Designed to secure the processing, transmitting, and storing of all payment card data reliably and safely.",
    icon: Lock,
  },
  {
    id: 3,
    title: "Omnicommerce Solutions",
    description: "Virtual Terminals allow merchants to process credit card transactions manually or via a interface for mobile and tablet solutions.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Advanced Architecture",
    description: "Engineered using service-oriented architecture, supporting advanced technologies including tokenization and point-to-point encryption.",
    icon: Server,
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
    <section ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            About <span className="text-primary glow-primary">SecurePay</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Payment professionals choose SecurePay, the leading browser-based and mobile payment processing solution. A trustworthy selection built with reliability, security, and innovation.
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
            {STAGES.map((stage, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={stage.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                    <div className="glass-panel p-8 rounded-2xl hover:scale-105 transition-transform duration-500 hover:glow-secondary cursor-pointer">
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          <stage.icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white font-heading">{stage.title}</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-10 md:relative md:left-0 md:w-8 flex justify-center -translate-x-[1.1rem] md:translate-x-0">
                    <div className="w-6 h-6 rounded-full bg-obsidian border-4 border-primary shadow-[0_0_15px_rgba(0,209,255,0.5)] z-20" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1 w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
