# E-Portfolio Website - Rudraksh Bhatt

A modern, responsive, and accessible portfolio website for a B.Tech Computer Science student and aspiring software engineer. Built with React, Tailwind CSS, and featuring dark mode support.

## 🌟 Features

- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Dark Mode**: Toggle between light and dark themes with persistent preferences
- **Smooth Navigation**: Seamless scrolling between sections with fixed navigation bar
- **Lazy Loading**: Optimized image loading for better performance
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Accessible**: WCAG compliant with keyboard navigation support
- **Modern UI**: Clean and professional design using Tailwind CSS and Shadcn UI components

## 📋 Sections

1. **Home/Hero**: Introduction with profile photo, tagline, and CTAs
2. **About**: Personal bio, goals, interests, and highlights
3. **Skills**: Categorized technical and soft skills with progress indicators
4. **Projects**: Showcase of 5 featured projects with images and tech stacks
5. **Education**: Academic background and relevant coursework
6. **Certifications**: Professional certifications and achievements
7. **Contact**: Footer with social links and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Built With

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Accessible component library
- **Lucide React** - Icon library
- **Vite** - Build tool and development server

## 📦 Project Structure

```
portfolio/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── figma/           # Image components
│   ├── About.tsx        # About section
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ThemeProvider.tsx
├── styles/
│   └── globals.css      # Global styles and theme
├── App.tsx              # Main application component
└── README.md
```

## 🎨 Customization

### Updating Personal Information

1. **Name and Bio**: Edit `Hero.tsx` and `Footer.tsx`
2. **Projects**: Modify the `projects` array in `Projects.tsx`
3. **Skills**: Update skill categories in `Skills.tsx`
4. **Education**: Edit details in `Education.tsx`
5. **Certifications**: Add/remove items in `Certifications.tsx`

### Changing Colors

Modify the color variables in `styles/globals.css` under the `:root` and `.dark` selectors.

### Adding Profile Photo

Replace the Unsplash image URL in `Hero.tsx` with your own photo URL or import a local image.

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

Run tests in watch mode:
```bash
npm test -- --watch
```

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production deployment:
```bash
vercel --prod
```

### Using Vercel Dashboard

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Other Platforms

- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **GitHub Pages**: Use `gh-pages` package to deploy
- **Firebase Hosting**: Use Firebase CLI to deploy

## 📄 Resume

To add your resume PDF:

1. Create a `public` folder in the root directory
2. Add your resume PDF as `public/resume.pdf`
3. Update the download link in `Navigation.tsx` and `Hero.tsx`:

```javascript
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'Rahul_Sharma_Resume.pdf';
  link.click();
};
```

## 🔧 Configuration Files

### vercel.json (Optional)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  }
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rahul Sharma**
- GitHub: [@rahulsharma](https://github.com/rahulsharma)
- LinkedIn: [rahulsharma](https://linkedin.com/in/rahulsharma)
- Email: rahul.sharma@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Shadcn UI](https://ui.shadcn.com/)
- Stock photos by [Unsplash](https://unsplash.com/)

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form with email integration
- [ ] Add animations using Motion
- [ ] Include testimonials section
- [ ] Add project filtering by technology
- [ ] Implement i18n for multi-language support
- [ ] Add analytics tracking

---

Made with ❤️ by Rahul Sharma
