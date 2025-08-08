"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cetificates from "@/components/Cetificates";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';


const Skills = dynamic(() => import('@/components/Skills'), {
  ssr: false,
  loading: () => <p className="text-white text-center">Loading Skills...</p>,
});

export default function Home() {
  const [matrixRain, setMatrixRain] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Matrix rain effect
  useEffect(() => {
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
    const drops = [];
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor((Math.random() * window.innerHeight) / 20);
    }

    const interval = setInterval(() => {
      setMatrixRain(
        drops.map((drop, i) => ({
          id: i,
          char: chars[Math.floor(Math.random() * chars.length)],
          x: i * 20,
          y: drop * 20,
          opacity: Math.random(),
        }))
      );

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-green-400 overflow-x-hidden relative">
      {/* Droping bits pieces */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {matrixRain.map((drop) => (
          <div
            key={drop.id}
            className="absolute text-green-100 font-mono text-sm"
            style={{
              left: drop.x,
              top: drop.y,
              opacity: drop.opacity,
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>
      {/* Mouse Tracking */}
      <div
        className="fixed w-32 h-32 pointer-events-none z-50 opacity-30"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <Navbar />
      <div>
        <Intro />
        <About />           
        <Skills />        
        <Cetificates />
        <Contact/>
      <Footer />
      </div>
    </div>
  );
}
