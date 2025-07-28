import Navbar from "@/components/Navbar";
import { Rubik_Glitch } from "next/font/google";

const rubicGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubic-glitch",
});

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="container mx-auto my-16 py-12 px-24">
      <h1 className={`text-4xl  ${rubicGlitch.className}`}>Hi, I am Ghulam Mohayudin</h1>

      <h2>Aspiring Full Stack Developer & Cybersecurity Enthusiast</h2>

      <h3>I build secure and scalable web applications using React, Next.js, and Python. I’m passionate about blending development with cybersecurity to create software that’s not only functional but also safe and reliable. Currently, I’m exploring advanced penetration testing and AI-powered security solutions to prepare for the future of tech.</h3>
    </div>
    </div>
  );
}
