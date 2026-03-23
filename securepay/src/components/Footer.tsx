"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-obsidian pt-16 pb-8 overflow-hidden z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent glow-secondary" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-white/5 pb-12">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                 <div className="absolute inset-[2px] bg-obsidian rounded-full" />
                 <div className="relative text-white font-heading font-bold text-xs">SP</div>
               </div>
               <span className="text-xl font-bold font-heading text-white tracking-wide">SECUREPAY</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              <b>SecurePay</b> an OmniCommerce payment gateway, a product of The OLB Group, Inc. we’ve combined creativity and security with trustworthiness and developed a payment gateway product offering important solutions for any business, regardless of size and specific needs.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h5 className="text-white font-bold mb-4 font-heading text-sm tracing-wider opacity-80">QUICK LINKS</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
                <li><a href="https://support.securepay.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 font-heading text-sm tracing-wider opacity-80">LOGIN</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="https://boarding.securepay.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Boarding</a></li>
                <li><a href="https://my.securepay.com/login.aspx" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Login</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 font-heading text-sm tracing-wider opacity-80">CONTACT US</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="tel:+12122780900" className="hover:text-secondary transition-colors font-mono">(212) 278-0900</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
           <p>© 2026 All rights reserved. SecurePay a product of The OLB Group, Inc. (Nasdaq: OLB)</p>
           <p className="flex items-center gap-2">
             <span>An</span> 
             <span className="font-semibold text-gray-400">OLB Group</span> 
             <span>Company</span>
           </p>
        </div>
      </div>
    </footer>
  );
}
