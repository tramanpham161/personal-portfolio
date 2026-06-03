import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project, CATEGORIES } from '../data';

interface ProjectCardProps {
  project: Project;
  id: string;
  key?: string;
}

export default function ProjectCard({ project, id }: ProjectCardProps) {
  const catTheme = CATEGORIES[project.category];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm/40 transition-shadow duration-300 hover:shadow-md hover:border-neutral-200"
    >
      {/* Website Image Mockup representation */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-50 border-b border-neutral-100">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
        </a>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title and Direct link */}
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="font-sans text-lg font-semibold tracking-tight text-neutral-900 hover:text-neutral-700">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          <a
            id={`link-icon-${id}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors border border-transparent hover:border-neutral-100/80 hover:bg-neutral-50 duration-200 ${catTheme.textAccent}`}
            title={`Visit ${project.title}`}
          >
            <ArrowUpRight className="h-4.5 w-4.5" />
          </a>
        </div>

        {/* Brief Pitch */}
        <p className="font-sans text-sm leading-relaxed text-neutral-500">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
