import { Rubik_Glitch } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rubicGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubic-glitch",
});

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div>
    <section id="intro">
    <div className="w-4/5 mx-auto my-16 py-12 flex justify-between">
      <div className="w-lg ">
      <h1 className={`text-4xl  ${rubicGlitch.className}`}>Hi, I am Ghulam Mohayudin</h1>
      <h2 className="italic text-sm py-2">Aspiring Full Stack Developer & Cybersecurity Enthusiast</h2>
      <h3>I build secure and scalable web applications using React, Next.js, and Python. I’m passionate about blending development with cybersecurity to create software that’s not only functional but also safe and reliable. Currently, I’m exploring advanced penetration testing and AI-powered security solutions to prepare for the future of tech.</h3>
      </div>

      <Image src={"/name-logo-3.png"} width={200} height={160} alt="Logo" />
    </div>
    </section>

    <section id="about">
      <div className="w-4/5 mx-auto my-16 py-8">
        <h1 className={`text-4xl  ${rubicGlitch.className}`}>About Me</h1>

        <p>I'm Ghulam Mohayudin, a final-year student of Cybersecurity and Digital Forensics with a strong passion for full stack web development and ethical hacking. My current tech stack includes React, Next.js, Node.js, Python, and various cybersecurity tools. Over the past few months, I’ve built dozens of small to mid-sized projects while sharpening my front-end and backend skills.
        Outside of code, I’m deeply involved in security research, exploring vulnerability assessment, penetration testing, and automation using Python. I’m actively working on real-world projects and labs to build a portfolio that reflects my growth, versatility, and job readiness.</p>
      </div>
    </section>

    <section id="skills">
      <div className="w-4/5 mx-auto my-16 py-8">
        <h1 className={`text-4xl  ${rubicGlitch.className}`}>Skills</h1>
        <div>
          <h2>Frontend Development</h2>
          <ul className="grid grid-cols-3">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div>
          <h2>Backend Development</h2>
          <ul className="grid grid-cols-3">
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Django</li>
          </ul>
        </div>

        <div>
          <h2>Cyber Security & Ethical Hacking</h2>
          <ul className="grid grid-cols-3">
            <li>Kali</li>
            <li>MetaSploitable</li>
            <li>SQL</li>
            <li>XSS</li>
            <li>TryHackMe</li>
          </ul>
        </div>

      </div>
    </section>

    <section id="certifications">
      <div className="w-4/5 mx-auto my-16 py-8">
        <h1 className={`text-4xl  ${rubicGlitch.className}`}>Certifications & Courses</h1>
        <p>I believe in lifelong learning and consistently invest time in upskilling through hands-on platforms and courses. Here are some of the certifications and learning programs I've completed or am currently pursuing.</p>

        <ul>
          <li>Firtst</li>
          <li>Second</li>
          <li>Third</li>
          <li>Forth</li>
        </ul>
      </div>
    </section>

    <section id="contact">
      <div className="w-4/5 mx-auto my-16 py-8">
        <h1 className={`text-4xl  ${rubicGlitch.className}`}>Contact Me</h1>
        <p>Whether you want to collaborate, have a project idea, or just want to say hi — I’m always open to interesting conversations. Reach out to me through any of the platforms below.</p>

        <p>📧 Email: your.email@gmail.com</p>
        <p>🔗 LinkedIn: linkedin.com/in/ghulam-mohayudin</p>
        <p>💻 GitHub: github.com/yourusername</p>
      </div>
    </section>
    </div>
    <Footer/>
    </div>
  );
}
