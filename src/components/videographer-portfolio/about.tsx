import Image from "next/image";
import React from "react";

export function About() {
  return (
    <section className="py-24 bg-neutral-100 overflow-hidden" id="about">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Column */}
          <div className="relative order-2 md:order-1">
            <div className="relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/videographer-portrait.jpg"
                alt="Videographer portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-400 rounded-xl p-6 shadow-xl max-w-[280px]">
              <p className="text-lg font-medium mb-2">Experience</p>
              <div className="text-4xl font-bold">7+ Years</div>
              <p className="mt-2 text-sm">Creating compelling visual stories</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 bg-amber-400 text-black rounded-full text-sm font-medium mb-4">About Me</div>
            <h2 className="text-5xl font-black tracking-tighter mb-6">Capturing Life&apos;s Moments in Motion</h2>
            
            <div className="space-y-6 text-neutral-600">
              <p>
                I&apos;m Alex Chen, a passionate videographer and filmmaker with a keen eye for storytelling and visual aesthetics. My journey in visual storytelling began in 2016, and I&apos;ve been crafting compelling narratives through video ever since.
              </p>
              
              <p>
                My approach combines technical precision with creative vision. I believe that every project has a unique story waiting to be told, and I&apos;m dedicated to finding the most impactful way to tell it.
              </p>
              
              <p>
                When I&apos;m not behind the camera, you can find me exploring new locations for shoots, studying film techniques, or collaborating with other creative professionals to push the boundaries of what&apos;s possible in video production.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-amber-400">100+</div>
                <p className="text-neutral-600">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400">40+</div>
                <p className="text-neutral-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 