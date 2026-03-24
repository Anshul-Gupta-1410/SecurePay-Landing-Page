"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ScanLine, MonitorSmartphone, RefreshCw, Send, FileText } from "lucide-react";
import Image from "next/image";

const SOLUTIONS = [
  { 
    name: "Online Payments", 
    icon: Globe,
    desc: "Accept payments online. Fast. Secure. Reliable. Enable seamless online payments through cards, UPI, net banking and wallets. Built for high success rates."
  },
  { 
    name: "QR Code Payments", 
    icon: ScanLine,
    desc: "Simple scans. Instant payments. Accept payments through static and dynamic QR codes across UPI apps. Ideal for merchants of every size."
  },
  { 
    name: "POS Solutions", 
    icon: MonitorSmartphone,
    desc: "In-store payments, simplified. Accept card, UPI, wallet and contactless payments at physical locations. Keep your checkout lines moving."
  },
  { 
    name: "Auto Collect", 
    icon: RefreshCw,
    desc: "Collect payments automatically, without follow-ups. Automate collections using virtual accounts and smart payment identifiers to improve cash flow."
  },
  { 
    name: "Payout System", 
    icon: Send,
    desc: "Send money instantly, at scale. Disburse payments to vendors, partners, or customers in real time. Fast, secure and compliant fund transfers."
  },
  { 
    name: "BBPS Platform", 
    icon: FileText,
    desc: "One platform for all bill payments. Enable utility, telecom, and bill payments through a BBPS-compliant system. Seamless, trusted way to pay bills."
  },
];

export default function DashboardPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-wider">
          <span className="text-primary glow-primary">Payments & Collections</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          Explore a powerful, modular payment ecosystem built to simplify collections, strengthen security, and help businesses scale effortlessly - online and offline.
        </p>

        {/* Floating Solutions Mockup */}
        <div className="relative mx-auto max-w-5xl perspective-1000">
          <motion.div
            initial={{ rotateX: 20, y: 50, opacity: 0 }}
            whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full relative transform-style-3d glass-panel rounded-3xl border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
             {/* Grid of Industries */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                {SOLUTIONS.map((sol, index) => {
                  const isHovered = hoveredIndex === index;
                  return (
                    <motion.div 
                      key={index}
                      layout
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      className="bg-obsidian/80 border border-white/5 rounded-xl p-5 flex flex-col items-center gap-3 cursor-pointer min-h-[160px] transition-colors hover:border-secondary/50 group"
                    >
                      <motion.div layout className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary relative overflow-hidden group-hover:scale-110 transition-transform">
                        {sol.icon && <sol.icon size={24} />}
                      </motion.div>
                      <motion.span layout className="text-sm font-bold text-gray-200 text-center">
                        {sol.name}
                      </motion.span>
                      
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-gray-400 text-center leading-relaxed">
                              {sol.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
             </div>

             <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-primary font-bold mb-2 tracking-wide uppercase text-sm">Merchant Platform</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">One dashboard. Complete control. Manage merchants, transactions, settlements, and reports from a single unified platform.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-secondary font-bold mb-2 tracking-wide uppercase text-sm">Mobile Applications</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Payments and insights, on the go. Access real-time transaction data, settlements, and account insights anywhere.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-white font-bold mb-2 tracking-wide uppercase text-sm">Devices & Enablement</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Hear every successful payment. Turn your smartphone into a payment acceptance tool. Collect, track, and manage digitally.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
