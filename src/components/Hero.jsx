import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const GlowButton = ({ children, variant = 'primary' }) => {
  const base =
    'relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const styles =
    variant === 'primary'
      ? 'text-white shadow-[0_0_30px_rgba(122,62,255,0.35)]'
      : 'text-white/90 ring-1 ring-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10';

  return (
    <div className="group">
      <div className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#7A3EFF] to-[#A56DFF] opacity-40 blur transition duration-300 group-hover:opacity-70" />
      <button className={`${base} ${styles} bg-gradient-to-r from-[#7A3EFF] to-[#A56DFF]`}>
        <span className="relative z-10">{children}</span>
      </button>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Background gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0618] via-[#100425] to-[#150032]" />

      {/* Spline Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top-center soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[60vh] w-[80vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(165,109,255,0.35),transparent_60%)]" />

      {/* Subtle grain texture */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] mix-blend-soft-light" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1200&q=60)', backgroundSize: 'cover' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md"
        >
          <span className="text-base">🚀</span>
          <span>Next-Gen AI Integration Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
          style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}
        >
          The Future Runs on Intelligent Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-[#A8A8B9] sm:text-lg"
        >
          Fanari Labs builds AI Agents and AI-integrated websites that think, act, and connect — powering automation for businesses across Europe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <GlowButton>See Agents in Action</GlowButton>
          <button className="relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 shadow-[inset_0_0_0_9999px_rgba(255,255,255,0.02)] backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            Get a Demo
          </button>
        </motion.div>

        {/* Dashboard mockup card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-14 w-full max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl"
        >
          {/* Neon trace border */}
          <div className="pointer-events-none absolute inset-[1px] rounded-2xl ring-1 ring-inset ring-white/10 [mask-image:linear-gradient(180deg,black,black,transparent)]" />
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(122,62,255,0.35)_0deg,transparent_120deg,rgba(165,109,255,0.35)_240deg,transparent_360deg)] opacity-30 blur-xl" />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">Agent Logs</p>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                <li>• Orchestrator: Scheduled 12 tasks</li>
                <li>• Retriever: Indexed 2,418 docs</li>
                <li>• Browser: Parsed 38 pages</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">Chat</p>
              <div className="mt-3 space-y-2 text-sm text-white/90">
                <div className="rounded-md bg-white/5 p-2">Can you summarize today’s leads?</div>
                <div className="rounded-md bg-gradient-to-r from-[#7A3EFF]/15 to-[#A56DFF]/15 p-2">Generated 7 qualified summaries.</div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">Throughput</p>
              <div className="mt-3 h-24 w-full rounded-md bg-white/5">
                <div className="h-full w-2/3 rounded-l-md bg-gradient-to-r from-[#7A3EFF] to-[#A56DFF]" />
              </div>
              <p className="mt-2 text-right text-xs text-white/70">66% capacity</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles around CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/3 top-1/2 h-24 w-24 animate-pulse rounded-full bg-[#7A3EFF]/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-20 w-20 animate-pulse rounded-full bg-[#A56DFF]/20 blur-3xl" />
      </motion.div>
    </section>
  );
}
