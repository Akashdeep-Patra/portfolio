import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#f8f5f0]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:underline">Home</Link>
            <Link href="/about" className="font-medium hover:underline">About</Link>
            <Link href="/projects" className="font-medium hover:underline">Projects</Link>
            <Link href="/skills" className="font-medium hover:underline">Skills</Link>
            <Link href="/contact" className="font-medium hover:underline">Contact</Link>
          </nav>

          <div className="flex items-center">
            <div className="hidden md:flex items-center">
              <div className="flex items-center">
                <span className="text-sm mr-1">Uber Engineer</span>
                <span className="text-sm">Since 2020</span>
              </div>
              <div className="w-2 h-2 bg-amber-500 rounded-full mx-2"></div>
            </div>
            <Link href="/contact" className="ml-8 bg-[#000000] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-colors">
              Get in touch
            </Link>
            
            <button className="ml-4 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 