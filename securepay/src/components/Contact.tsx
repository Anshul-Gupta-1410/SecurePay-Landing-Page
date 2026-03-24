"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float, Sphere, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Contact3DElement() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5} floatingRange={[-0.2, 0.2]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Outer wireframe shell */}
      <Icosahedron ref={meshRef} args={[2.2, 1]}>
        <meshPhysicalMaterial 
          color="#00D1FF" 
          emissive="#00D1FF" 
          emissiveIntensity={0.2} 
          wireframe={true} 
          transparent={true} 
          opacity={0.3} 
        />
      </Icosahedron>
      
      {/* Inner glowing core */}
      <Sphere args={[1.2, 32, 32]}>
        <meshStandardMaterial 
          color="#7000FF" 
          emissive="#7000FF" 
          emissiveIntensity={0.8} 
          roughness={0.2} 
          metalness={1} 
          toneMapped={false} 
        />
      </Sphere>
      
      <pointLight position={[0, 0, 0]} intensity={50} color="#00D1FF" distance={10} />
    </Float>
  );
}

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Abstract background effects */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Form Side */}
          <div className="flex-1 w-full max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Let's get you to the <br />
              <span className="text-primary glow-primary">right place.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              We just need a few quick details to connect you with the right integration specialist.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                
                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-obsidian/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  
                  {/* State & City Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">State</label>
                      <input 
                        type="text" 
                        placeholder="Maharashtra"
                        className="w-full bg-obsidian/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">City</label>
                      <input 
                        type="text" 
                        placeholder="Mumbai"
                        className="w-full bg-obsidian/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Services Needed</label>
                    <select className="w-full bg-obsidian/50 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                      <option value="">Select a service...</option>
                      <option value="gateway">Payment Gateway / Online</option>
                      <option value="qr">QR Code & Soundbox</option>
                      <option value="pos">POS / In-Store Systems</option>
                      <option value="api">Enterprise API Access</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your volume and integration needs..."
                      className="w-full bg-obsidian/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(0,209,255,0.3)] hover:shadow-[0_0_30px_rgba(0,209,255,0.5)] transition-shadow flex items-center justify-center gap-2"
                >
                  Send Inquiry <Send size={20} />
                </motion.button>
              </div>
            </form>
          </div>

          {/* Right 3D Visual Side */}
          <div className="flex-1 w-full h-[500px] lg:h-[700px] relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-obsidian opacity-50 z-10 pointer-events-none" />
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                 <div className="w-32 h-32 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="w-full h-full cursor-grab active:cursor-grabbing">
                <Contact3DElement />
              </Canvas>
            </Suspense>
          </div>
          
        </div>
      </div>
    </section>
  );
}
