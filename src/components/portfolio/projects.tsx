import Image from "next/image";
import Link from "next/link";

export function Projects() {
  // Sample software projects
  const projects = [
    {
      id: 1,
      title: "Uber Marketplace",
      category: "Web Application",
      thumbnail: "/placeholder-portfolio-1.jpg",
      year: "2023",
      tags: ["React", "TypeScript", "GraphQL"],
      description: "A dynamic marketplace interface for Uber services with real-time updates and optimized performance."
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      category: "Frontend Development",
      thumbnail: "/placeholder-portfolio-2.jpg",
      year: "2022",
      tags: ["D3.js", "React", "Redux"],
      description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters."
    },
    {
      id: 3,
      title: "API Gateway Service",
      category: "Backend Development",
      thumbnail: "/placeholder-portfolio-3.jpg",
      year: "2022",
      tags: ["Node.js", "Express", "MongoDB"],
      description: "Scalable API gateway that handles authentication, rate limiting, and request routing."
    },
    {
      id: 4,
      title: "ML-Powered Recommendation System",
      category: "Machine Learning",
      thumbnail: "/placeholder-portfolio-4.jpg",
      year: "2021",
      tags: ["Python", "TensorFlow", "AWS"],
      description: "Recommendation engine using collaborative filtering and content-based approaches for personalized suggestions."
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      category: "Full Stack",
      thumbnail: "/placeholder-portfolio-5.jpg",
      year: "2021",
      tags: ["Socket.io", "React", "Node.js"],
      description: "Feature-rich chat platform with real-time messaging, file sharing, and end-to-end encryption."
    },
    {
      id: 6,
      title: "E-commerce Microservices",
      category: "Architecture",
      thumbnail: "/placeholder-portfolio-6.jpg",
      year: "2020",
      tags: ["Kubernetes", "Docker", "Golang"],
      description: "Microservices architecture for e-commerce operations, featuring service discovery and load balancing."
    },
  ];

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1 bg-neutral-100 rounded-full text-sm font-medium mb-4">Featured Projects</div>
            <h2 className="text-5xl font-black tracking-tighter mb-4">My Work</h2>
            <p className="max-w-lg text-neutral-600">
              A collection of projects that showcase my technical skills, problem-solving approach, 
              and passion for building exceptional software.
            </p>
          </div>
          
          <div className="flex space-x-3 mt-6 md:mt-0">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm">All Projects</button>
            <button className="px-4 py-2 bg-neutral-100 text-black rounded-full text-sm">Frontend</button>
            <button className="px-4 py-2 bg-neutral-100 text-black rounded-full text-sm">Backend</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <Link href={`/projects/${project.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm mb-1">{project.category}</div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm text-neutral-500">{project.category}</div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="text-sm text-neutral-500 mt-1">{project.year}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="https://github.com/Akashdeep-Patra" target="_blank" className="inline-flex items-center text-black font-medium">
            View All Projects on GitHub
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 