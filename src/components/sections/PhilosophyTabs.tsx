"use client";

import { useState } from "react";
import { hospitalData } from "@/data/hospitalData";
import { Lightbulb, Stethoscope, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const tabIcons: LucideIcon[] = [Lightbulb, Stethoscope, Users];

export function PhilosophyTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = hospitalData.philosophyTabs;

  return (
    <section className="py-20 sm:py-28 bg-[var(--color-light-gray)]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-[var(--color-neutral-gray)] mb-3 uppercase">
            LABION PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-primary-blue)] tracking-tight">
            보호자와 반려동물을 위한 진심
          </h2>
        </div>

        {/* Tab Pills */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white rounded-full shadow-sm border border-gray-100 gap-1 flex-wrap justify-center">
            {tabs.map((tab, idx) => {
              const Icon = tabIcons[idx];
              const isActive = activeTab === idx;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--color-primary-blue)] text-white shadow-md"
                      : "text-gray-500 hover:text-[var(--color-primary-blue)] hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.tabName}</span>
                  <span className="sm:hidden">{tab.tabName.length > 4 ? tab.tabName.slice(0, 6) : tab.tabName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 min-h-[220px] flex items-center justify-center relative overflow-hidden">
          {tabs.map((tab, idx) => {
            const Icon = tabIcons[idx];
            const isActive = activeTab === idx;

            return (
              <div
                key={tab.id}
                className={`w-full flex flex-col items-center text-center transition-all duration-400 ease-out ${
                  isActive
                    ? "opacity-100 translate-y-0 static"
                    : "opacity-0 translate-y-3 absolute pointer-events-none"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-light-blue)] text-[var(--color-primary-blue)] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary-blue)] mb-4 leading-snug max-w-xl">
                  {tab.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg font-medium">
                  {tab.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
