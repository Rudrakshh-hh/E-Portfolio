import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects = () => {
  const projects = [
    {
      title: 'Sikkim Monasteries',
      description:
        'A full-stack website that showcases and digitises the famous and non-famous monasteries of Sikkim',
      image: '/images/sikkimSIH.jpg',
      techStack: ['HTML', 'CSS', 'Javascript'],
      role: 'Full-Stack Developer',
      github: 'https://github.com/Rudrakshh-hh/sikkim-monasteries',
      demo: 'https://rudrakshh-hh.github.io/sikkim-monasteries/',
    },
    {
      title: 'Text and Code Editor',
      description:
        'I along with my friend made a website with PWA which is a Code and Text Editor named Texterio. It solves the hassle of joining different functionalites of Code and Text Editors into one single web application.',
      image: '/images/texterio.png',
      techStack: ['React', 'DynamoDB','EC2'],
      role: 'Error and Bugs Debugger',
      github: 'https://github.com/sarthakbadoni/Texterio_DS-Project.git',
      demo: 'https://orchid-sparrow-154255.hostingersite.com/',
    },
    // {
    //   title: 'Task Management App',
    //   description:
    //     'A collaborative task management application with drag-and-drop functionality, team collaboration features, deadline tracking, and notification system for improved productivity.',
    //   image: 'https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYwNjg2MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    //   techStack: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    //   role: 'Full-Stack Developer',
    //   github: 'https://github.com/Rudrakshh-hh',
    //   demo: 'https://example.com',
    // },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating practical application of various technologies and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <h3 className="text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <Badge variant="outline" className="w-fit">
                  {project.role}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button
                  className="flex-1 gap-2"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
