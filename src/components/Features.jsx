import React from 'react';
import { Rocket, Workflow, Bot } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.06]">
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-[#7A3EFF]/20 via-transparent to-[#A56DFF]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A3EFF]/30 to-[#A56DFF]/30 text-white">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
      </div>
      {/* Neon line effect */}
      <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#7A3EFF] to-[#A56DFF] transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default function Features() {
  return (
    <section className="relative mx-auto -mt-8 w-full max-w-6xl px-6 pb-8 sm:-mt-10 sm:pb-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <FeatureCard
          icon={Bot}
          title="AI Agents"
          desc="Composable agents that research, plan, and execute tasks across your stack with guardrails and observability."
        />
        <FeatureCard
          icon={Rocket}
          title="AI-Integrated Websites"
          desc="Production-grade websites infused with intelligent search, chat, and personalization, built for speed and scale."
        />
        <FeatureCard
          icon={Workflow}
          title="Workflow Automation"
          desc="Connect CRMs, data warehouses, and SaaS to automate repetitive workflows with human-in-the-loop approvals."
        />
      </div>
    </section>
  );
}
