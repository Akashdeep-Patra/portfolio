import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f5f0]">
      {/* Background elements with positioning markers */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.8 8a5 5 0 0 0-6.8 0"></path><path d="M16.8 16a5 5 0 0 1-6.8 0"></path></svg>
          </div>
        </div>
      </div>
      
      <div className="absolute top-6 right-6 z-10">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
        </div>
      </div>
      
      {/* Main content */}
      <div className="w-full px-4 md:px-8 py-20 z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center w-full gap-8">
            <div className="flex-1">
              <h1 className="text-[7rem] md:text-[10rem] font-black tracking-tighter leading-none">
                <span className="block">code</span>
                <span className="block -mt-8 md:-mt-16">craft</span>
              </h1>
              
              <div className="max-w-2xl mt-6 mb-12">
                <p className="text-base md:text-lg">
                  Building innovative solutions through clean code and scalable architecture.
                  Engineering digital experiences that make a difference.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 max-w-md mb-12">
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-3xl font-bold">+</span>
                    <span className="text-4xl font-bold">15</span>
                  </div>
                  <p className="text-sm text-neutral-600">Projects shipped with impact across multiple domains and platforms</p>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-3xl font-bold">+</span>
                    <span className="text-4xl font-bold">20k</span>
                  </div>
                  <p className="text-sm text-neutral-600">Lines of production code powering applications used by millions</p>
                </div>
              </div>
              
              <div className="flex items-center justify-start gap-3 mb-8">
                <Link href="https://github.com/Akashdeep-Patra" target="_blank" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </Link>
                <Link href="https://www.linkedin.com/in/akashdeep-patra-632428122/" target="_blank" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Link>
                <Link href="https://www.instagram.com/mr_mornin_star/" target="_blank" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
                <Link href="mailto:adeep8961@gmail.com" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-amber-400 aspect-square w-full max-w-md">
                <div className="absolute top-0 right-0 p-4 z-10">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 p-4 z-10">
                  <div className="flex flex-col">
                    <div className="text-white text-lg font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="32" viewBox="0 0 100 32" fill="none" className="mb-4">
                        <path d="M10 20C20 5 40 15 30 25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <Image
                  src="/placeholder-photographer.jpg"
                  alt="Akashdeep Patra - Software Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-3xl bg-amber-400 aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-5xl font-bold">JS</div>
                      <div className="text-sm uppercase tracking-wider">JavaScript</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-3xl bg-neutral-100 aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-black text-center">
                      <div className="text-5xl font-bold">TS</div>
                      <div className="text-sm uppercase tracking-wider">TypeScript</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation and repetitive elements */}
      <div className="absolute bottom-0 left-0 right-0 py-6 z-10 bg-[#000000] text-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-black tracking-tighter">build.design.deploy.</div>
            <div className="text-4xl font-black tracking-tighter">engineer.</div>
          </div>
        </div>
      </div>
    </div>
  );
} 