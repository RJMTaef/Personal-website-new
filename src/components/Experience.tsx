'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

export function Experience() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const formatDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = end === 'Present' ? new Date() : new Date(end);
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                  (endDate.getMonth() - startDate.getMonth());
    if (months < 12) return `${months} month${months !== 1 ? 's' : ''}`;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Building className="mr-3 h-8 w-8 text-blue-600" />
              Work Experience
            </motion.h3>

            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900" />
                  
                  <Card className="ml-12 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 text-sm">
                            <div className="flex items-center">
                              <Building className="mr-1 h-4 w-4" />
                              {exp.company}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-2 sm:mt-0 text-right">
                          <div className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400 mb-1">
                            <Calendar className="mr-1 h-4 w-4" />
                            {formatDate(exp.start)} - {exp.end === 'Present' ? 'Present' : formatDate(exp.end)}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {formatDuration(exp.start, exp.end)}
                          </Badge>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <motion.li
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: (index * 0.1) + (highlightIndex * 0.05) }}
                            className="flex items-start space-x-2 text-gray-700 dark:text-gray-200"
                          >
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <GraduationCap className="mr-3 h-8 w-8 text-blue-600" />
              Education
            </motion.h3>

            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={`${edu.school}-${edu.program}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-900" />
                  
                  <Card className="ml-12 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.program}
                          </h4>
                          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 text-sm">
                            <div className="flex items-center">
                              <GraduationCap className="mr-1 h-4 w-4" />
                              {edu.school}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-2 sm:mt-0 text-right">
                          <div className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400 mb-1">
                            <Calendar className="mr-1 h-4 w-4" />
                            {formatDate(edu.start)} - {formatDate(edu.end)}
                          </div>
                          <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                            {formatDuration(edu.start, edu.end)}
                          </Badge>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.li
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: (index * 0.1) + (highlightIndex * 0.05) }}
                            className="flex items-start space-x-2 text-gray-700 dark:text-gray-200"
                          >
                            <span className="text-green-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
