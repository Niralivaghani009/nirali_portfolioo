"use client"

import { ExternalLink, ArrowUpRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Odyssey",
    subtitle: "Performance Review System",
    description:
      "Comprehensive performance review platform with interactive dashboards and data visualization. Implemented multi-step forms, role-based UI components with dynamic rendering, and real-time notification system.",
    technologies: ["Next.js", "React.js", "TypeScript", "Redux", "Chart.js", "Socket.io"],
    highlights: ["Reduced initial load time by 45%", "Real-time updates", "Form validation", "Analytics dashboards"],
    image: "/performance-review-dashboard-with-charts-and-analy.jpg",
  },
  {
    title: "BitCorpen",
    subtitle: "Professional Networking Platform",
    description:
      "LinkedIn-style professional networking platform with job listings, company profiles, employee reviews, and real-time messaging. Built with advanced filters and role-based access control.",
    technologies: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "TailwindCSS", "Socket.io"],
    highlights: ["Real-time messaging", "Job listings", "Company profiles", "Advanced filters"],
    image: "/professional-networking-platform-with-job-listings.jpg",
    url: "https://bitcorpen.zooq.app",
  },
  {
    title: "Gulf Laser Tag",
    subtitle: "Corporate Website",
    description:
      "Multilingual corporate website supporting Arabic (RTL) and English with seamless language switching. Implemented responsive design with contact forms and service showcases.",
    technologies: ["React.js", "Next.js", "TailwindCSS", "i18next"],
    highlights: ["RTL support", "Multilingual", "Responsive design", "Contact forms"],
    image: "/modern-corporate-website-for-laser-tag-entertainme.jpg",
    url: "https://nadayahya.zooq.app",
  },
  {
    title: "Dall-AI Art Generator",
    subtitle: "AI Image Generation",
    description:
      "AI image generation application with custom artwork creation. Features prompt input, style selection, and download functionality with comprehensive error handling.",
    technologies: ["Node.js", "Redis", "RabbitMQ", "Docker", "Slack API"],
    highlights: ["AI generation", "Style selection", "Queue system", "Error handling"],
    image: "/ai-art-generation-interface-with-colorful-artwork.jpg",
    url: "https://genxi.io/dall/ai-art-generator",
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-primary w-16" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.title === "Odyssey" ? (
                    <p className="text-sm text-foreground px-6 text-center">
                      it's personalize dashboard for copany so link is not available
                    </p>
                  ) : project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      {project.title !== "Odyssey" && project.url ? (
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      ) : null}
                    </h3>
                    <p className="text-primary text-sm">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="text-xs text-muted-foreground">
                      • {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
