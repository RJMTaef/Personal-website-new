'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
                            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                  {portfolioData.person.about_long}
                </p>
            
            <div className="space-y-4">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  What I&apos;m passionate about:
                </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                {/* Placeholder for headshot */}
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  RT
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {portfolioData.person.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                      <span>🎓</span>
                      <span>Dalhousie University</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                      <span>📍</span>
                      <span>{portfolioData.person.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                      <span>📧</span>
                      <span>{portfolioData.person.email}</span>
                    </div>
                  </div>

                  {/* Awards */}
                  {portfolioData.awards.length > 0 && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Recent Achievement
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {portfolioData.awards[0]}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
