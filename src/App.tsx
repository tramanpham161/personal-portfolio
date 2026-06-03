import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  ShieldCheck
} from 'lucide-react';
import { PROJECTS, CATEGORIES, Project } from './data';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'parenting' | 'business'>('all');

  // Filter projects based on activeTab
  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-neutral-800 antialiased selection:bg-rose-100 selection:text-rose-900">
      
      {/* Subtle organic gradient headers */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-rose-50/40 via-indigo-50/20 to-transparent pointer-events-none" />

      {/* Main Wrapper */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        
        {/* Header Introduction Block */}
        <header className="mb-12 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-neutral-100 pb-8">
            <div>
              <h1 className="font-sans text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
                Personal Projects
              </h1>
            </div>

            {/* Quick action profile box */}
            <div className="shrink-0 self-center sm:self-start bg-white p-5 rounded-2xl border border-neutral-100 shadow-xs max-w-xs text-left">
              <span className="font-sans text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                Direct Contact
              </span>
              <p className="font-sans text-xs font-semibold text-neutral-800 mb-3 block truncate">
                tramanh.pham161@gmail.com
              </p>
              <a
                id="header-contact-btn"
                href="mailto:tramanh.pham161@gmail.com"
                className="inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-neutral-900 hover:bg-neutral-800 px-3.5 py-2 text-center font-sans text-xs font-medium text-white transition-all shadow-sm duration-200"
              >
                <Mail className="h-3.5 w-3.5" />
                Get in Touch
              </a>
            </div>
          </div>
        </header>

        {/* Categories Tab Select Panel */}
        <div className="mb-10 flex flex-col items-center sm:flex-row sm:justify-between gap-4 border-b border-neutral-100 pb-6">
          <div className="flex rounded-full bg-neutral-100/80 p-1 border border-neutral-200/40 shrink-0">
            <button
              id="tab-all"
              onClick={() => setActiveTab('all')}
              className={`relative rounded-full px-4.5 py-1.5 text-xs font-semibold tracking-tight transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-white text-neutral-900 shadow-xs border border-neutral-200/20'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            
            <button
              id="tab-parenting"
              onClick={() => setActiveTab('parenting')}
              className={`relative rounded-full px-4.5 py-1.5 text-xs font-semibold tracking-tight transition-all duration-300 ${
                activeTab === 'parenting'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Parenting ({PROJECTS.filter(p => p.category === 'parenting').length})
            </button>

            <button
              id="tab-business"
              onClick={() => setActiveTab('business')}
              className={`relative rounded-full px-4.5 py-1.5 text-xs font-semibold tracking-tight transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Business Ops ({PROJECTS.filter(p => p.category === 'business').length})
            </button>
          </div>
        </div>

        {/* Dynamic Project Board rendering with Motion container */}
        <div className="relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={`project-card-${project.id}`}
                  project={project}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Quick Fallback empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 bg-white rounded-2xl border border-neutral-100">
              <p className="text-neutral-400">No projects found. Check back later!</p>
            </div>
          )}
        </div>

        {/* Footer info brand */}
        <footer className="mt-20 border-t border-neutral-200/50 pt-8 flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-xs text-neutral-400 font-sans">
          <p>© 2026 Personal Showcase Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:tramanh.pham161@gmail.com" className="hover:text-neutral-650 transition">
              tramanh.pham161@gmail.com
            </a>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              Verified Links
            </span>
          </div>
        </footer>

      </div>
    </div>
  );
}
