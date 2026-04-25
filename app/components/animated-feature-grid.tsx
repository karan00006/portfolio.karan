"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Layers2, Rocket, ShieldCheck } from "lucide-react";

type Feature = {
  title: string;
  detail: string;
};

type AnimatedFeatureGridProps = {
  features: Feature[];
};

const icons = [BriefcaseBusiness, Layers2, Rocket, ShieldCheck];

export default function AnimatedFeatureGrid({ features }: AnimatedFeatureGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {features.map((feature, index) => {
        const Icon = icons[index % icons.length];

        return (
          <motion.article
            key={feature.title}
            className="inline-chip rounded-2xl p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.36, ease: "easeOut" }}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[var(--accent)]">
                <Icon size={19} strokeWidth={2.2} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{feature.detail}</p>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
