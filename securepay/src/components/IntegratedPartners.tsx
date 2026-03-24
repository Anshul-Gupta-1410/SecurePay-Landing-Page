"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntegratedPartners() {
  const PARTNERS = [
    { name: "QuickBooks", img: "/quickbooks.png" },
    { name: "PayPal", img: "/Paypal.png" },
    { name: "3D Secure", img: "/3Dsecure.png" },
    { name: "Stripe", img: "/Stripe.png" },
    { name: "Stable Coin", img: "/Stablecoin.png" },
  ];

  return (
    <section className="py-16 bg-obsidian-light border-y border-white/5 relative z-10" id="integration">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold font-heading mb-3 uppercase tracking-[0.2em] text-white">
          <span className="text-primary glow-primary">Integrated</span> Partners
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-10">
          Get fast, simple reporting integrations and cost savings securely in one platform. Affordable solutions designed for your needs.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3 text-gray-500 hover:text-primary transition-colors cursor-pointer group"
            >
              <div className="group-hover:drop-shadow-[0_0_10px_rgba(0,209,255,0.8)] transition-all grayscale group-hover:grayscale-0">
                <Image src={partner.img} alt={partner.name} width={50} height={50} className="object-contain w-auto h-auto" />
              </div>
              <span className="text-xs font-bold tracking-wider">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
