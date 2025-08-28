"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cetificates from "@/components/Cetificates";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
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
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize drops
      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);
      dropsRef.current = Array(columns).fill(0).map(() => Math.floor(Math.random() * canvas.height / fontSize));
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
    const fontSize = 16;
    const columns = dropsRef.current.length;
    
    // Direct color values - exactly what you want in rgba()
    const matrixColor = {
      r: 0,        // Red value
      g: 40,       // Green value (your preferred darkness)
      b: 0,        // Blue value
      trailLength: 8,
      leadAlpha: 1.0,      // Alpha for leading character
      trailFadeRate: 0.15, // How quickly alpha fades
      minAlpha: 0.1
    };
    
    let lastTime = 0;
    const targetFPS = 12; // Slower for matrix effect
    const frameDelay = 1000 / targetFPS;

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameDelay) {
        // Clear canvas with slight fade effect for trailing
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set text properties
        ctx.font = `${fontSize}px monospace`;
        ctx.textAlign = 'start';
        
        // Draw falling characters
        for (let i = 0; i < dropsRef.current.length; i++) {
          // Random character
          const char = chars[Math.floor(Math.random() * chars.length)];
          
          // Create gradient effect - brighter at bottom
          const x = i * fontSize;
          const y = dropsRef.current[i] * fontSize;
          
          // Use direct color values with only alpha fading
          for (let j = 0; j < matrixColor.trailLength; j++) {
            const currentY = y - (j * fontSize);
            if (currentY > 0) {
              // Only fade the alpha, keep color values constant
              const alpha = j === 0 
                ? matrixColor.leadAlpha 
                : Math.max(matrixColor.minAlpha, matrixColor.leadAlpha - (j * matrixColor.trailFadeRate));
              
              // Use direct RGB values - no scaling
              ctx.fillStyle = `rgba(${matrixColor.r}, ${matrixColor.g}, ${matrixColor.b}, ${alpha})`;
              
              const currentChar = chars[Math.floor(Math.random() * chars.length)];
              ctx.fillText(currentChar, x, currentY);
            }
          }
          
          // Reset drop when it goes off screen or randomly
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
      {/* Canvas for matrix rain */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: '#000' }}
      />
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
