import React from "react";

export function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Redux", level: 80 },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      name: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 65 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  return (
    <section className="py-24 bg-neutral-100 overflow-hidden" id="skills">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-amber-400 text-black rounded-full text-sm font-medium mb-4">Professional Expertise</div>
          <h2 className="text-5xl font-black tracking-tighter mb-4">Technical Skills</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            My technical toolkit has been refined through years of hands-on experience,
            continuous learning, and solving complex engineering challenges.
          </p>
          <p className="mb-4 text-neutral-700">Let&apos;s build something amazing together with these technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">{category.name}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-neutral-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-400 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-950 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold">Software Engineer 2</h4>
                    <span className="text-xs text-neutral-400">2020 - Present</span>
                  </div>
                  <div className="text-amber-400 mb-2">Uber</div>
                  <p className="text-sm text-neutral-300">
                    Building and maintaining critical systems that power Uber&apos;s marketplace.
                    Working with React, Node.js, and various cloud technologies.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold">Frontend Developer</h4>
                    <span className="text-xs text-neutral-400">2018 - 2020</span>
                  </div>
                  <div className="text-amber-400 mb-2">Previous Company</div>
                  <p className="text-sm text-neutral-300">
                    Developed responsive web applications and improved performance
                    by implementing modern frontend practices and optimizations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-950 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Education & Certifications</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold">Computer Science Degree</h4>
                    <span className="text-xs text-neutral-400">2014 - 2018</span>
                  </div>
                  <div className="text-amber-400 mb-2">University Name</div>
                  <p className="text-sm text-neutral-300">
                    Bachelor&apos;s degree with focus on algorithms, data structures,
                    and software engineering principles.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold">Certifications</h4>
                  </div>
                  <ul className="list-disc text-sm text-neutral-300 pl-5 space-y-1">
                    <li>AWS Certified Developer</li>
                    <li>MongoDB Certified Developer</li>
                    <li>React Advanced Patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-neutral-600">There&apos;s always something new to learn</p>
      </div>
    </section>
  );
} 