import type { ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  BrainCircuit,
  Briefcase,
  Code2,
  Cpu,
  Download,
  GitBranch,
  Home,
  Link,
  Lock,
  Mail,
  Monitor,
  Network,
  Rocket,
  Send,
  Server,
  Shield,
  Sparkles,
  User,
  Wrench,
} from "lucide-react"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { InteractiveRobotSpline } from "@/components/blocks/interactive-3d-robot"
import { Card, CardContent } from "@/components/ui/card"

const ROBOT_SCENE_URL =
  "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"

const PROFILE_IMAGE = "/profile.jpg"

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Skills", url: "#skills", icon: Code2 },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Work", url: "#contact", icon: Mail },
]

const featuredProjects = [
  {
    title: "GuardX",
    tag: "Current Working Project",
    desc: "Cyber Recovery Chain for social account protection using guardian approval, account freeze, secure restore workflow and future blockchain integration.",
    icon: Shield,
    github: null,
  },
  {
    title: "NeuroLaw AI Platform",
    tag: "AI Legal Tech",
    desc: "AI-powered legal thinking platform with legal text editor, Socratic AI questioning, plain-language translation and legal logic visualization.",
    icon: BrainCircuit,
    github: "https://github.com/CodeX-ByAadhi/neurolaw-ai-platform",
  },
  {
    title: "Jarvis AI Assistant",
    tag: "Voice AI Assistant",
    desc: "AI assistant project focused on voice interaction, intelligent responses and personal productivity automation.",
    icon: Sparkles,
    github: "https://github.com/CodeX-ByAadhi/jarvis-ai-assistant",
  },
  {
    title: "Secure Steganography Web App",
    tag: "Python + Security",
    desc: "Secure web application for hiding encrypted secret messages inside media files with extraction and detection support.",
    icon: Lock,
    github: "https://github.com/CodeX-ByAadhi/secure-steganography-web-app",
  },
  {
    title: "AI Resume Analyzer",
    tag: "AI + Career Tech",
    desc: "AI-powered resume analysis tool that checks resume quality, suggests improvements and improves job-readiness.",
    icon: Rocket,
    github: "https://github.com/CodeX-ByAadhi/ai-resume-analyzer",
  },
  {
    title: "Developer Collaboration Platform",
    tag: "Full Stack Platform",
    desc: "Collaboration platform concept for developers to manage teamwork, projects, communication and productivity.",
    icon: Code2,
    github: "https://github.com/CodeX-ByAadhi/developer-collaboration-platform",
  },
]

const moreProjects = [
  ["AI Interview Preparation System", "ai-interview-preparation-system"],
  ["API Testing Monitor", "api-testing-monitor"],
  ["ATS Resume Matcher", "ats-resume-matcher"],
  ["Bug Tracking System", "bug-tracking-system"],
  ["Ecommerce Backend API", "ecommerce-backend-api"],
  ["Expense Tracker API", "expense-tracker-api"],
  ["File Sharing Platform", "file-sharing-platform"],
  ["Job Portal System", "job-portal-system"],
  ["Network Monitoring Dashboard", "network-monitoring-dashboard"],
  ["Personal Knowledge Hub", "personal-knowledge-hub"],
  ["Placement Tracker System", "placement-tracker-system"],
  ["Realtime Chat Application", "realtime-chat-application"],
  ["Smart Attendance System", "smart-attendance-system"],
  ["Student Management System", "student-management-system"],
  ["URL Shortener Service", "url-shortener-service"],
  ["Rain Guard & Emission Tracker", ""],
]

const skillGroups = [
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Java",
      "Python",
      "Spring Boot",
      "REST APIs",
      "Node.js",
      "Express.js",
      "Flask",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Basics",
    ],
  },
  {
    title: "AI & Data Science",
    icon: BrainCircuit,
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Prompt Engineering",
      "AI Applications",
      "LLM Integration",
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      "Network Security",
      "Ethical Hacking Basics",
      "OWASP Top 10",
      "Web Security",
      "Authentication Systems",
      "Threat Analysis",
      "Digital Forensics",
      "Secure Coding",
    ],
  },
  {
    title: "Networking & Systems",
    icon: Network,
    skills: [
      "Computer Networks",
      "TCP/IP",
      "Routing & Switching",
      "Linux Administration",
      "System Administration",
      "Network Troubleshooting",
    ],
  },
  {
    title: "IoT & Embedded",
    icon: Cpu,
    skills: [
      "ESP32",
      "Arduino",
      "Blynk IoT",
      "Sensor Integration",
      "MQTT Basics",
      "Embedded Systems",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Linux",
      "Docker Basics",
      "Figma",
      "Canva",
      "VMware",
      "Ubuntu",
      "Netlify",
      "Vercel",
    ],
  },
]

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 55, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 16])
  const y = useTransform(scrollYProgress, [0, 1], [0, -140])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8e8] text-[#2f2418] selection:bg-[#f6a21a]/25">
      <div className="fixed inset-0 -z-20 opacity-[0.22] pointer-events-none">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-[#fff8e8]/80" />

      <motion.div
        style={{ rotate, y }}
        className="fixed -right-32 top-24 -z-10 h-96 w-96 rounded-full border-[50px] border-[#f6a21a]/10"
      />

      <NavBar items={navItems} />

      <section
        id="home"
        className="min-h-screen grid lg:grid-cols-[1.1fr_.9fr] items-center gap-10 px-5 sm:px-10 lg:px-20 pt-14 pb-28"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#ead7b7] bg-[#fffaf0]/80 px-4 py-2 text-sm font-bold text-[#8a5b1a] shadow-sm"
          >
            <Sparkles size={16} /> Computer Science Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-7 text-5xl sm:text-7xl lg:text-8xl font-black leading-[.88] tracking-[-.07em]"
          >
            Aadhi D
            <br />
            <span className="font-serif italic text-[#ca761e]">builds</span>{" "}
            beyond code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-7 max-w-2xl text-[17px] sm:text-xl leading-9 text-[#5f4b32] font-medium tracking-[-0.01em]"
          >
            Backend Developer • AI Explorer • Cybersecurity Enthusiast
            <br />I build intelligent digital products across web development,
            AI, cybersecurity and IoT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-[#2f2418] px-7 py-4 font-bold text-[#fff8e8] shadow-[0_18px_40px_rgba(47,36,24,.22)] hover:-translate-y-1 transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/CodeX-ByAadhi"
              target="_blank"
              className="rounded-full border border-[#d6bd8f] bg-[#fffaf0]/80 px-7 py-4 font-bold hover:-translate-y-1 transition inline-flex gap-2 items-center"
            >
              <GitBranch size={20} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aadhi-d-ab5bb12a2/"
              target="_blank"
              className="rounded-full border border-[#d6bd8f] bg-[#fffaf0]/80 px-7 py-4 font-bold hover:-translate-y-1 transition inline-flex gap-2 items-center"
            >
              <Link size={20} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["📍 Tamil Nadu, India", "🎓 CSE Student", "💼 Open for Internships"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ead7b7] bg-[#fffaf0]/70 px-4 py-2 text-sm font-bold text-[#7a6040]"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="rounded-[3.5rem] bg-[#fffaf0]/70 p-4 shadow-[0_35px_110px_rgba(100,70,30,.22)] border border-[#ead7b7] backdrop-blur-xl"
          >
            <img
              src={PROFILE_IMAGE}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=900&auto=format&fit=crop"
              }}
              className="aspect-[4/5] w-full rounded-[2.8rem] object-cover"
              alt="Aadhi D profile"
            />
          </motion.div>

          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -left-5 rounded-3xl bg-[#f6a21a] px-5 py-4 font-black text-white shadow-xl"
          >
            20+ Projects
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
            className="absolute -top-5 -right-4 rounded-3xl border border-[#ead7b7] bg-[#fffaf0]/90 px-5 py-3 font-black text-[#8a5b1a] shadow-xl backdrop-blur-xl"
          >
            AI • Backend • Security
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="px-5 sm:px-10 lg:px-20 py-24">
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <Card className="h-full">
              <CardContent className="p-8 sm:p-12">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ca761e]">
                  ✦ About Me
                </p>

                <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-[-.05em] leading-tight">
                  Computer Science Engineer building across domains.
                </h2>

                <p className="mt-7 text-[17px] sm:text-lg leading-9 text-[#5f4b32] font-medium tracking-[-0.01em]">
                  I am Aadhi D, a Computer Science Engineering student focused
                  on backend development, AI, cybersecurity, web development and
                  IoT. I enjoy turning ideas into practical projects that solve
                  real-world problems and create meaningful digital experiences.
                </p>

                <p className="mt-5 text-[17px] sm:text-lg leading-9 text-[#5f4b32] font-medium tracking-[-0.01em]">
                  My goal is to keep learning, build strong projects, improve my
                  development skills and grow into a capable software developer
                  who can work across multiple areas of technology.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full overflow-hidden">
              <CardContent className="p-8 sm:p-12">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ca761e]">
                  ✦ Personal Philosophy
                </p>

                <blockquote className="mt-6 text-3xl sm:text-4xl xl:text-5xl font-black leading-[1.08] tracking-[-.04em] text-[#2f2418]">
                  A{" "}
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-block font-serif italic text-[#ca761e] font-bold"
                  >
                    jack of all trades
                  </motion.span>{" "}
                  is a master of none, but oftentimes better than a master of
                  one.
                </blockquote>

                <p className="mt-8 text-[17px] sm:text-lg leading-9 text-[#5f4b32] font-medium tracking-[-0.01em]">
                  I believe innovation happens when different fields meet. That
                  is why I explore backend systems, AI, cybersecurity,
                  networking and IoT instead of limiting myself to only one
                  path.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="px-5 sm:px-10 lg:px-20 py-24">
        <Reveal>
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-.05em]">
            Skills Across Domains
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <Reveal key={group.title} delay={index * 0.04}>
                <motion.div whileHover={{ y: -10, rotate: index % 2 ? 1 : -1 }}>
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-7">
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-[#ffedbf] p-3 text-[#c46b1a]">
                          <Icon size={26} />
                        </div>
                        <h3 className="text-2xl font-black tracking-[-.03em]">
                          {group.title}
                        </h3>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {group.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.025 }}
                            whileHover={{ scale: 1.08 }}
                            className="rounded-full border border-[#ead7b7] bg-[#fffaf0]/80 px-4 py-2 text-sm font-bold text-[#6b5236]"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section id="projects" className="px-5 sm:px-10 lg:px-20 py-24">
        <Reveal>
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-.05em]">
            Featured Projects
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon

            return (
              <Reveal key={project.title} delay={index * 0.05}>
                <motion.div whileHover={{ y: -12, rotate: index % 2 ? 1 : -1 }}>
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between gap-4">
                        <div className="rounded-2xl bg-[#ffedbf] p-3 text-[#c46b1a]">
                          <Icon size={26} />
                        </div>

                        <span className="text-xs font-black uppercase tracking-widest text-[#8a5b1a] text-right">
                          {project.tag}
                        </span>
                      </div>

                      <h3 className="mt-8 text-3xl font-black tracking-[-.03em]">
                        {project.title}
                      </h3>

                      <p className="mt-4 leading-7 text-[#5f4b32] font-medium">
                        {project.desc}
                      </p>

                      <div className="mt-7">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-full border border-[#d6bd8f] bg-[#fffaf0] px-5 py-3 font-bold hover:-translate-y-1 transition"
                          >
                            <GitBranch size={18} /> GitHub Repo
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#f6a21a] px-5 py-3 font-black text-white shadow-lg">
                            <Sparkles size={18} /> In Development
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
  <div className="mt-20 rounded-[2rem] border border-[#ead7b7] bg-[#fffaf0]/80 p-10 sm:p-14 text-center shadow-[0_25px_80px_rgba(100,70,30,.12)]">

    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ca761e]">
      ✦ More Projects
    </p>

    <h3 className="mt-5 text-4xl sm:text-5xl font-black tracking-[-.05em]">
      Want to see more?
    </h3>

    <p className="mt-6 text-base leading-8 text-[#5f4b32]">
      Hit the button below to explore my latest works.
    </p>

    <a
      href="https://github.com/CodeX-ByAadhi?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2f2418] px-8 py-4 font-bold text-[#fff8e8] shadow-[0_18px_40px_rgba(47,36,24,.22)] hover:-translate-y-1 transition"
    >
      <GitBranch size={20} />
      Explore My Projects
    </a>

  </div>
</Reveal>
      </section>

      <section
        id="contact"
        className="min-h-screen px-5 sm:px-10 lg:px-20 pt-24 pb-40 flex items-center"
      >
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-6 w-full">
            <Card className="h-full">
              <CardContent className="p-8 sm:p-12">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ca761e]">
                  ✦ Internship Experience
                </p>

                <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-[-.05em] leading-tight">
                  BSNL Telecom & Networking Internship
                </h2>

                <p className="mt-7 text-[17px] sm:text-lg leading-9 text-[#5f4b32] font-medium tracking-[-0.01em]">
                  Completed an internship at BSNL, Trichy, gaining exposure to
                  telecom infrastructure, networking concepts, communication
                  systems and real-world network management workflows.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Networking",
                    "Telecom Basics",
                    "Infrastructure",
                    "BSNL Trichy",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#ead7b7] bg-[#fffaf0]/80 px-4 py-2 text-sm font-black text-[#8a5b1a]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="text-center py-16 sm:py-20 px-6">
                <h2 className="text-4xl sm:text-6xl font-black tracking-[-.06em]">
                  Let’s build something.
                </h2>

                <p className="mt-6 text-[17px] sm:text-lg leading-8 text-[#5f4b32] font-medium">
                  Open for internships, projects and developer opportunities.
                </p>

                <div className="mt-9 flex justify-center flex-wrap gap-4">
                  
                  <a
                    className="rounded-full bg-[#2f2418] px-7 py-4 font-bold text-[#fff8e8] inline-flex gap-2 items-center"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aadhidurai2006@gmail.com&su=Portfolio%20Contact&body=Hi%20Aadhi,"
                    target="_blank"
                  >
                    <Send size={20} /> Email Me
                  </a>

                  <a
                    className="rounded-full border border-[#d6bd8f] bg-[#fffaf0] px-7 py-4 font-bold inline-flex gap-2 items-center"
                    href="https://www.linkedin.com/in/aadhi-d-ab5bb12a2/"
                    target="_blank"
                  >
                    <Link size={20} /> LinkedIn
                  </a>

                  <a
                    className="rounded-full border border-[#d6bd8f] bg-[#fffaf0] px-7 py-4 font-bold inline-flex gap-2 items-center"
                    href="/resume/Aadhi_D_Resume.pdf"
                    download
                  >
                    <Download size={20} /> Resume
                  </a>
                </div>

                <div className="mt-8 flex justify-center">
                  <a
                    href="https://wa.me/916380763682"
                    target="_blank"
                    className="rounded-full bg-[#25D366] text-white px-8 py-4 font-bold inline-flex items-center gap-3 shadow-lg hover:-translate-y-1 transition"
                  >
                    <span className="text-xl">💬</span>
                    Contact on WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </section>
    </main>
  )
}