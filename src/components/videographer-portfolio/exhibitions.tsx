import Image from "next/image";

export function Exhibitions() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8">Exhibitions</h2>
            <p className="text-lg mb-8 max-w-lg">
              Experience the visual poetry live in selected galleries around the world.
              Each exhibition presents unique perspectives and storytelling through the lens.
            </p>
            
            <div className="space-y-8">
              <div className="border-t border-neutral-200 pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Madrid Gallery, Spain</h3>
                  <div className="text-sm">21 Nov 2023</div>
                </div>
                <p className="text-neutral-600 mb-4">
                  Featuring a collection of visual narratives exploring urban landscapes and human connection.
                </p>
                <button className="bg-neutral-900 text-white px-4 py-2 rounded-md text-sm">
                  Buy Ticket
                </button>
              </div>
              
              <div className="border-t border-neutral-200 pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Manchester Museum, UK</h3>
                  <div className="text-sm">30 Nov 2023</div>
                </div>
                <p className="text-neutral-600 mb-4">
                  A retrospective showcase featuring decade-spanning works exploring light and shadow.
                </p>
                <button className="bg-neutral-900 text-white px-4 py-2 rounded-md text-sm">
                  Buy Ticket
                </button>
              </div>
              
              <div className="border-t border-neutral-200 pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Tokyo Arts Center, Japan</h3>
                  <div className="text-sm">15 Dec 2023</div>
                </div>
                <p className="text-neutral-600 mb-4">
                  Innovative digital and physical installations creating immersive visual experiences.
                </p>
                <button className="bg-neutral-900 text-white px-4 py-2 rounded-md text-sm">
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-400 rounded-full -z-10"></div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/placeholder-exhibition.jpg"
                alt="Exhibition space with photographs"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <div className="text-sm mb-2">Featured Exhibition</div>
                  <h3 className="text-2xl font-bold mb-2">Visual Poetry: The Retrospective</h3>
                  <p>A decade of storytelling through the lens</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-neutral-100 rounded-full -z-10"></div>
            
            <div className="mt-8 pl-8">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/placeholder-exhibition-2.jpg"
                  alt="Gallery space with people viewing art"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-bold">Paris Showcase 2022</h4>
                    <p>Award-winning collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 