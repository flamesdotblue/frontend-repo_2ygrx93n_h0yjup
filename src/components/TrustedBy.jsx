import React from 'react';

const logos = ['Quantum', 'NovaTech', 'PulseAI', 'Apex Systems', 'OrbitFlow'];

export default function TrustedBy() {
  return (
    <section className="relative w-full bg-gradient-to-b from-transparent to-black/30 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-white/60">Trusted by forward-thinking teams</p>
        <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((name) => (
            <div key={name} className="flex h-10 items-center opacity-70 transition hover:opacity-100">
              <span className="select-none bg-gradient-to-b from-white to-white/60 bg-clip-text text-base font-semibold text-transparent">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
