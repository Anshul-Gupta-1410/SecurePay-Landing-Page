"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

const FAQ_DATA = {
  "Onboarding": [
    { question: "What is SecurePay payment and how does it work?", answer: "SecurePay payment is a unified digital payment solution that allows businesses to accept, process, and manage transactions securely. Our system connects merchants to multiple payment channels through the SecurePay gateway, ensuring fast settlements, encrypted data flow, and real-time reporting. Whether you’re a startup or enterprise, SecurePay simplifies digital payments while maintaining high security standards." },
    { question: "Can existing SecurePay users upgrade their services?", answer: "Yes. Businesses using existing SecurePay systems can seamlessly upgrade to the latest infrastructure without operational downtime. We ensure smooth migration, improved security enhancements, and access to new features - all without disrupting your current payment flows." },
    { question: "How does SecurePay protect merchant and customer privacy?", answer: "Privacy is a core part of our architecture. SecurePay follows strict encryption standards and compliance protocols to safeguard sensitive data. Every transaction processed via the SecurePay payment network is monitored and secured, ensuring both merchant and customer information remains protected." },
    { question: "Can SecurePay accept any payment type?", answer: "Yes. SecurePay enables businesses to accept any payment type, including UPI, credit cards, debit cards, net banking, digital wallets, and QR-based payments. The unified Gateway SecurePay system ensures smooth processing across all channels from a single dashboard." },
    { question: "Is SecurePay suitable for developers and technical teams?", answer: "Absolutely. Developer SecurePay tools include clean REST APIs, SDKs, sandbox environments, and detailed documentation to simplify integration. SecurePay enabling developers with scalable infrastructure ensures faster deployment and flexible customization options." },
    { question: "How does SecurePay support business growth?", answer: "The SecurePay business ecosystem is designed to help merchants scale confidently. Every SecurePay merchant gets access to real-time analytics, automated reconciliation, compliance support, and risk monitoring tools that enhance operational efficiency and revenue optimization." },
    { question: "What is SecurePay Gateway?", answer: "The SecurePay gateway is a secure and scalable payment processing engine that connects businesses to multiple banks and payment networks. Built for high uptime and reliability, the gateway SecurePay infrastructure ensures consistent performance even during peak transaction volumes." },
    { question: "What is SecurePay Merchant?", answer: "SecurePay Merchant is a secure payment processing app that enables businesses to accept digital payments quickly and safely. It helps merchants manage transactions, track sales, and streamline payment operations in one platform." },
    { question: "How do I get started with SecurePay?", answer: "Sign up on Our Merchant App, complete basic onboarding details, and submit the required documents. Once verified, you can start accepting payments immediately." },
    { question: "What documents are required for onboarding?", answer: "Typically, we require basic KYC documents such as PAN, Aadhaar, bank account details, and business information (if applicable)." },
    { question: "Is SecurePay suitable for small businesses and freelancers?", answer: "Yes. SecurePay is designed for everyone - from individual sellers and freelancers to growing businesses and large enterprises." },
    { question: "How long does onboarding take?", answer: "Onboarding is usually completed within 24 - 48 hours after successful document verification." }
  ],
  "Usage": [
    { question: "What payment methods does SecurePay support?", answer: "SecurePay supports UPI, credit and debit cards, wallets, net banking, QR code payments, and in-store payment modes." },
    { question: "Can I accept any payment type (both online and offline payments)?", answer: "Yes. We Help you accept payments online via payment gateway and offline through QR codes, POS solutions, and Soundbox." },
    { question: "Is there a transaction limit on payments?", answer: "Transaction limits depend on the payment method and banking regulations. Specific limits are visible on your merchant dashboard." },
    { question: "Does SecurePay support recurring or automatic payments?", answer: "Yes. With Auto Collect and smart payment identifiers, we enable automated and recurring collections." },
    { question: "Can I track payments and settlements in real time?", answer: "Absolutely. The dashboard and mobile app provide real-time transaction tracking, settlement reports, and analytics." }
  ],
  "Charges & Pricing": [
    { question: "Is there any setup or monthly fee?", answer: "No, You only pay per transaction." },
    { question: "What are the transaction charges?", answer: "Transaction charges vary based on payment method and business type. Detailed pricing is available during onboarding and on request." },
    { question: "Are there any hidden fees?", answer: "No. We follows a transparent pricing model with no hidden costs." },
    { question: "Are refunds or failed transactions chargeable?", answer: "Charges for refunds or failed transactions, if applicable, are clearly communicated and depend on banking partner policies." },
    { question: "When will I receive my settlements?", answer: "Settlements are processed daily and typically credited within 24 hours. Delays may occur on weekends or bank holidays." }
  ],
  "Network & Cards": [
    { question: "Does SecurePay support international cards?", answer: "Support for international cards depends on your onboarding configuration and compliance requirements." },
    { question: "Are UPI payments supported across all major apps?", answer: "Yes. SecurePay works seamlessly with all major UPI apps and banking partners." },
    { question: "Is there a transaction success rate guarantee?", answer: "While success rates depend on network and bank performance, SecurePay uses smart routing and multiple banking integrations to maximise uptime and success." }
  ],
  "Technology & APIs": [
    { question: "Does SecurePay provide APIs for developers?", answer: "Yes. We offer secure, well-documented APIs and SDKs for payment processing, payouts, reconciliation, and merchant management." },
    { question: "Can I test APIs before going live?", answer: "Yes. Developers can use our Dev Studio to test integrations and workflows in a sandbox environment." },
    { question: "Is SecurePay scalable for high-volume businesses?", answer: "Absolutely. The infrastructure is built to handle high transaction volumes with reliability and performance." }
  ],
  "Security & Compliance": [
    { question: "Is SecurePay Safe?", answer: "SecurePay is PCI-DSS compliant and uses industry-standard encryption to protect all transactions and data." },
    { question: "Is customer data safe with SecurePay?", answer: "Yes. We follow strict data protection practices and comply with regulatory and security standards." },
    { question: "Does SecurePay comply with RBI guidelines?", answer: "Yes. SecurePay operates in alignment with applicable RBI and NPCI guidelines." }
  ],
  "Support": [
    { question: "How do I contact support?", answer: "Our support team is available to assist you with onboarding, transactions, and technical queries. Please visit our Contact Us page and submit the form, and a member of our team will get back to you as soon as possible." },
    { question: "Do you offer dedicated support for enterprises?", answer: "Yes. Enterprise customers can opt for priority support." },
    { question: "How soon will I receive a response from the support team?", answer: "Our support team typically responds within 24 hours for all queries. Priority issues are addressed on an expedited basis." },
    { question: "Is support available 24×7?", answer: "Yes. We offer 24×7 support for critical payment and transaction-related issues to ensure uninterrupted operations." }
  ]
};

const CATEGORIES = Object.keys(FAQ_DATA) as Array<keyof typeof FAQ_DATA>;

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-white/5 bg-obsidian/40 backdrop-blur-sm rounded-xl overflow-hidden mb-4 transition-colors hover:border-white/10">
      <button 
        onClick={onClick}
        className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
      >
        <h4 className="text-white font-medium pr-8 leading-snug">{question}</h4>
        <div className={clsx("flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors", isOpen ? "bg-primary text-white" : "bg-white/5 text-gray-400")}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof FAQ_DATA>("Onboarding");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden bg-obsidian-light border-y border-white/5" id="faq">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Frequently Asked <span className="text-secondary glow-secondary">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about scaling your payments with SecurePay.
          </p>
        </div>

        {/* Category Navbar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(0);
              }}
              className={clsx(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md",
                activeCategory === category 
                  ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(0,209,255,0.2)]"
                  : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items Feed */}
        <div className="flex flex-col max-w-3xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {FAQ_DATA[activeCategory].map((item, index) => (
                <FAQItem 
                  key={`${activeCategory}-${index}`}
                  question={item.question} 
                  answer={item.answer} 
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-500">
           Have more questions? <a href="#contact" className="text-primary hover:underline">Visit Our Support Page</a>
        </div>
      </div>
    </section>
  );
}
