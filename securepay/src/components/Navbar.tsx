import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-transparent">
      <div className="flex items-center">
        <a href="/">
          <Image src="/logo.png" alt="SecurePay" width={172} height={59} className="object-contain w-auto h-auto" priority />
        </a>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
        <a href="#Product" className="hover:text-white transition-colors">Features</a>
        <a href="#features" className="hover:text-white transition-colors">Solutions</a>
        <a href="https://boarding.securepay.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Boarding</a>
        <a href="https://support.securepay.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Support</a>
        <a href="https://my.securepay.com/login.aspx" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Login</a>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="tel:+12122780900" className="glass-panel text-white py-2 px-6 rounded-full font-bold hover:bg-white/10 transition-colors">
          (212) 278-0900
        </a>
      </div>
    </nav>
  );
}
