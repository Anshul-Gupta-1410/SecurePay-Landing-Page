"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6"
          >
            Most <span className="text-primary glow-primary">Secure</span> <br />
            Payment Gateway
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Omnicommerce Payment Solutions. A 360 Degree View of Your Business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="bg-primary hover:bg-white text-obsidian font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,209,255,0.4)]">
              Learn More
            </button>
            <button className="glass-panel text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
              Call (855) 452-7135
            </button>
          </motion.div>
        </div>

        {/* Right 3D Visual */}
        <div className="flex-1 relative w-full aspect-square max-w-[600px] flex items-center justify-center">
          {/* Central Orb */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-secondary glow-secondary flex items-center justify-center relative z-20"
          >
            <div className="absolute inset-2 bg-obsidian rounded-full opacity-80 backdrop-blur-3xl" />
            <div className="relative text-white font-heading text-xl font-bold tracking-wider text-center">
              SECUREPAY<br /><span className="text-xs font-normal text-gray-400">by OLB Group</span>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/4 -left-4 md:-left-12 glass-panel p-4 rounded-2xl w-48 z-30 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                ✓
              </div>
              <div>
                <div className="text-xs text-gray-400">System Status</div>
                <div className="font-bold text-white tracking-widest text-sm">SECURED</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-1/4 -right-4 md:-right-12 glass-panel p-4 rounded-2xl w-52 z-30 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">SecureGuard Active</span>
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-secondary w-full h-full animate-[pulse_2s_ease-in-out_Infinity]" />
            </div>
          </motion.div>

          {/* Decorative Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[120%] border border-primary/20 rounded-full border-dashed z-10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[140%] h-[140%] border border-secondary/20 rounded-full z-10"
          />
        </div>
      </div>
    </section>
  );
}
