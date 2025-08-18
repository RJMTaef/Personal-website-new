'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  { name: 'Languages', skills: portfolioData.skills.languages, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200' },
  { name: 'Data & Analytics', skills: portfolioData.skills.data, color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' },
  { name: 'DevOps & Cloud', skills: portfolioData.skills.devops, color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200' },
  { name: 'Backend', skills: portfolioData.skills.backend, color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200' },
  { name: 'Frontend', skills: portfolioData.skills.frontend, color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200' },
  { name: 'Mobile', skills: portfolioData.skills.mobile, color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200' },
  { name: 'Extras', skills: portfolioData.skills.extras, color: 'bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-200' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            A comprehensive toolkit for building data products, automation, and scalable solutions
          </p>
        </motion.div>

        <div className="grid gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-pointer"
                  >
                    <Badge 
                      variant="secondary" 
                      className={`${category.color} border-0 text-sm font-medium px-4 py-2 rounded-full hover:shadow-md transition-all duration-200`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
            <p className="text-gray-700 dark:text-gray-200 text-lg">
              <span className="font-semibold">Always learning:</span> I&apos;m constantly expanding my skill set 
              and exploring new technologies to stay current with industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
