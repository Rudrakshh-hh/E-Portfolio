import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Education = () => {
  const education = {
    degree: 'Bachelor of Technology (B.Tech)',
    major: 'Computer Science and Engineering',
    college: 'Graphic Era Hill University, Dehradun',
    duration: '2024 - 2028',
    gpa: '9.14 / 10.0',
    relevantCoursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Web Technologies',
      'Cloud Computing',
      'Artificial Intelligence',
      'Object-Oriented Programming',
    ],
    achievements: [
      'NULL',
    ],
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Education Card */}
          <Card className="border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </CardTitle>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {education.major}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {education.college}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{education.duration}</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                      GPA: {education.gpa}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              {/* Relevant Coursework */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-gray-900 dark:text-white">
                    Relevant Coursework
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {education.relevantCoursework.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Achievements */}
              <div>
                <h3 className="text-gray-900 dark:text-white mb-4">
                  Academic Achievements
                </h3>
                <div className="space-y-3">
                  {education.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

        

          {/* Additional Education (Optional) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                  Online Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-1">Advanced Web Development</p>
                  <p className="text-gray-600 dark:text-gray-400">Completed: September 2025</p>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-1">Cloud Computing - Swayam</p>
                  <p className="text-gray-600 dark:text-gray-400">Completed: October 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                  Workshops & Seminars
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-1">Let's Talk Hackathon - CO-DEV</p>
                  <p className="text-gray-600 dark:text-gray-400">March 2025</p>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-1">Utopia Tech Fest</p>
                  <p className="text-gray-600 dark:text-gray-400">November 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
