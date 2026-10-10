import { HTBStats } from "./htb-stats";

export function Skills() {
  const stats = [
    { label: "Projects Completed", value: "3+" },
    { label: "Certifications Earned", value: "2+" },
    { label: "Years of Experience", value: "1" },
  ];

  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        "React / Next.js",
        "Node.js",
        "Tailwind CSS",
        "TypeScript",
        "REST APIs",
      ],
    },
    {
      title: "Network Security",
      skills: [
        "Firewalls",
        "VPN Configurations",
        "Network Monitoring",
        "Packet Analysis",
        "IDS / IPS",
      ],
    },
    {
      title: "Ethical Hacking",
      skills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Exploitation",
        "OSINT",
        "CTF Challenges",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#cbc9c0] dark:border-white/5 relative transition-colors duration-300">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#a72334] dark:font-mono dark:text-cyan-400 transition-colors">
          Skills &amp;&amp; Expertise
        </h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-16 transition-colors">
          A breakdown of my technical proficiencies and hands-on experience in various domains of computer science and cybersecurity.
        </p>

        <HTBStats />
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-20 relative z-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex-1 min-w-[250px] bg-[#f0f0ea] dark:bg-[#111827] border border-[#cbc9c0] dark:border-white/10 p-8 rounded-lg text-center hover:border-[#a72334]/30 dark:hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(167,35,52,0.1)] dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all group">
            <div className="text-4xl font-bold text-[#a72334] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500 mb-2 group-hover:scale-110 transition-transform inline-block">
              {stat.value}
            </div>
            <div className="text-gray-700 dark:text-gray-400 font-medium uppercase tracking-wider text-sm mt-2 transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-[#f0f0ea] dark:bg-[#111827] border border-[#cbc9c0] dark:border-white/10 rounded-xl p-6 hover:border-[#a72334]/30 dark:hover:border-cyan-500/30 transition-colors"
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-[#a72334] dark:text-cyan-400 mb-4 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-mono rounded-md bg-white dark:bg-[#0B1120] border border-[#cbc9c0] dark:border-white/10 text-gray-800 dark:text-gray-300 hover:border-[#a72334]/40 dark:hover:border-cyan-500/40 hover:text-[#a72334] dark:hover:text-cyan-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
