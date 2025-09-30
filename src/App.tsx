  import React from 'react';
  import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Brain, Cpu, Award, Target, Heart, Camera, Music, BookOpen, MapPin, Calendar, Building, Shield, BarChart3, Lock, TrendingUp, Users, Globe, Zap, Star, Crown } from 'lucide-react';

  // Easy to edit content - replace these with actual content
  const PORTFOLIO_DATA = {
    student: {
      name: "SRAVAN MANDAVA",
      title: "Computer Science and Engineering  Student",
      email: "sravanmandava1126@gmail.com",
      phone: "8317634794",
      linkedin: "https://www.linkedin.com/in/sravan-mandava-28b78226a",
      github: "https://github.com/Sravan11-5",
      image: "/My pic.jpg", // Student's actual photo
      objective: "Aspiring Computer Science professional with expertise in web development, AI/ML, and data-driven solutions. Seeking opportunities to apply technical skills and contribute to innovative projects that solve real-world problems."
    },
    education: [
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "NRI Institute of Technology (Affiliated to JNTU Kakinada)",
        year: "2022-2026",
        grade: "87%",
        description: "Specialization in Core CSE Background "
      },
      {
        degree: "Intermediate (MPC)",
        institution: "Sri Srinivasa Gravity Junior College, State Board",
        year: "2020-2022",
        grade: "82%",
        description: "Mathematics, Physics, Chemistry"
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Sri Srinivasa Aksharalayam, State Board",
        year: "2020",
        grade: "97%",
        description: "Foundation in Science and Mathematics"
      }
    ],
    experience: [
      {
        title: "On-site Internship",
        company: "Real Time Governance Society (RTGS), Chief Minister's Office",
        location: "Government of Andhra Pradesh",
        duration: "July 2025 - Present",
        type: "On-site",
        description: "Currently working as an Intern at the Real Time Governance Society (RTGS), Chief Minister's Office, Government of Andhra Pradesh, where I am assisting in the development of real-time analytical solutions and contributing to key governance initiatives.",
          officePhoto: "/officephoto.jpg", // Actual office photo OF ME 
        achievements: ["Developed real-time analytical solutions to support fast news monitoring and informed decision-making.",

  "Contributed to key governance initiatives by building technology that enhanced state-level operations.",
  "Gained practical exposure to government processes while working in a high-responsibility professional environment."]
      },
      {
        title: "Business Analytics Intern",
        company: "Cognifyz Technologies",
        duration: "May 2025 - June 2025",
        type: "Virtual/Remote",
        description: "Completed a 2-month virtual internship as a Business Analytics Intern at Cognifyz Technologies, focusing on data analysis, business insights, and collaborative remote teamwork.",
        achievements: ["Data analysis and visualization", "Business insights generation", "Remote collaboration skills"]
      }
    ],
    projects: [
      {
        name: "Real-Time News Analysis & Monitoring System",
        description: "Developed and deployed a real-time system to collect, analyze, and monitor live news data for the Andhra Pradesh Government (RTGS, CM Office).",
        tech: ["Web Development", "API Integration", "Web Scraping", "MongoDB", "Real-time Data Processing", "Automation"],
        details: "Built a production-ready pipeline that ingests live news from multiple sources, normalizes and enriches articles, and surfaces high-signal events for decision makers. The system includes automated fetchers, data quality checks, deduplication, sentiment/topic tagging, and dashboards to monitor incidents in real time. Deployed components with robust error handling and observability to ensure timely updates to RTGS leadership.",
        icon: TrendingUp
      },
      {
        name: "Digital Safety Guide",
        description: "Developed a guide to promote safe online practices for citizens. Provided actionable tips to enhance digital security and awareness.",
        tech: ["Web Development", "UI/UX Design", "Security", "User Education"],
        details: "Designed and shipped a responsive microsite that consolidates best practices for password hygiene, phishing awareness, privacy settings, and device security. Content was structured for quick scanning and localized understanding, with accessible visuals and checklists to increase adoption across a broad audience.",
        icon: Shield
      },
      {
        name: "Password Manager-System Application",
        description: "Created a tool to securely store and manage passwords. Helped users maintain strong and organized credentials safely.",
        tech: ["Security", "Encryption", "User Interface"],
        details: "Implemented a secure credential vault with client-side encryption, strong key derivation, and categorized entries. Added password strength indicators, breach checks, and ergonomic UI flows for adding, searching, and auto-filling credentials while maintaining strict data privacy.",
        icon: Lock
      },
      {
        name: "Financial Fraud Detection and Forensic Data Analysis",
        description: "Analyzed financial data to detect fraud patterns and irregularities. Supported investigations and improved risk management decisions.",
        tech: ["Machine Learning", "Data Analysis", "Data Visualization", "Fraud Detection"],
        details: "Built analytics to identify anomalous transactions using statistical features and ML signals (frequency anomalies, amount outliers, network relationships). Produced investigator-friendly visualizations and case summaries to accelerate triage and support evidence-based decision making.",
        icon: BarChart3
      }
    ],
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Data Analytics", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "React", level: 75 },
      { name: "Machine Learning", level: 80 }
    ],  
    technicalSkills: {
      languages: ["Python", "C", "Java","R", "HTML", "CSS", "JavaScript"],
      tools: ["Power BI", "Tableau", "MS Excel", "AI-tools", "VS Code", "Git", "GitHub", "n8n", "Canva"],
      frameworks: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "React", "Flask", "Bootstrap"],
      databases: ["MongoDB", "MySQL", "SQL"],
      methodologies: ["Agile", "Scrum", "System Design (Basics)", "Documentation"],
      machineLearning: ["Model Building", "Data Preprocessing", "Feature Engineering", "Model Evaluation", "Scikit-learn", "Model Deployment (Basics)"]
    },
    certifications: [
      "Deloitte - Data Analytics & Forensic Technology",
      "TATA - Data Visualization: Empowering Business with Effective Insights",
      "Power BI Certification",
      "Generative AI Certification",
      "Robotics Certification",
      "Certified in OpenCV Bootcamp by OpenCV University with a Grade of 100%",
      "Infosys-Springboard Cerifications [Web Dev]",
      

    ],
    achievements: [
      "Student Coordinator for ICRAIC2IT Paper Conference, CSE Dept, NRIIT [2025]",
      "Received Student Coordinator Award for Organizing the College Fest [SUNRISE-2K25] at NRIIT  [2025]",
      " Students Coordinator for National Level Hackathon-4.0  - CSE Dept, NRIIT [2024]",
      "Elected as School People Leader[SPL] in schooling ",
      "Won medals in sports and Karate, demonstrating discipline, teamwork, and dedication."
    ],
    strengths: [
      "Problem Solving and Analytical Thinking",
      "Critical Thinking and Adaptability",
      "Team Coordination and Leadership", 
      "Good Decision Making",
      "Real-time System Development"
    ],
    hobbies: [
      { name: "Browsing Internet", icon: Globe },
      { name: "Learning New Technologies", icon: Brain },
      { name: "Innovation & Ideation", icon: Zap },
      { name: "Playing Physical Games", icon: Target },
      { name: "Music / Singing", icon: Music }
    ],
    languages: ["English", "Hindi", "Telugu"]
  };

  function App() {
    const [expandedProject, setExpandedProject] = React.useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    
    // Navigation scroll function
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false); // Close mobile menu after clicking
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center h-16 w-full">
              
              {/* Navigation Menu */}
              <div className="block">
                <div className="flex items-baseline space-x-8">
                  <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Education
                  </button>
                  <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Work Experience
                  </button>
                  <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Projects
                  </button>
                  <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Technical Skills
                  </button>
                  <button onClick={() => scrollToSection('achievements')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Certifications & Achievements
                  </button>
                  <button onClick={() => scrollToSection('strengths')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Strengths
                  </button>
                  <button onClick={() => scrollToSection('hobbies')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Hobbies & Interests
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Contact
                  </button>
                  <button onClick={() => scrollToSection('conclusion')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4">
                    Final Thoughts
                  </button>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-300 hover:text-white"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-gray-800/95 border-t border-gray-700">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Home</button>
                  <button onClick={() => scrollToSection('education')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Education</button>
                  <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Work Experience</button>
                  <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Projects</button>
                  <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Technical Skills</button>
                  <button onClick={() => scrollToSection('achievements')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Certifications & Achievements</button>
                  <button onClick={() => scrollToSection('strengths')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Strengths</button>
                  <button onClick={() => scrollToSection('hobbies')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Hobbies & Interests</button>
                  <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Contact</button>
                  <button onClick={() => scrollToSection('conclusion')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Final Thoughts</button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden pt-20">
          
          {/* Simple Welcome Heading */}
          <div className="absolute top-32 left-0 right-0 text-center z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Welcome to my portfolio</h1>
          </div>
          {/* Clean Geometric Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400/20 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-400/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
          </div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          
          {/* No header text - clean look */}
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 mt-6">
            {/* Student Image with Clean Design */}
            <div className="order-2 lg:order-1 flex justify-center animate-fade-in-left">
              <div className="relative">
                <img 
                  src={PORTFOLIO_DATA.student.image}
                  alt={PORTFOLIO_DATA.student.name}
                  className="relative w-96 h-96 rounded-full object-cover object-top border-4 border-white/40 shadow-2xl hover:scale-105 transition-all duration-500 brightness-90 contrast-110"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>

            {/* Welcome Text with AI/ML Theme */}
            <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in-right">
              <div className="relative">
                {/* Background with computer/AI theme */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-cyan-900/30 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
                  
                  <h1 className="text-3xl font-bold text-blue-300 mb-2 animate-fade-in-up">
                    Hi, I am
                  </h1>
                  <h2 className="text-4xl font-bold text-white mb-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    {PORTFOLIO_DATA.student.name}
                  </h2>
                  <p className="text-xl text-blue-300 mb-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    {PORTFOLIO_DATA.student.title}
                  </p>
                  
                  
                  {/* Objective */}
                  <p className="text-gray-300 text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    {PORTFOLIO_DATA.student.objective}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 bg-gradient-to-br from-gray-900/80 to-black/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-16 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="space-y-8">
              {PORTFOLIO_DATA.education.map((edu, index) => (
                <div key={index} className="group bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{edu.degree}</h3>
                      <p className="text-blue-200 text-lg">{edu.institution}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cyan-300 font-bold text-xl">{edu.year}</p>
                      <p className="text-green-400 font-semibold text-lg">{edu.grade}</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-lg">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="py-20 px-4 bg-gradient-to-br from-black/80 to-gray-900/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work Experience</span>
            </h2>
            
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div key={index} className="mb-16 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl relative">
                {/* Header with logos and title */}
                {index === 0 && (
                  <div className="flex items-center justify-between mb-8">
                    {/* AP Logo */}
                    <div className="flex-shrink-0">
                      <img 
                        src="/Ap-logo.png" 
                        alt="AP Government Logo" 
                        className="w-24 h-24 rounded-full object-cover border-3 border-white/30 shadow-lg hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Centered Title */}
                    <div className="flex-1 text-center">
                      <h3 className="text-3xl font-bold text-white">{exp.title}</h3>
                    </div>
                    
                    {/* RTGS Logo */}
                    <div className="flex-shrink-0">
                      <img 
                        src="/RTGS logo.png" 
                        alt="RTGS Logo" 
                        className="w-24 h-24 rounded-full object-cover border-3 border-white/30 shadow-lg hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      {index === 1 && (
                        <>
                          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                            <BarChart3 className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-white">Online Internship</h3>
                        </>
                      )}
                    </div>
                    <p className="text-2xl text-blue-300">{exp.company}</p>
                    {exp.location && <p className="text-xl text-purple-300">{exp.location}</p>}
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center text-cyan-300 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center text-green-300 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30 hover:bg-green-500/20 transition-all duration-300 cursor-pointer group">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="group-hover:hidden">{exp.type}</span>
                        <span className="hidden group-hover:inline">
                          {index === 0 ? "AP Secretariat, Velagapudi, Amaravati" : exp.type}
                        </span>
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white">Key Achievements:</h4>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-green-300">
                          <Award className="w-5 h-5 mr-3 text-yellow-400" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Side */}
                  {(index === 0 && exp.officePhoto) && (
                    <div className="flex flex-col items-center space-y-6">
                      <img 
                        src={exp.officePhoto}
                        alt="Office"
                        className="w-full max-w-lg h-96 object-cover object-center rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border-2 border-gray-600/50"
                        style={{ objectPosition: 'center 20%' }}
                      />
                      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50">
                        <p className="text-white text-lg font-semibold text-center">
                          Working under RTGS and serving to the Government of Andhra Pradesh, contributing to state-level governance and real-time analytical solutions.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Online Internship Image */}
                  {index === 1 && (
                    <div className="flex flex-col items-center space-y-6">
                      <img 
                        src="/ONLINE INTERNSHIP IMAGE.jpg"
                        alt="Online Internship"
                        className="w-full max-w-lg h-96 object-cover object-center rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border-2 border-gray-600/50"
                      />
                      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50">
                        <p className="text-white text-lg font-semibold text-center">
                          Completed virtual internship focusing on data analysis, business insights, and remote collaboration skills.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-900/80 to-black/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_DATA.projects.map((project, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{project.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="mt-6 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200"
                    aria-expanded={expandedProject === index}
                  >
                    <ExternalLink className="w-6 h-6" />
                    <span className="text-sm">View details</span>
                  </button>

                  {expandedProject === index && (
                    <div className="mt-4 p-5 rounded-xl border border-cyan-700/40 bg-gradient-to-br from-gray-900/60 to-gray-800/60">
                      <p className="text-gray-200 leading-relaxed">
                        {project.details || project.description}
                      </p>
                      {project.tech?.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key technologies</h4>
                          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                            {project.tech.map((t, i) => (
                              <li key={i}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gradient-to-br from-black/80 to-gray-900/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technical Skills</span>
            </h2>
            
            {/* Modern Skill Categories (pills instead of progress bars) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Languages */}
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/50">
                <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.technicalSkills.languages.map((lang, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm border border-blue-400/40 text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 transition-colors">{lang}</span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50">
                <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                  <Cpu className="w-6 h-6 mr-2" />
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.technicalSkills.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm border border-purple-400/40 text-purple-200 bg-purple-500/10 hover:bg-purple-500/20 transition-colors">{tool}</span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-700/50">
                <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-2" />
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.technicalSkills.frameworks.map((framework, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm border border-cyan-400/40 text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors">{framework}</span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm rounded-2xl p-6 border border-green-700/50">
                <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-2" />
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.technicalSkills.databases.map((db, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm border border-green-400/40 text-green-200 bg-green-500/10 hover:bg-green-500/20 transition-colors">{db}</span>
                  ))}
                </div>
              </div>

              {/* Software Engineering */}
              <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50">
                <h3 className="text-xl font-bold text-indigo-300 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Software Engineering
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.technicalSkills.methodologies.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm border border-indigo-400/40 text-indigo-200 bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors">{item}</span>
                  ))}
                </div>
              </div>

              {/* Machine Learning */}
              <div className="bg-gradient-to-br from-violet-900/30 to-violet-800/30 backdrop-blur-sm rounded-2xl p-6 border border-violet-700/50">
                <h3 className="text-xl font-bold text-violet-300 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Machine Learning
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.technicalSkills.machineLearning.map((ml, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm border border-violet-400/40 text-violet-200 bg-violet-500/10 hover:bg-violet-500/20 transition-colors">{ml}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-gray-900/80 to-black/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Certifications & Achievements</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certifications */}
              <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-700/50">
                <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {PORTFOLIO_DATA.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                      <Star className="w-5 h-5 mr-3 text-yellow-400" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-700/50">
                <h3 className="text-2xl font-bold text-orange-300 mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {PORTFOLIO_DATA.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start text-gray-300 hover:text-orange-300 transition-colors duration-300">
                      <Crown className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section id="strengths" className="py-20 px-4 bg-gradient-to-br from-black/80 to-gray-900/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Strengths</span>
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PORTFOLIO_DATA.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center text-white hover:text-pink-300 transition-colors duration-300">
                    <div className="w-3 h-3 bg-pink-400 rounded-full mr-4"></div>
                    <p className="text-lg">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="py-20 px-4 bg-gradient-to-br from-gray-900/80 to-black/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Hobbies & Interests</span>
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {PORTFOLIO_DATA.hobbies.map((hobby, index) => (
                  <div key={index} className="text-white hover:text-teal-300 transition-colors duration-300">
                    <hobby.icon className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                    <p className="text-lg font-medium">{hobby.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500 rounded-full blur-2xl animate-ping"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="mb-16">
              <h2 className="text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">Let's Connect</span>
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to collaborate on exciting projects? Let's turn ideas into reality together!
              </p>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-lg font-medium">Available for new opportunities</span>
              </div>
            </div>
            
            {/* Simple Contact Information */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-center group cursor-pointer">
                    <Mail className="w-8 h-8 text-blue-400 mr-4" />
                    <div className="text-left flex-1">
                      <p className="text-white font-semibold text-lg">Email</p>
                      <a href={`mailto:${PORTFOLIO_DATA.student.email}`} className="text-blue-300 hover:text-blue-200 transition-colors flex items-center">
                        {PORTFOLIO_DATA.student.email}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100" />
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Click to send email</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group cursor-pointer">
                    <Phone className="w-8 h-8 text-green-400 mr-4" />
                    <div className="text-left flex-1">
                      <p className="text-white font-semibold text-lg">Phone</p>
                      <a href={`tel:${PORTFOLIO_DATA.student.phone}`} className="text-green-300 hover:text-green-200 transition-colors flex items-center">
                        {PORTFOLIO_DATA.student.phone}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100" />
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Click to call</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center group cursor-pointer">
                    <Linkedin className="w-8 h-8 text-blue-400 mr-4" />
                    <div className="text-left flex-1">
                      <p className="text-white font-semibold text-lg">LinkedIn</p>
                      <a href={PORTFOLIO_DATA.student.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors flex items-center">
                        Connect with me
                        <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100" />
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Click to open LinkedIn profile</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group cursor-pointer">
                    <Github className="w-8 h-8 text-gray-400 mr-4" />
                    <div className="text-left flex-1">
                      <p className="text-white font-semibold text-lg">GitHub</p>
                      <a href={PORTFOLIO_DATA.student.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-200 transition-colors flex items-center">
                        View my code
                        <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100" />
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Click to open GitHub profile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div id="conclusion" className="border-t border-gray-700 pt-12">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-3xl font-bold text-white mb-4">Thank You</h3>
                <p className="text-gray-300 text-xl">Thank you for taking the time to explore my portfolio. I'm excited about the possibility of contributing to innovative projects and would welcome the opportunity to discuss how my skills and passion can add value to your team.</p>
                <div className="mt-6">
                  <p className="text-center text-gray-300">
                    <span className="font-medium">Languages known: </span>
                    <span className="text-white">{"• " + PORTFOLIO_DATA.languages.join(" • ")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default App;