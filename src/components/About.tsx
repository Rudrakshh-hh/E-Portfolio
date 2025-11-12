import React from 'react';
import { Code2, Lightbulb, Target, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges with clean, efficient code',
    },
    {
      icon: Lightbulb,
      title: 'Quick Learner',
      description: 'Constantly exploring new technologies and best practices',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on building scalable solutions that make an impact',
    },
    {
      icon: Heart,
      title: 'Team Player',
      description: 'Believe in collaboration and knowledge sharing',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Bio */}
          <div className="text-center space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              I'm a B.Tech student specializing in Computer Science with a passion for creating innovative digital solutions. 
              Hi, I’m Rudraksh Bhatt — a curious mind driven by technology, creativity, and problem-solving. I love turning ideas into working projects, whether it’s building IoT prototypes with Arduino, developing full-stack web applications, or exploring how design thinking can make tech more human-centered.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
             Recently, I’ve developed a strong interest in web development, where I’ve built several projects that combine functionality and design — including a college marketplace website for buying, selling, and renting used items, a Sikkim Monasteries information site, and a text and code editor created from scratch. Each project has helped me sharpen my technical skills while focusing on creating practical, user-friendly experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me participating in hackathons, reading tech blogs, playing outdoor sports like football or badminton or working on personal 
              projects that push my boundaries. I'm actively seeking opportunities to apply my skills in real-world scenarios 
              and contribute to meaningful projects.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 dark:text-white mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Interests */}
          <div className="text-center space-y-4">
            <h3 className="text-gray-900 dark:text-white">
              Interests & Goals
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Full-Stack Development',
                'Machine Learning',
                'Cloud Computing',
                'Open Source',
                'UI/UX Design',
                'DevOps',
                'Mobile Development',
                'Competitive Programming',
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
