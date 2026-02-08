import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, ExternalLink, Award, Users, FileText, ChevronDown, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      // Update active section
      const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "RemoteSync",
      subtitle: "Full-Stack Project Management Platform",
      tech: "MERN Stack",
      description: "Comprehensive project management application with role-based access control, Redux Toolkit state management, and AI-powered project descriptions.",
      highlights: [
        "40% performance optimization through Redux implementation",
        "60% productivity boost with Gemini AI integration",
        "Full CRUD operations with real-time updates"
      ],
      github: "https://github.com/vaishnavisisodiya/remote-collabration",
      live: "https://remote-collabration-seven.vercel.app",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Research Assistant",
      subtitle: "AI-Powered Document Analysis Tool",
      tech: "Python, AI/ML",
      description: "Intelligent research assistant that processes papers and online sources for real-time contextual answers.",
      highlights: [
        "50% reduction in research time",
        "85% accuracy in semantic search",
        "Advanced document ingestion pipeline"
      ],
      github: "https://github.com/vaishnavisisodiya/Research-Assistant",
      live: null,
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "The Tiffin Wala",
      subtitle: "E-Commerce Food Ordering Platform",
      tech: "MERN Stack",
      description: "End-to-end meal ordering system with secure payments and automated notifications.",
      highlights: [
        "100+ daily transactions",
        "35% increase in user retention",
        "45% reduction in page load time"
      ],
      github: "https://github.com/vaishnavisisodiya/the-tiffin-wala",
      live: "https://tiffinwala-five.vercel.app/",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const skills = {
    "Languages": ["JavaScript", "Java", "C++", "C", "Python", "HTML5", "CSS3", "SQL"],
    "Frontend": ["React.js", "Redux", "Redux Toolkit", "Tailwind CSS", "Vite", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "API Development"],
    "Databases": ["MongoDB", "MySQL", "Database Design"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman", "Cloudinary", "Razorpay", "Gemini API"]
  };

  const achievements = [
    { icon: Code2, text: "LeetCode Rating: 1581", subtext: "500+ problems solved" },
    { icon: Terminal, text: "Codeforces Max: 817", subtext: "350+ problems solved" }
  ];

  const leadership = [
    {
      role: "Event Head",
      organization: "Society of Computer Science and Engineering, NIT Jamshedpur",
      points: [
        "Led team of 15+ members for 2+ major technical events",
        "200+ participants across workshops and coding contests"
      ]
    },
    {
      role: "Volunteer",
      organization: "Unnat Bharat Abhiyan, NIT Jamshedpur",
      points: [
        "Technology-driven solutions impacting 50+ villagers",
        "Field surveys and welfare scheme promotion"
      ]
    }
  ];

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Animated cursor follower */}
      <div 
        className="fixed w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Geometric background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-purple-500/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-cyan-500/30 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rotate-12 animate-float" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="overflow-hidden mb-6">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter animate-slide-up" 
                style={{ fontFamily: '"Space Mono", monospace' }}>
              VAISHNAVI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-slide-up-delay-1">
                SISODIYA
              </span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <p className="text-xl md:text-2xl text-gray-400 font-mono animate-slide-up-delay-2">
              &lt;Full-Stack Developer /&gt;
            </p>
          </div>

          <div className="overflow-hidden mb-12">
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slide-up-delay-3">
              Master's Student at NIT Jamshedpur crafting intelligent web applications with MERN stack, 
              AI integration, and solving 500+ algorithmic challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-slide-up-delay-4">
            <a href="mailto:vaishvi.sisodiya28@gmail.com" 
               className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 border-4 border-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 transform hover:-translate-y-1">
              <Mail className="inline-block mr-2 w-5 h-5" />
              Get In Touch
            </a>
            <a href="#projects" 
               className="group px-8 py-4 bg-transparent text-white font-bold uppercase tracking-wider border-4 border-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              View Work
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12 animate-slide-up-delay-5">
            <a href="https://github.com/vaishnavisisodiya" target="_blank" rel="noopener noreferrer"
               className="p-3 border-2 border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group">
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/vaishnavisisodiya/" target="_blank" rel="noopener noreferrer"
               className="p-3 border-2 border-gray-600 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 group">
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://leetcode.com/u/user4567ED/" target="_blank" rel="noopener noreferrer"
               className="p-3 border-2 border-gray-600 hover:border-pink-400 hover:bg-pink-400/10 transition-all duration-300 group">
              <Code2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter" style={{ fontFamily: '"Space Mono", monospace' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              ABOUT_ME
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-2xl font-bold mb-2 text-cyan-400">Education</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="font-bold text-white">National Institute of Technology, Jamshedpur</p>
                    <p className="text-sm text-gray-400">Master of Computer Applications</p>
                    <p className="text-sm">2023 - 2026 | CGPA: 8.12</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">Shri Vaishnav Institute of Management, Indore</p>
                    <p className="text-sm text-gray-400">Bachelor of Computer Applications</p>
                    <p className="text-sm">2020 - 2023 | CGPA: 8.5</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-400">Core Competencies</h3>
                <p className="text-gray-300 leading-relaxed">
                  Specialized in building scalable full-stack applications with modern JavaScript frameworks. 
                  Experienced in integrating AI/ML capabilities, implementing secure authentication systems, 
                  and optimizing application performance. Strong foundation in data structures, algorithms, 
                  and competitive programming.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} 
                     className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-cyan-400 transition-all duration-300 group transform hover:-translate-y-2"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <achievement.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-1">{achievement.text}</h4>
                  <p className="text-gray-400">{achievement.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6 relative bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter" style={{ fontFamily: '"Space Mono", monospace' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              PROJECTS
            </span>
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} 
                   className="group relative overflow-hidden border-4 border-gray-800 hover:border-white transition-all duration-500 transform hover:scale-[1.02]"
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">{project.title}</h3>
                      <p className="text-cyan-400 font-mono text-sm">{project.subtitle}</p>
                      <p className="text-gray-500 font-mono text-xs mt-1">{project.tech}</p>
                    </div>
                    <div className="flex gap-3 mt-4 md:mt-0">
                      <a href={project.github} 
                         className="p-3 border-2 border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                      {project.live && (
                        <a href={project.live} 
                           className="p-3 border-2 border-gray-700 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="border-l-4 border-cyan-400 pl-4 py-2">
                        <p className="text-sm text-gray-300">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter" style={{ fontFamily: '"Space Mono", monospace' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              TECH_STACK
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} 
                   className="p-8 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-cyan-400 transition-all duration-300 group"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 group-hover:text-purple-400 transition-colors">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} 
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm font-mono border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="achievements" className="min-h-screen py-20 px-6 relative bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter" style={{ fontFamily: '"Space Mono", monospace' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              LEADERSHIP
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((item, index) => (
              <div key={index} 
                   className="p-8 border-4 border-gray-800 hover:border-purple-400 transition-all duration-300 group transform hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="w-8 h-8 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                    <p className="text-cyan-400 text-sm">{item.organization}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-gray-300 pl-6 border-l-2 border-gray-700 group-hover:border-purple-400 transition-colors">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter" style={{ fontFamily: '"Space Mono", monospace' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              LET'S_CONNECT
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Open to full-stack development opportunities, collaborations, and challenging projects. 
            Let's build something amazing together!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:vaishvi.sisodiya28@gmail.com"
               className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 border-4 border-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 transform hover:-translate-y-1 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="tel:+918319745828"
               className="group px-8 py-4 bg-transparent text-white font-bold uppercase tracking-wider border-4 border-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              +91-8319745828
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/vaishnavisisodiya" target="_blank" rel="noopener noreferrer"
               className="p-4 border-2 border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group transform hover:scale-110">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/vaishnavisisodiya/" target="_blank" rel="noopener noreferrer"
               className="p-4 border-2 border-gray-600 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 group transform hover:scale-110">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://leetcode.com/u/user4567ED/" target="_blank" rel="noopener noreferrer"
               className="p-4 border-2 border-gray-600 hover:border-pink-400 hover:bg-pink-400/10 transition-all duration-300 group transform hover:scale-110">
              <Code2 className="w-7 h-7" />
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 font-mono text-sm">
              © 2026 Vaishnavi Sisodiya. Crafted with React & Node.js
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delay-1 {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-3 {
          animation: slide-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-4 {
          animation: slide-up 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-5 {
          animation: slide-up 0.8s ease-out 1s forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
