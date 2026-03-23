"use client";

import { motion } from "framer-motion";
import { Shield, Code, Clock, Repeat, Lock, Headphones } from "lucide-react";

export default function FeaturesBento() {
  return (
    <section className="py-24 relative z-10" id="Product">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            SecurePay - Fast, Simple and <span className="text-secondary glow-secondary">Secure</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cost-effective solutions tailored to fit your needs. Explore the features that drive modern omnicommerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Card 1: SecureGuard (Spans 2 columns on desktop) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-secondary/20 transition-all duration-500" />
            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-obsidian flex items-center justify-center text-secondary border border-secondary/30 relative">
                <Shield size={28} className="relative z-10" />
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl animate-ping" />
              </div>
              <h3 className="text-2xl font-bold font-heading">SecureGuard</h3>
            </div>
            <div className="relative z-10">
              <p className="text-gray-400 mb-6 max-w-lg">
                An enhanced security product developed for MOTO, Card Present (Swiped), and E-Commerce transactions using encrypted data. SecureGuard transparently defends malicious fraud and hacking attempts while protecting your merchant account.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">Card-Not-Present</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">MOTO</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: API */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary">
                  <Code size={28} />
                </div>
                <h3 className="text-2xl font-bold font-heading">Robust API</h3>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-3">
                <div className="bg-obsidian/50 p-4 rounded-xl border border-white/5 flex flex-col gap-2 font-mono text-xs text-gray-400">
                  <span className="text-secondary">POST</span>
                  <span>/v1/payments/secure</span>
                  <span className="text-green-400">200 OK</span>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">Condensed, developer-friendly documentation with dedicated integration specialists.</p>
            </div>
          </motion.div>

          {/* Card 3: Variable Batch Time */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
          >
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-white">
                    <Clock size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Variable Batch Time</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">You control your business. Set your own batch settlement times during established cut off times.</p>
             </div>
             
             <div className="relative z-10 flex flex-col items-center justify-center flex-1 bg-obsidian/40 rounded-xl p-4 border border-white/5">
                <div className="text-lg font-bold text-white flex items-baseline gap-1">
                  <span>Next Day</span>
                  <span className="text-sm text-primary">Funding</span>
                </div>
             </div>
          </motion.div>

          {/* Card 4: Recurring Billing & PCI Support (Spans 2 columns on desktop) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col sm:flex-row gap-8"
          >
            <div className="flex-1 relative z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Repeat size={24} />
                  <h3 className="text-2xl font-bold font-heading">Recurring Billing</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Setup automated billings for an individual customer via credit card or ACH. Define amounts and specific cycles easily.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-white/80">
                      <Lock size={16} />
                      <h4 className="font-semibold text-sm">PCI Compliant</h4>
                    </div>
                    <p className="text-xs text-gray-400">Completely PCI certified environment avoiding high liability costs for any breach of cardholder data.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-white/80">
                      <Headphones size={16} />
                      <h4 className="font-semibold text-sm">24/7/365 Support</h4>
                    </div>
                    <p className="text-xs text-gray-400">Our trained support specialists are prepared to assist you around the clock with a first call resolution in mind.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Abstract visual for subscriptions */}
            <div className="hidden sm:flex flex-1 h-full relative min-h-[150px] items-center justify-center">
               <div className="w-full h-full border border-white/5 rounded-2xl flex flex-col items-center justify-center bg-obsidian/40 backdrop-blur-sm gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/5" />
                  <div className="w-[80%] h-12 bg-white/5 rounded-lg border border-white/10 flex items-center px-4 justify-between">
                    <span className="text-sm text-gray-300">Automated Billing</span>
                    <span className="text-xs text-green-400 font-bold">✓</span>
                  </div>
                  <div className="w-[80%] h-12 bg-white/5 rounded-lg border border-white/10 flex items-center px-4 justify-between opacity-70">
                    <span className="text-sm text-gray-400">Custom Cycle</span>
                    <span className="text-xs text-green-400 font-bold">✓</span>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
