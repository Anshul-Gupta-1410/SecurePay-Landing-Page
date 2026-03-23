"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store, Coffee, Car, Wrench, Scissors, Utensils } from "lucide-react";
import Image from "next/image";

const SOLUTIONS = [
  { 
    name: "Retail Stores", 
    icon: Store,
    desc: "Check out which products are hot and which are not! Pull product reports and even reorder products. Manage the entire inventory."
  },
  { 
    name: "Cafes & Delis", 
    icon: Coffee,
    desc: "Speedy transactions with smooth point of sale for your business sell your products and services efficiently without disruptions!"
  },
  { 
    name: "Car & Limousine", 
    icon: Car,
    desc: "Taking customers from point A- to-B is my job and every time I finished my job I had to wait for the central office. Now I do it on the spot!"
  },
  { 
    name: "Messenger Services", 
    img: "/Messenger Services.png",
    desc: "As a messenger I have too many tasks to complete on an hourly basses having my personal POS with me makes my job faster and productive!"
  },
  { 
    name: "Servicing", 
    icon: Wrench,
    desc: "Schedule a job. assign employees and bill customers.servicing customers is easy as 1,2, 3, Get your customers in and out the shop efficiently and quickly!."
  },
  { 
    name: "Salons & Spas", 
    icon: Scissors,
    desc: "Too many customers to keep track of? Now you can schedule appointments on calendar give commissions to your employees and ring up products at the POS screen!"
  },
  { 
    name: "Street Vendors", 
    img: "/Street Vendors.png",
    desc: "Having my POS with me every weekend makes my business more productive and efficient instead of waiting beginning of the week to run all the transactions!"
  },
  { 
    name: "Restaurants", 
    icon: Utensils,
    desc: "My job as a waiter is hectic already, keeping track of all the tables and customers is another headed that I don’t need …using my personal POS make my life easier!"
  },
];

export default function DashboardPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 uppercase tracking-wider">
          <span className="text-primary glow-primary">Markets & Solutions</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          360 Degree View With SecurePay. Whether you run a cafe, scale an enterprise, or dispatch a fleet, we have tailored POS and gateway solutions.
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
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
                {SOLUTIONS.map((sol, index) => {
                  const isHovered = hoveredIndex === index;
                  return (
                    <motion.div 
                      key={index}
                      layout
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      className="bg-obsidian/80 border border-white/5 rounded-xl p-5 flex flex-col items-center gap-3 cursor-pointer min-h-[140px] transition-colors hover:border-secondary/50"
                    >
                      <motion.div layout className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary relative overflow-hidden">
                        {sol.icon ? (
                          <sol.icon size={24} />
                        ) : sol.img ? (
                          <div className="p-2 relative w-full h-full flex justify-center items-center opacity-80 filter invert grayscale brightness-200">
                            <Image src={sol.img} alt={sol.name} width={28} height={28} className="object-contain" />
                          </div>
                        ) : null}
                      </motion.div>
                      <motion.span layout className="text-sm font-bold text-gray-200">
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
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-primary font-bold mb-2">Easy Shop</h4>
                  <p className="text-xs text-gray-400">Free shopping cart solution for linking merchant websites to our virtual payment gateway securely.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-secondary font-bold mb-2">Third Party Shopping Cart</h4>
                  <p className="text-xs text-gray-400">Seamlessly works with a wide range of providers. Welcome integration of new shopping carts.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-white font-bold mb-2">Customer Vault</h4>
                  <p className="text-xs text-gray-400">Store customer information securely via tokenization without accessing cardholder data directly.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
