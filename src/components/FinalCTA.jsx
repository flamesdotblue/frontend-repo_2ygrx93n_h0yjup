import React from 'react';

export default function FinalCTA() {
  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,rgba(122,62,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Let’s Build Intelligence Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
          Partner with Fanari Labs to design, deploy, and scale AI systems that create real leverage for your team.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7A3EFF] to-[#A56DFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(122,62,255,0.35)] transition-shadow hover:shadow-[0_0_50px_rgba(122,62,255,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Start a Project
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
