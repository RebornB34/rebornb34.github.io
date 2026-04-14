import { Code, Clock, Sparkles, HardDrive, Shield } from "lucide-react";

const PROJECTS = [
  { 
    name: "Cyber Dashboard UI", 
    desc: "A responsive React-based security operations center interface with real-time alerting features.",
    icon: Shield,
    tags: ["React", "TailwindCSS", "WebSocket"]
  },
  { 
    name: "Packet Sniffer CLI", 
    desc: "A high-performance Rust command-line tool for analyzing deep network packets.",
    icon: HardDrive,
    tags: ["Rust", "Networking", "CLI"]
  },
  { 
    name: "JWT Cracker", 
    desc: "An optimization-focused Python script to brute-force weak JWT secrets.",
    icon: Code,
    tags: ["Python", "Security", "Cryptography"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#cbc9c0] dark:border-white/5 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#a72334] dark:font-mono dark:text-cyan-400 transition-colors inline-flex items-center gap-3">
          <Sparkles className="w-8 h-8" />
          Featured Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
          Sneak peek at what I am currently working on. These projects are almost ready for their debut.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          return (
            <div 
              key={index} 
              className="group relative bg-[#f0f0ea] dark:bg-[#0a0f18] p-8 rounded-2xl border border-[#cbc9c0] dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 bg-[#a72334]/10 dark:bg-cyan-400/10 text-[#a72334] dark:text-cyan-400 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md border border-[#a72334]/20 dark:border-cyan-400/20">
                <Clock className="w-3.5 h-3.5" />
                Coming Soon
              </div>

              <div>
                <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl border border-[#cbc9c0] dark:border-white/10 flex items-center justify-center mb-6 text-[#a72334] dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-gray-100 mb-3 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 transition-colors">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200/50 dark:bg-white/5 px-2.5 py-1 rounded-md transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Top Glow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#a72334] dark:via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
