import Image from "next/image";

export function About() {
  return (
    <section className="py-24 bg-neutral-950 text-white overflow-hidden" id="about">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder-videographer.jpg"
                  alt="Akashdeep Patra - Software Engineer"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-48 aspect-square bg-amber-400 rounded-full flex items-center justify-center">
                <div className="text-black text-center">
                  <div className="text-lg font-bold">SWE</div>
                  <div className="text-sm">@ Uber</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-12 -left-12 w-64 h-64 border border-neutral-800 rounded-full -z-10"></div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 border border-neutral-800 rounded-full -z-10"></div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-1 bg-amber-400 text-black rounded-full text-sm font-medium mb-6">About Me</div>
            <h2 className="text-5xl font-black tracking-tighter mb-8">Akashdeep Patra</h2>
            
            <div className="space-y-6 text-neutral-300">
              <p>
                I am a Software Engineer 2 at Uber with a passion for building innovative digital solutions. 
                I'm a tech enthusiast and an open-source advocate who enjoys writing – both code and beyond.
              </p>
              
              <p>
                My work centers around creating efficient, scalable applications with modern technologies. 
                I'm always open to collaborating on projects and innovative/disruptive ideas that push 
                the boundaries of what's possible in tech.
              </p>
              
              <div className="pt-6 mt-6 border-t border-neutral-800">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <div>
                    <div className="text-3xl font-bold text-amber-400">7+</div>
                    <div className="text-sm">Years Coding</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-400">15+</div>
                    <div className="text-sm">Technologies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-400">20+</div>
                    <div className="text-sm">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-400">3+</div>
                    <div className="text-sm">Years at Uber</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="px-4 py-1 bg-neutral-900 rounded-full text-sm">JavaScript</div>
                <div className="px-4 py-1 bg-neutral-900 rounded-full text-sm">React</div>
                <div className="px-4 py-1 bg-neutral-900 rounded-full text-sm">Node.js</div>
                <div className="px-4 py-1 bg-neutral-900 rounded-full text-sm">TypeScript</div>
                <div className="px-4 py-1 bg-neutral-900 rounded-full text-sm">Python</div>
              </div>
              
              <div className="flex gap-4 pt-2">
                <a href="https://www.linkedin.com/in/akashdeep-patra-632428122/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/mr_mornin_star/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="mailto:adeep8961@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://github.com/Akashdeep-Patra" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 