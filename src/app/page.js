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
      <Navbar />
      <hr className="w-4/5 border-t border-white flex mx-auto" />
      <div>
        <section id="intro">
          <div className="w-4/5 mx-auto my-16 py-12 flex justify-between">
            <div className="w-lg ">
              <h1 className={`text-4xl  ${rubicGlitch.className}`}>
                Hi, I am Ghulam Mohayudin
              </h1>
              <h2 className="italic text-sm py-2">
                Aspiring Full Stack Developer & Cybersecurity Enthusiast
              </h2>
              <h3>
                I build secure and scalable web applications using React,
                Next.js, and Python. I’m passionate about blending development
                with cybersecurity to create software that’s not only functional
                but also safe and reliable. Currently, I’m exploring advanced
                penetration testing and AI-powered security solutions to prepare
                for the future of tech.
              </h3>
            </div>

            <Image
              src={"/name-logo-3.png"}
              width={200}
              height={160}
              alt="Logo"
            />
          </div>
        </section>
        <hr className="w-4/5 border-t border-white flex mx-auto" />
        <section id="about">
          <div className="w-4/5 mx-auto my-16 py-8">
            <h1 className={`text-4xl  ${rubicGlitch.className}`}>About Me</h1>

            <p>
              I'm Ghulam Mohayudin, a final-year student of Cybersecurity and
              Digital Forensics with a strong passion for full stack web
              development and ethical hacking. My current tech stack includes
              React, Next.js, Node.js, Python, and various cybersecurity tools.
              Over the past few months, I’ve built dozens of small to mid-sized
              projects while sharpening my front-end and backend skills. Outside
              of code, I’m deeply involved in security research, exploring
              vulnerability assessment, penetration testing, and automation
              using Python. I’m actively working on real-world projects and labs
              to build a portfolio that reflects my growth, versatility, and job
              readiness.
            </p>

            <p>📧 Email: your.email@gmail.com</p>
            <p>🔗 LinkedIn: linkedin.com/in/ghulam-mohayudin</p>
            <p>💻 GitHub: github.com/yourusername</p>
          </div>
        </section>
        <hr className="w-4/5 border-t border-white flex mx-auto" />
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

        <hr className="w-4/5 border-t border-white flex mx-auto" />

         <section id="certifications" className="text-gray-600 body-font">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-24 sm:py-32">
            <div className="w-4/5 mx-auto max-w-7xl px-6 lg:px-8">
              {/* Header */}
              <div className="mx-auto max-w-2xl text-center">
                <h2 className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${rubicGlitch.className}`}>
                  Certifications
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Professional certifications that validate my expertise and
                  commitment to continuous learning in technology and
                  development.
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {/* Certification 1 */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    {/* Certificate Icon/Logo */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 text-white mb-6 group-hover:bg-blue-700 transition-colors">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>

                    {/* Certificate Details */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      AWS Cloud Practitioner
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">
                      Amazon Web Services
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Foundational understanding of AWS Cloud concepts,
                      services, and terminology.
                    </p>

                    {/* Certificate Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Issued: Jan 2024</span>
                      <span>Valid Until: Jan 2027</span>
                    </div>

                    {/* Verification Badge */}
                    <div className="flex items-center space-x-2 text-green-600">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                </div>

                {/* Certification 2 */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-600 text-white mb-6 group-hover:bg-green-700 transition-colors">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      React Developer
                    </h3>
                    <p className="text-sm text-green-600 font-medium mb-3">
                      Meta (Facebook)
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Advanced React concepts including hooks, context, and
                      modern development patterns.
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Issued: Mar 2024</span>
                      <span>No Expiration</span>
                    </div>

                    <div className="flex items-center space-x-2 text-green-600">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                </div>

                {/* Certification 3 */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-600 text-white mb-6 group-hover:bg-purple-700 transition-colors">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Google Analytics
                    </h3>
                    <p className="text-sm text-purple-600 font-medium mb-3">
                      Google
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Web analytics and data-driven insights for digital
                      marketing optimization.
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Issued: Feb 2024</span>
                      <span>Valid Until: Feb 2025</span>
                    </div>

                    <div className="flex items-center space-x-2 text-green-600">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                </div>

                {/* Certification 4 */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-600 text-white mb-6 group-hover:bg-red-700 transition-colors">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      MongoDB Developer
                    </h3>
                    <p className="text-sm text-red-600 font-medium mb-3">
                      MongoDB University
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Database design, querying, and optimization for modern
                      applications.
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Issued: Apr 2024</span>
                      <span>Valid Until: Apr 2027</span>
                    </div>

                    <div className="flex items-center space-x-2 text-green-600">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                </div>

                {/* Certification 5 */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-600 text-white mb-6 group-hover:bg-indigo-700 transition-colors">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Next.js Developer
                    </h3>
                    <p className="text-sm text-indigo-600 font-medium mb-3">
                      Vercel
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Full-stack React framework for production-ready web
                      applications.
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Issued: May 2024</span>
                      <span>No Expiration</span>
                    </div>

                    <div className="flex items-center space-x-2 text-green-600">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                </div>

                {/* Certification 6 */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-600 text-white mb-6 group-hover:bg-yellow-700 transition-colors">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      JavaScript Algorithms
                    </h3>
                    <p className="text-sm text-yellow-600 font-medium mb-3">
                      freeCodeCamp
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Data structures and algorithms using JavaScript for
                      problem-solving.
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Issued: Jun 2024</span>
                      <span>No Expiration</span>
                    </div>

                    <div className="flex items-center space-x-2 text-green-600">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="w-4/5 border-t border-gray-500 flex mx-auto" />

        <section id="contact">
          <div className="w-4/5 mx-auto isolate px-6 py-24 sm:py-32 lg:px-8 z-0">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className={`text-4xl font-semibold tracking-tight text-balance sm:text-5xl ${rubicGlitch.className}`}
              >
                Contact sales
              </h2>
              <p className="mt-2 text-lg/8">
                If you got a project or something to discuss, don't hesitate to
                contact me.
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
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
