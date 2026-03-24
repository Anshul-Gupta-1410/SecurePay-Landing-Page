"use client";

import { motion } from "framer-motion";
import { DollarSign, ArrowUpRight, Building2, Fingerprint, MapPin, Layers } from "lucide-react";

export default function TrustSecurity() {
  const FACTS = [
    { title: "Active merchants", val: "2500+", icon: Building2 },
    { title: "Transactions", val: "1,200 Cr+", icon: ArrowUpRight },
    { title: "App Rating", val: "4.7", icon: Fingerprint },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-obsidian-light border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="flex-1 w-full relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-center md:text-left">
              Numbers Tell <br />
              <span className="text-secondary glow-secondary">Our Story</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl text-center md:text-left">
              Powered by reliable fintech infrastructure. Trusted by thousands of merchants across India to scale faster and smarter.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {FACTS.map((fact, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="bg-obsidian/80 border border-white/5 rounded-2xl p-6 text-center hover:border-secondary/30 transition-all hover:scale-105"
                >
                  <div className="w-10 h-10 mx-auto rounded-[10px] bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                    <fact.icon size={20} />
                  </div>
                  <div className="text-3xl font-bold font-heading text-white">{fact.val}</div>
                  <div className="text-sm text-gray-500 mt-2 tracking-wide font-medium">{fact.title}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 w-full max-w-lg aspect-square relative flex items-center justify-center overflow-hidden">
            {/* Core Shield replacing the previous design */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative w-80 h-80 rounded-full border border-dashed border-primary/30 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 rounded-full border border-secondary/30 flex items-center justify-center relative"
              >
                {/* Node 1 */}
                <div className="absolute inset-0 flex justify-center">
                  <div className="w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_#7000FF] -translate-y-[6px]" />
                </div>
                {/* Node 2 */}
                <div className="absolute inset-0 flex justify-center rotate-[120deg]">
                  <div className="w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_#7000FF] -translate-y-[6px]" />
                </div>
                {/* Node 3 */}
                <div className="absolute inset-0 flex justify-center rotate-[240deg]">
                  <div className="w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_#7000FF] -translate-y-[6px]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Non-Rotating Center Text */}
            <div className="absolute w-48 h-48 bg-gradient-to-tr from-obsidian to-primary/10 rounded-full backdrop-blur-xl flex flex-col items-center justify-center border border-white/10 shadow-[0_0_40px_rgba(0,209,255,0.2)]">
              <div className="text-white text-lg font-bold">SecurePay</div>
              <div className="text-xs text-primary font-mono tracking-widest mt-2">ACTIVE NODE</div>
            </div>

            {/* Cyber Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
