'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const allTags = Array.from(
  new Set(portfolioData.projects.flatMap(project => project.tags))
);

export function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return portfolioData.projects;
    return portfolioData.projects.filter(project =>
      project.tags.some(tag => selectedTags.includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            A showcase of my work in data engineering, DevOps, and full-stack development
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className={`rounded-full transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {tag}
              </Button>
            ))}
          </div>
          
          {selectedTags.length > 0 && (
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Clear filters ({filteredProjects.length} projects)
              </Button>
            </div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </CardTitle>
                      
                      {project.links?.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.summary}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Bullet points if available */}
                    {project.bullets && project.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {project.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-blue-600 mt-1 text-xs">•</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                        {project.bullets.length > 3 && (
                          <li className="text-xs text-gray-500 dark:text-gray-500 italic">
                            +{project.bullets.length - 3} more details...
                          </li>
                        )}
                      </ul>
                    )}
                    
                    {/* View Project Button */}
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                        onClick={() => project.links?.github && window.open(project.links.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects match the selected filters. Try adjusting your selection.
            </p>
          </motion.div>
        )}

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/RJMTaef', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
