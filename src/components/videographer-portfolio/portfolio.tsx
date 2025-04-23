import Image from "next/image";
import Link from "next/link";

export function Portfolio() {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "Urban Exploration",
      category: "Documentary",
      thumbnail: "/placeholder-portfolio-1.jpg",
      year: "2023",
    },
    {
      id: 2,
      title: "Light & Shadows",
      category: "Commercial",
      thumbnail: "/placeholder-portfolio-2.jpg",
      year: "2023",
    },
    {
      id: 3,
      title: "Human Connection",
      category: "Narrative",
      thumbnail: "/placeholder-portfolio-3.jpg",
      year: "2022",
    },
    {
      id: 4,
      title: "Nature Abstracts",
      category: "Experimental",
      thumbnail: "/placeholder-portfolio-4.jpg",
      year: "2022",
    },
    {
      id: 5,
      title: "City Rhythms",
      category: "Documentary",
      thumbnail: "/placeholder-portfolio-5.jpg",
      year: "2021",
    },
    {
      id: 6,
      title: "Emotional Journey",
      category: "Narrative",
      thumbnail: "/placeholder-portfolio-6.jpg",
      year: "2021",
    },
  ];

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1 bg-neutral-100 rounded-full text-sm font-medium mb-4">Selected Projects</div>
            <h2 className="text-5xl font-black tracking-tighter mb-4">Portfolio</h2>
            <p className="max-w-lg text-neutral-600">
              A showcase of my best work across different genres and styles, 
              highlighting my approach to visual storytelling.
            </p>
          </div>
          
          <div className="flex space-x-3 mt-6 md:mt-0">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm">All Projects</button>
            <button className="px-4 py-2 bg-neutral-100 text-black rounded-full text-sm">Documentary</button>
            <button className="px-4 py-2 bg-neutral-100 text-black rounded-full text-sm">Commercial</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <Link href={`/portfolio/${project.id}`}>
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
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-neutral-500">{project.category}</div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                  <div className="text-sm text-neutral-500">{project.year}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/portfolio" className="inline-flex items-center text-black font-medium">
            View All Projects
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