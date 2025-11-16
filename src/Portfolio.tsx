import { useState, useEffect } from "react";
import {
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Linkedin,
  ChevronRight,
  Terminal,
  Database,
  Cloud,
  Zap,
  Users,
  TrendingUp,
  Folder,
  GitBranch,
  Star,
  ExternalLink,
  Play,
  Pause,
  Activity,
  Download,
} from "lucide-react";

export default function Portfolio() {
  // const [activeSection, setActiveSection] = useState<any>("hero");
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);
  const [hoveredExperience, setHoveredExperience] = useState<any>(null);
  const [isVisible, setIsVisible] = useState<any>(false);
  const [terminalText, setTerminalText] = useState<any>("");
  const [terminalIndex, setTerminalIndex] = useState<any>(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [codeAnimation, setCodeAnimation] = useState<any>(true);
  const [particles, setParticles] = useState<any>([]);

  const terminalCommands = [
    "> Initializing portfolio...",
    "> Loading skills... ✓",
    "> Compiling experience... ✓",
    "> Deploying projects... ✓",
    "> Ready to impress recruiters! 🚀",
  ];

  // Generate particles for animated background
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      if (terminalIndex < terminalCommands.length) {
        setTerminalText(
          (prev: any) =>
            prev + (prev ? "\n" : "") + terminalCommands[terminalIndex]
        );
        setTerminalIndex((prev: any) => prev + 1);
      }
    }, 800);
    return () => clearInterval(timer);
  }, [terminalIndex]);

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      items: ["ReactTS/JS", "Angular 10+", "TypeScript", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      proficiency: 90,
    },
    {
      category: "Backend",
      icon: <Terminal className="w-6 h-6" />,
      items: ["C#", "Python", "Java", "Go", "ExpressJS", "Node.js"],
      color: "from-purple-500 to-pink-500",
      proficiency: 95,
    },
    {
      category: "Cloud & DB",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        "AWS (S3, Lambda, EC2)",
        "OracleDB",
        "PostgreSQL",
        "Google Cloud",
        "Firebase",
      ],
      color: "from-green-500 to-emerald-500",
      proficiency: 85,
    },
    {
      category: "DevOps",
      icon: <Zap className="w-6 h-6" />,
      items: ["Docker", "Jenkins", "CI/CD", "GitHub", "GitLab", "TeamCity"],
      color: "from-orange-500 to-red-500",
      proficiency: 80,
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Unison Global",
      period: "06/2023 - Present",
      achievements: [
        {
          icon: <TrendingUp />,
          text: "Led development of high-volume APIs handling up to 200MB per call",
          metric: "200MB",
        },
        {
          icon: <Zap />,
          text: "Optimized legacy systems, reducing API latency by 20%",
          metric: "20%",
        },
        {
          icon: <Users />,
          text: "Mentored new hires and improved team efficiency",
          metric: "90%",
        },
      ],
      color: "bg-gradient-to-br from-blue-600 to-purple-600",
    },
    {
      title: "Software Engineer Intern",
      company: "George Mason University",
      period: "05/2022 - 08/2022",
      achievements: [
        {
          icon: <Database />,
          text: "Built web archive supporting 40,000+ Chinese historical documents",
          metric: "40K+",
        },
        {
          icon: <Cloud />,
          text: "Managed data pipeline using AWS and Python",
          metric: "AWS",
        },
        {
          icon: <Code />,
          text: "Full stack development with Angular 13, Node.js, Firebase",
          metric: "Full Stack",
        },
      ],
      color: "bg-gradient-to-br from-green-600 to-teal-600",
    },
    {
      title: "Research/Teaching Assistant",
      company: "George Mason University",
      period: "01/2022 - 05/2023",
      achievements: [
        {
          icon: <Users />,
          text: "Supported 50+ students per semester with project guidance",
          metric: "50+",
        },
        {
          icon: <Terminal />,
          text: "Led GPU fault injection experiments and data analysis",
          metric: "GPU",
        },
        {
          icon: <Code />,
          text: "Conducted detailed code reviews in C language",
          metric: "C",
        },
      ],
      color: "bg-gradient-to-br from-orange-600 to-red-600",
    },
  ];

  const projects = [
    {
      title: "Chinese Historical Archive",
      description:
        "Full-stack web application for archiving and searching 40,000+ historical documents",
      tech: ["Angular 13", "Node.js", "Firebase", "Google Cloud", "Python"],
      github: "#",
      demo: "#",
      stars: 24,
      status: "production",
      highlights: [
        "40K+ documents indexed",
        "Multi-language support",
        "Role-based access control",
      ],
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "High-Volume REST API System",
      description:
        "Enterprise-grade API handling 200MB payloads with optimized performance",
      tech: ["C#", ".NET", "OracleDB", "Docker", "Jenkins"],
      github: "#",
      demo: "#",
      stars: 18,
      status: "production",
      highlights: [
        "200MB per request",
        "20% latency reduction",
        "CI/CD pipeline integrated",
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "SQL Automation Tool",
      description:
        "Python-based automation for SQL script generation and syntax validation",
      tech: ["Python", "SQL", "PostgreSQL", "Automation"],
      github: "#",
      demo: "#",
      stars: 15,
      status: "active",
      highlights: [
        "90% time reduction",
        "Syntax error detection",
        "Auto-documentation",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "GPU Fault Injection Framework",
      description:
        "Research framework for testing GPU reliability through controlled fault injection",
      tech: ["Python", "CUDA", "Data Visualization", "Linux"],
      github: "#",
      demo: "#",
      stars: 12,
      status: "research",
      highlights: [
        "Comprehensive testing suite",
        "Real-time data visualization",
        "Published research",
      ],
      color: "from-orange-600 to-red-600",
    },
  ];

  const codeSnippet = `const buildAmazingThings = async () => {
  const skills = await loadTechStack();
  const experience = processYearsOfWork();
  const passion = Infinity;
  
  return {
    quality: 'exceptional',
    delivery: 'on-time',
    impact: 'high-value'
  };
};`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle: any) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400 opacity-10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `fall ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000 -bottom-20 -right-20"></div>
        </div>

        <div
          className={`relative z-10 text-center px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
            Weilon Price
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-300">
            Software Engineer
          </p>

          {/* Terminal-style intro */}
          <div className="max-w-2xl mx-auto mb-8 p-6 rounded-lg bg-black/40 backdrop-blur-lg border border-green-500/30 font-mono text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-gray-400">terminal</span>
            </div>
            <pre className="text-green-400 text-sm whitespace-pre-wrap">
              {terminalText}
            </pre>
          </div>

          <div className="flex gap-4 justify-center mb-12">
            <a
              href="mailto:weilonprice1@aol.com"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="http://linkedin.com/in/weilon-price-966b0b238"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"  href="/Weilon_Price_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Education Card - Enhanced */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border-2 border-cyan-500/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    George Mason University
                  </h3>
                  <p className="text-gray-300">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-sm text-gray-400">
                    Graduated - Fairfax, VA
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cyan-500/30">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">CS</p>
                  <p className="text-xs text-gray-400">Major</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">B.S.</p>
                  <p className="text-xs text-gray-400">Degree</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">✓</p>
                  <p className="text-xs text-gray-400">Graduate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Full Stack Developer
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              2+ Years Experience
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 rotate-90" />
        </div>
      </section>

      {/* Code Animation Section */}
      <section className="relative py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 rounded-xl bg-slate-800/50 backdrop-blur-lg border border-cyan-500/30 font-mono">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Terminal className="w-5 h-5" />
                <span className="text-sm">my-approach.js</span>
              </div>
              <button
                onClick={() => setCodeAnimation(!codeAnimation)}
                className="flex items-center gap-2 px-3 py-1 bg-cyan-500/20 rounded text-cyan-400 hover:bg-cyan-500/30 transition"
              >
                {codeAnimation ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </button>
            </div>
            <pre
              className={`text-sm text-gray-300 overflow-x-auto transition-all duration-500 ${
                codeAnimation ? "opacity-100" : "opacity-50"
              }`}
            >
              {codeSnippet}
            </pre>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Technical Arsenal
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Hover to explore each skill set
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl backdrop-blur-lg border border-white/10 cursor-pointer transition-all duration-300 transform hover:scale-105 bg-white/5 hover:bg-white/10"
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.category}</h3>

                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{
                        width:
                          hoveredSkill === idx ? `${skill.proficiency}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  className={`space-y-2 transition-all duration-300 overflow-hidden ${
                    hoveredSkill === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {skill.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} animate-pulse`}
                      ></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - MOVED UP */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Professional Journey
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl backdrop-blur-lg border-2 transition-all duration-500 cursor-pointer ${
                  hoveredExperience === idx
                    ? "border-white/40 shadow-2xl transform scale-105"
                    : "border-white/10 hover:border-white/20"
                }`}
                onMouseEnter={() => setHoveredExperience(idx)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                <div
                  className={`absolute inset-0 ${exp.color} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-lg text-cyan-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${
                          hoveredExperience === idx
                            ? "transform translate-y-0 opacity-100"
                            : "translate-y-2 opacity-70"
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-cyan-400 mt-1">
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-300 mb-2">
                              {achievement.text}
                            </p>
                            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                              {achievement.metric}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - MOVED DOWN */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Click any project to explore details
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`relative p-6 rounded-2xl backdrop-blur-lg border-2 transition-all duration-500 cursor-pointer ${
                  selectedProject === idx
                    ? "border-cyan-500/50 shadow-2xl scale-105 bg-white/10"
                    : "border-white/10 hover:border-white/20 bg-white/5"
                }`}
                onClick={() =>
                  setSelectedProject(selectedProject === idx ? null : idx)
                }
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <Activity
                    className={`w-4 h-4 ${
                      project.status === "production"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  />
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.status === "production"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Header */}
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}
                  >
                    <Folder className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Highlights */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    selectedProject === idx
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Highlights:
                    </h4>
                    {project.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <ChevronRight className="w-4 h-4 text-cyan-400" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-semibold">View</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Looking for opportunities to create impactful solutions
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:weilonprice1@aol.com"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="http://linkedin.com/in/weilon-price-966b0b238"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
