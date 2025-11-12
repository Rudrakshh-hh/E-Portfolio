import React, { useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import PESESection from './components/PESESection';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // SEO: Set document title
    document.title = 'Rudraksh Bhatt - Software Engineer Portfolio';

    // SEO: Add meta tags
    const metaTags = [
      { name: 'description', content: 'B.Tech Computer Science student and aspiring software engineer specializing in full-stack web development, data structures and cloud computing.' },
      { name: 'keywords', content: 'software engineer, web developer, full-stack developer, B.Tech, computer science, React, Node.js, portfolio' },
      { name: 'author', content: 'Rudraksh Bhatt' },
      { property: 'og:title', content: 'Rudraksh Bhatt - Software Engineer Portfolio' },
      { property: 'og:description', content: 'B.Tech Computer Science student passionate about building innovative web applications and solving complex problems through code.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Rudraksh Bhatt - Software Engineer Portfolio' },
      { name: 'twitter:description', content: 'B.Tech Computer Science student and aspiring software engineer' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      let meta = document.querySelector(
        name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      );
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Add structured data for SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Rudraksh Bhatt',
      jobTitle: 'Software Engineer',
      description: 'B.Tech Computer Science student and aspiring software engineer',
      url: window.location.href,
      sameAs: [
        'https://github.com/rudraksh-hh',
        'https://linkedin.com/in/rudr',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Graphic Era Hill University, Dehradun',
      },
      knowsAbout: [
        'JavaScript',
        'React',
        'Python',
        'Java',
        'Web Development',
        'Cloud Computing',
      ],
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <PESESection />
          <Certifications />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}