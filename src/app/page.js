import { Rubik_Glitch } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Divisor from "@/components/Divisor";
import Cetificates from "@/components/Cetificates";

const rubicGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubic-glitch",
});

//  For gradient coloring
// <div className="bg-gradient-to-br from-slate-50 to-blue-500 py-24 sm:py-32">

export default function Home() {
  return (
    <div className="bg-gray-900 relative">
      <Navbar />
      <hr className="w-full border-t border-gray-400 flex mx-auto" />
      <div>
        <section id="intro">
          <div className="py-24 sm:py-32">
            <div className="w-full max-w-7xl mx-auto my-8 md:my-16 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-12">
                {/* Text Content */}
                <div className="flex-1 lg:max-w-2xl">
                  <h1
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-800 via-emerald-500 to-blue-600 bg-clip-text text-transparent animate-bounce ${rubicGlitch.className}`}
                  >
                    Hi, I am Ghulam Mohayudin
                  </h1>
                  <h2 className="italic text-xs sm:text-sm md:text-base py-2 text-gray-500">
                    Aspiring Full Stack Developer & Cybersecurity Enthusiast
                  </h2>
                  <h3 className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400">
                    I build secure and scalable web applications using React,
                    Next.js, and Python. I&apos;m passionate about blending
                    development with cybersecurity to create software
                    that&apos;s not only functional but also safe and reliable.
                    Currently, I&apos;m exploring advanced penetration testing
                    and AI-powered security solutions to prepare for the future
                    of tech.
                  </h3>
                </div>

                {/* Image */}
                <div className="flex-shrink-0 flex justify-center lg:justify-end">
                  <Image
                    src={"/name-logo-3-2.png"}
                    width={300}
                    height={300}
                    alt="Logo"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divisor />
        <section id="about">
          <div className="py-24 sm:py-32 text-center">
            <div className="w-full max-w-7xl mx-auto my-8 md:my-16 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6 lg:gap-8">
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-800 via-emerald-500 to-blue-600 bg-clip-text text-transparent animate-bounce ${rubicGlitch.className}`}
                >
                  About Me
                </h1>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 max-w-4xl mx-auto">
                  I&apos;m Ghulam Mohayudin, a final-year student of
                  Cybersecurity and Digital Forensics with a strong passion for
                  full stack web development and ethical hacking. My current
                  tech stack includes React, Next.js, Node.js, Python, and
                  various cybersecurity tools. Over the past few months,
                  I&apos;ve built dozens of small to mid-sized projects while
                  sharpening my front-end and backend skills. Outside of code,
                  I&apos;m deeply involved in security research, exploring
                  vulnerability assessment, penetration testing, and automation
                  using Python. I&apos;m actively working on real-world projects
                  and labs to build a portfolio that reflects my growth,
                  versatility, and job readiness.
                </p>

                <div className="flex flex-row justify-around sm:mx-auto mx-0 gap-4 sm:gap-6 mt-6">
                  <div className="text-center sm:text-left">
                    <a
                      href="mailto:ghulammohayudinmalik@gmail.com"
                      className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-blue-600 transition-colors"
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#4caf50"
                            d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                          ></path>
                          <path
                            fill="#1e88e5"
                            d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                          ></path>
                          <polygon
                            fill="#e53935"
                            points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                          ></polygon>
                          <path
                            fill="#c62828"
                            d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                          ></path>
                          <path
                            fill="#fbc02d"
                            d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                          ></path>
                        </svg>
                        <span className="font-bold text-gray-400">Gmail</span>
                      </div>
                    </a>
                  </div>
                  <div className="text-center sm:text-left">
                    <a
                      href="https://www.linkedin.com/in/gulam-mohiudin-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-blue-600 transition-colors"
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#0078d4"
                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                          ></path>
                          <path
                            d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                            opacity=".05"
                          ></path>
                          <path
                            d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                            opacity=".07"
                          ></path>
                          <path
                            fill="#fff"
                            d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                          ></path>
                        </svg>
                        <span className="font-bold text-gray-400">
                          LinkedIn
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="text-center sm:text-left">
                    <a
                      href="https://github.com/GhulamMohayudinMalik"
                      className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-blue-600 transition-colors"
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 50 50"
                        >
                          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                        <span className="font-bold text-gray-400">Github</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divisor />
        <section id="skills">
          <div className="relative w-full max-w-7xl mx-auto text-white py-16 z-0">
            {/* Floating particles */}
            <div
              // ref={particlesRef}
              className="fixed inset-0 pointer-events-none z-0"
            ></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-16">
                <h1
                  className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-800 via-emerald-500 to-blue-600 bg-clip-text text-transparent animate-bounce ${rubicGlitch.className}`}
                >
                  Skills
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Passionate about creating robust solutions across the full
                  technology stack, from beautiful user interfaces to secure
                  systems.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {/* Web Development Card */}
                <div
                  id="web-dev"
                  className="col-span-1 lg:col-span-2 xl:col-span-2 bg-gray-900 bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-3xl p-8 hover:transform hover:-translate-y-2 hover:border-purple-400 hover:border-opacity-50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      🌐
                    </div>

                    <h2 className="text-2xl font-bold mb-4">
                      Full Stack Web Development
                    </h2>
                    <p className="text-gray-300 mb-8">
                      Creating modern, responsive web applications with seamless
                      user experiences and robust backend architectures.
                    </p>

                    {/* Frontend Subsection */}
                    <div className="mb-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-opacity-5 rounded-2xl p-6 border-l-4 border-cyan-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                      <h3 className="text-lg font-semibold mb-3">
                        Frontend Development
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[
                          "React",
                          "Next.js",
                          "JavaScript",
                          "HTML5",
                          "CSS3",
                          "Tailwind",
                          "Bootstrap",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-200 rounded-full text-sm border border-purple-400 border-opacity-30 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div
                          className="proficiency-fill h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                          data-width="90%"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Backend Subsection */}
                    <div className="bg-gradient-to-r from-teal-700 via-emerald-400 to-green-400 bg-opacity-5 rounded-2xl p-6 border-l-4 border-green-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                      <h3 className="text-lg font-semibold mb-3">
                        Backend Development
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[
                          "Node.js",
                          "Express",
                          "Django",
                          "Flask",
                          "MongoDB",
                          "PostgreSQL",
                          "REST APIs",
                          "GraphQL",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-200 rounded-full text-sm border border-purple-400 border-opacity-30 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div
                          className="proficiency-fill h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                          data-width="80%"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cybersecurity Card */}
                <div
                  id="cy-sec"
                  className="bg-gray-900 bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-3xl p-8 hover:transform hover:-translate-y-2 hover:border-purple-400 hover:border-opacity-50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-gray-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      🔒
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Cybersecurity</h2>
                    <p className="text-gray-300 mb-8">
                      Implementing security best practices, conducting
                      vulnerability assessments, and protecting digital assets
                      from evolving threats.
                    </p>

                    <div className="bg-gradient-to-r from-[#612c00b9] to-red-500 bg-opacity-5 rounded-2xl p-6 border-l-4 border-red-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                      <h3 className="text-lg font-semibold mb-3">
                        Security Specializations
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[
                          "Penetration Testing",
                          "OWASP",
                          "Network Security",
                          "Vulnerability Assessment",
                          "Incident Response",
                          "Security Auditing",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-200 rounded-full text-sm border border-purple-400 border-opacity-30 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div
                          className="proficiency-fill h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                          data-width="82%"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Python Development Card */}
                <div
                  id="py-dev"
                  className="bg-gray-900 bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-3xl p-8 hover:transform hover:-translate-y-2 hover:border-purple-400 hover:border-opacity-50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-yellow-400 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      🐍
                    </div>

                    <h2 className="text-2xl font-bold mb-4">
                      Python Development
                    </h2>
                    <p className="text-gray-300 mb-8">
                      Building scalable applications, data analysis tools, and
                      automation solutions using Python&apos;s powerful
                      ecosystem.
                    </p>

                    <div className="bg-gradient-to-r from-[#612c00b9] to-yellow-400 bg-opacity-5 rounded-2xl p-6 border-l-4 border-yellow-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                      <h3 className="text-lg font-semibold mb-3">
                        Core Python & Frameworks
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[
                          "Django",
                          "Flask",
                          "FastAPI",
                          "Pandas",
                          "NumPy",
                          "Requests",
                          "SQLAlchemy",
                          "PyQt",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-200 rounded-full text-sm border border-purple-400 border-opacity-30 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div
                          className="proficiency-fill h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                          data-width="88%"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divisor />
        <section id="certifications" className="body-font">
          <Cetificates />
        </section>
        <Divisor />
        <section id="contact">
          <div className="w-full max-w-7xl mx-auto isolate px-6 py-24 sm:py-32 lg:px-8 z-0">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className={`text-4xl font-semibold tracking-tight text-balance sm:text-5xl ${rubicGlitch.className}`}
              >
                Contact
              </h2>
              <p className="mt-2 text-lg/8">
                If you got a project or something to discuss, don&apos;t
                hesitate to reach me out.
              </p>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold "
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-gray-500 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-emerald-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                >
                  Let&apos;s talk
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Divisor />
      <Footer />
    </div>
  );
}
