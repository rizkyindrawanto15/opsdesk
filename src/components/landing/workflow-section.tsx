"use client";

import * as React from "react";
import { Radio, GitPullRequest, CheckCircle2, FileText } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function WorkflowSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Radio,
      title: t.landing.step1Title,
      description: t.landing.step1Desc,
    },
    {
      number: "02",
      icon: GitPullRequest,
      title: t.landing.step2Title,
      description: t.landing.step2Desc,
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: t.landing.step3Title,
      description: t.landing.step3Desc,
    },
    {
      number: "04",
      icon: FileText,
      title: t.landing.step4Title,
      description: t.landing.step4Desc,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50/60 border-b border-neutral-200/80">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            {t.landing.workflowSub}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            {t.landing.workflowHeading}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500">
            {t.landing.workflowDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col p-5 rounded-xl border border-neutral-200/90 bg-white shadow-subtle"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-8 w-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xs font-semibold text-neutral-900 mb-1.5">
                  {step.title}
                </h3>

                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
