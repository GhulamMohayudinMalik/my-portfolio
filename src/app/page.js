"use client";

import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";


export default function Home() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const dropsRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);
      dropsRef.current = Array(columns).fill(0).map(() => Math.floor(Math.random() * canvas.height / fontSize));
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
    const fontSize = 16;
    const columns = dropsRef.current.length;
    
    const matrixColor = {
      r: 0,        
      g: 44,       
      b: 0,        
      trailLength: 8,
      leadAlpha: 1.0,      
      trailFadeRate: 0.15,
      minAlpha: 0.1
    };
    
    let lastTime = 0;
    const targetFPS = 12; 
    const frameDelay = 1000 / targetFPS;

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameDelay) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = `${fontSize}px monospace`;
        ctx.textAlign = 'start';
        
        for (let i = 0; i < dropsRef.current.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          
          const x = i * fontSize;
          const y = dropsRef.current[i] * fontSize;
          
          for (let j = 0; j < matrixColor.trailLength; j++) {
            const currentY = y - (j * fontSize);
            if (currentY > 0) {
              const alpha = j === 0 
                ? matrixColor.leadAlpha 
                : Math.max(matrixColor.minAlpha, matrixColor.leadAlpha - (j * matrixColor.trailFadeRate));
              
              ctx.fillStyle = `rgba(${matrixColor.r}, ${matrixColor.g}, ${matrixColor.b}, ${alpha})`;
              
              const currentChar = chars[Math.floor(Math.random() * chars.length)];
              ctx.fillText(currentChar, x, currentY);
            }
          }
          
          if (dropsRef.current[i] * fontSize > canvas.height && Math.random() > 0.975) {
            dropsRef.current[i] = 0;
          }
          dropsRef.current[i]++;
        }
        
        lastTime = currentTime;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: '#000' }}
      />
      
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
      <div className=" relative z-10">
        <Intro />
        <About />  
        <Skills />        
        <Certifications/>
        <Contact/>
      <Footer />
      </div>
    </div>
  );
}
