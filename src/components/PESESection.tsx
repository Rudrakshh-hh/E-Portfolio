import React from 'react';
import { Lightbulb, Users, Target, MessageSquare, Briefcase, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface PESELearning {
  title: string;
  description: string;
  keyPoints: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const PESESection = () => {
  // TODO: Replace with your actual PESE learnings from your lectures
  const learnings: PESELearning[] = [
    {
      title: 'Professional Communication',
      description: 'Effective communication strategies for workplace success',
      keyPoints: [
        'Clear and concise email writing',
        'Active listening in team meetings',
        'Professional presentation skills',
      ],
      icon: MessageSquare,
    },
    {
      title: 'Teamwork & Collaboration',
      description: 'Building strong collaborative relationships in tech teams',
      keyPoints: [
        'Understanding team dynamics',
        'Conflict resolution strategies',
        'Contributing effectively in group projects',
      ],
      icon: Users,
    },
    {
      title: 'Continuous Learning',
      description: 'Strategies for staying updated in tech industry',
      keyPoints: [
        'Building a learning habit',
        'Utilizing online resources effectively',
      ],
      icon: BookOpen,
    },
    {
      title: 'Critical Thinking',
      description: 'Developing analytical and decision-making skills',
      keyPoints: [
        'Evaluating information objectively',
        'Making data-driven decisions',
        'Questioning assumptions',
      ],
      icon: Lightbulb,
    },
  ];

  return (
    <section id="pese" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 dark:text-white mb-4">
            PESE - Key Learnings
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Practical for Employability Skill Enhancement - Essential soft skills and professional competencies developed through coursework.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnings.map((learning, index) => {
              const Icon = learning.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-gray-900 dark:text-white mb-2">
                      {learning.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {learning.description}
                    </p>
                    <ul className="space-y-2">
                      {learning.keyPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PESESection;
