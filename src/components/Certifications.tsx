import React, { useState } from 'react';
import { Award, Trophy, Star, CheckCircle2, ZoomIn } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  type: string;
  imageUrl: string;
}

// interface Achievement {
//   title: string;
//   description: string;
//   date: string;
//   icon: React.ComponentType<{ className?: string }>;
//   type: string;
// }

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // TODO: Replace these with your actual certificate images
  // Option 1: Use URLs from your certificates (like from Coursera, AWS, etc.)
  // Option 2: Save certificate images in /public/certificates/ folder and reference them
  const certificateImages: Certificate[] = [
    {
      title: "Let's Talk Hackathon",
      issuer: 'Co-Dev GEHU',
      date: 'March 2025',
      credentialId: 'AWS-CCP-2024-123456',
      type: 'Professional Certification',
      // Replace with your certificate image URL or path
      imageUrl: '/images/letstalkhackathon.jpg',
    },
    {
      title: 'Prompt Crafting Workshop',
      issuer: 'Utopia Tech Fest',
      date: 'November 2024',
      credentialId: 'META-FE-2024-789012',
      type: 'Professional Certificate',
      // Replace with your certificate image URL or path
      imageUrl: '/images/promptCrafting.jpg',
    },
    {
      title: 'AlgoRush',
      issuer: 'Utopia Tech Fest',
      date: 'November 2024',
      credentialId: 'GOOGLE-DA-2023-345678',
      type: 'Professional Certificate',
      // Replace with your certificate image URL or path
      imageUrl: '/images/algoRush.jpg',
    },
    
  ];

  // const achievements: Achievement[] = [
  //   {
  //     title: 'Smart India Hackathon 2023',
  //     description: 'Winner - Built an AI-powered solution for traffic management',
  //     date: 'August 2023',
  //     icon: Trophy,
  //     type: 'Competition',
  //   },
  //   {
  //     title: 'CodeChef Long Challenge',
  //     description: 'Ranked in top 100 globally for 3 consecutive months',
  //     date: '2023',
  //     icon: Star,
  //     type: 'Achievement',
  //   },
  //   {
  //     title: 'College Coding Competition',
  //     description: 'First Place - Annual inter-college programming contest',
  //     date: 'April 2023',
  //     icon: Trophy,
  //     type: 'Competition',
  //   },
  //   {
  //     title: 'Open Source Contribution',
  //     description: 'Contributed to 5+ major open-source projects on GitHub',
  //     date: '2023-2024',
  //     icon: CheckCircle2,
  //     type: 'Achievement',
  //   },
  //   {
  //     title: 'Best Capstone Project',
  //     description: 'Awarded for outstanding final year project presentation',
  //     date: 'December 2023',
  //     icon: Trophy,
  //     type: 'Academic',
  //   },
  //   {
  //     title: 'HackerRank Problem Solving (Gold)',
  //     description: 'Gold badge for advanced problem-solving skills',
  //     date: 'February 2024',
  //     icon: Star,
  //     type: 'Achievement',
  //   },
  // ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications that demonstrate continuous learning and excellence.
          </p>
        </div>

        {/* Certificate Images Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificateImages.map((cert, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              >
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <ImageWithFallback
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <ZoomIn className="h-12 w-12 text-white mx-auto mb-2" />
                      <p className="text-white">Click to view full certificate</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-gray-900 dark:text-white mb-1 line-clamp-2">
                        {cert.title}
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <Badge variant="outline">{cert.type}</Badge>
                      <span className="text-gray-600 dark:text-gray-400">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Timeline
        <div className="max-w-6xl mx-auto">
          <h3 className="text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Achievements & Recognitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
                        {achievement.type}
                      </Badge>
                    </div>
                    <h4 className="text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {achievement.description}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      {achievement.date}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div> */}
      </div>

      {/* Full Certificate View Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedCertificate && (
            <>
              <DialogHeader className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <DialogTitle className="text-gray-900 dark:text-white">
                  {selectedCertificate.title}
                </DialogTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </p>
              </DialogHeader>
              <div className="p-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={selectedCertificate.imageUrl}
                    alt={selectedCertificate.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
