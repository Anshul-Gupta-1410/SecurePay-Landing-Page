"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Shield, Code, Zap, Terminal, Headphones, BarChart } from "lucide-react";
import React from "react";

function BentoCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5, rotateX: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      className={`glass-panel rounded-3xl relative overflow-hidden group/card transform-style-3d ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/card:opacity-100 z-50"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 209, 255, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function FeaturesBento() {
  return (
    <section className="py-24 relative z-10 perspective-1000" id="Product">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
            For developers. By <span className="text-secondary glow-secondary">developers.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Built for builders who ship fast and scale confidently. Secure. Scalable. Production-ready from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Card 1: Enterprise Reliability */}
          <BentoCard className="md:col-span-2 p-8 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover/card:bg-secondary/20 transition-all duration-500 pointer-events-none" />
            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-obsidian flex items-center justify-center text-secondary border border-secondary/30 relative">
                <Shield size={28} className="relative z-10" />
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl animate-ping" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">Enterprise Reliability</h3>
            </div>
            <div className="relative z-10">
              <p className="text-gray-400 mb-6 max-w-lg leading-relaxed">
                Engineered to stay online. High uptime, rigorous testing, and secure infrastructure logically built to handle massive scale without compromise.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10 uppercase tracking-widest text-[10px]">PCI-DSS</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10 uppercase tracking-widest text-[10px]">RBI Compliant</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: API */}
          <BentoCard className="p-8 flex flex-col justify-between">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary">
                  <Code size={28} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Robust API</h3>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-3">
                <div className="bg-obsidian/50 p-4 rounded-xl border border-white/5 flex flex-col gap-2 font-mono text-xs text-gray-400 shadow-inner">
                  <span className="text-secondary">POST</span>
                  <span>/v1/payments/secure</span>
                  <span className="text-green-400">200 OK</span>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">Clear, complete, and developer-friendly reference matching detailed documentation.</p>
            </div>
          </BentoCard>

          {/* Card 3: Fast Onboarding */}
          <BentoCard className="p-8 flex flex-col justify-between">
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary glow-primary">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-2 text-white">Fast Onboarding</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">Go live in days, not weeks. A simple, guided onboarding process that gets you started quickly — no technical complexity.</p>
             </div>
             
             <div className="relative z-10 flex flex-col items-center justify-center flex-1 bg-obsidian/40 rounded-xl p-4 border border-white/5 mx-auto w-full group">
                <div className="text-xl font-bold text-white flex items-baseline gap-2 transition-transform group-hover:scale-105">
                  <span>Live in</span>
                  <span className="text-xl text-primary tracking-widest font-heading">24 HRS</span>
                </div>
             </div>
          </BentoCard>

          {/* Card 4: Dev Studio Component */}
          <BentoCard className="md:col-span-2 p-8 flex flex-col sm:flex-row gap-8">
            <div className="flex-1 relative z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Terminal size={24} />
                  <h3 className="text-2xl font-bold font-heading text-white">Dev Studio</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Build. Test. Launch. Experiment with APIs, SDKs, and workflows in our interactive developer playground. Simulate transactions before going live.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-white/80">
                      <BarChart size={16} className="text-secondary" />
                      <h4 className="font-semibold text-sm">Actionable Insights</h4>
                    </div>
                    <p className="text-xs text-gray-400">Know more. Earn more. Real-time dashboards converting metrics to meaningful business intelligence.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-white/80">
                      <Headphones size={16} className="text-secondary" />
                      <h4 className="font-semibold text-sm">24/7/365 Support</h4>
                    </div>
                    <p className="text-xs text-gray-400">Payments don’t sleep. Neither do we. Round-the-clock assistance to resolve issues fast.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Abstract visual for Integrations */}
            <div className="hidden sm:flex flex-1 h-full relative min-h-[150px] items-center justify-center">
               <div className="w-full h-full border border-white/5 rounded-2xl flex flex-col items-center justify-center bg-obsidian/40 backdrop-blur-sm gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/10 pointer-events-none" />
                  
                  {/* Floating abstract terminal bits */}
                  <motion.div 
                    initial={{ opacity: 0.5, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[85%] bg-obsidian border border-white/10 rounded-lg p-3 absolute shadow-xl z-20 top-8 -rotate-2"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                       <div className="w-2 h-2 rounded-full bg-red-400" />
                       <div className="w-2 h-2 rounded-full bg-yellow-400" />
                       <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="h-1.5 w-32 bg-white/20 rounded-full mb-1" />
                    <div className="h-1.5 w-24 bg-primary/40 rounded-full" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0.5, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-[85%] bg-white/5 border border-white/5 rounded-lg p-3 absolute z-10 bottom-8 rotate-3 backdrop-blur-xl"
                  >
                    <div className="h-1.5 w-16 bg-white/30 rounded-full mb-2" />
                    <div className="h-1.5 w-full bg-white/10 rounded-full mb-1" />
                    <div className="h-1.5 w-full bg-white/10 rounded-full mb-1" />
                  </motion.div>

               </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
