# Deployment Guide

This guide covers deploying your E-Portfolio website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Using Vercel Dashboard

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the framework
   - Click "Deploy"

### Option 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

## 📦 Other Deployment Options

### Netlify

1. **Using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

2. **Using Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/portfolio"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### AWS S3 + CloudFront

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create a new bucket
   - Enable static website hosting
   - Upload contents of `dist` folder

3. **Configure CloudFront** (Optional but recommended)
   - Create a CloudFront distribution
   - Point it to your S3 bucket
   - Configure custom domain and SSL

## 🔧 Build Configuration

### Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_SITE_URL=https://yoursite.com
VITE_GA_TRACKING_ID=UA-XXXXX-Y
```

Access in your code:
```javascript
const siteUrl = import.meta.env.VITE_SITE_URL;
```

### Custom Domain

#### Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

#### Netlify
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration steps

## 📊 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile devices
- [ ] Check dark mode functionality
- [ ] Ensure all images load properly
- [ ] Test navigation and smooth scrolling
- [ ] Verify social media links work
- [ ] Test resume download functionality
- [ ] Check SEO meta tags (View page source)
- [ ] Test performance with Lighthouse
- [ ] Set up analytics (Google Analytics, Vercel Analytics, etc.)

## 🔍 SEO Optimization

### Google Search Console

1. **Verify Ownership**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property
   - Verify using HTML tag or DNS

2. **Submit Sitemap**
   - Create a sitemap.xml
   - Submit via Search Console

### robots.txt

Create a `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

## 📈 Analytics Setup

### Google Analytics

1. **Add to your HTML**
   In `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Vercel Analytics

1. Install package:
   ```bash
   npm install @vercel/analytics
   ```

2. Add to App.tsx:
   ```javascript
   import { Analytics } from '@vercel/analytics/react';
   
   export default function App() {
     return (
       <>
         {/* Your app */}
         <Analytics />
       </>
     );
   }
   ```

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (should be 16+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Ensure images are in `public` folder or properly imported
- Check image paths are correct
- Verify image URLs are accessible

### Dark Mode Not Working
- Check localStorage is available
- Verify CSS variables are defined
- Test with browser DevTools

### 404 Errors on Page Refresh
- Ensure your hosting platform is configured for SPA routing
- Add appropriate rewrites/redirects

## 📞 Support

If you encounter issues:
- Check the [Vercel Documentation](https://vercel.com/docs)
- Visit [Stack Overflow](https://stackoverflow.com)
- Open an issue on GitHub

---

Happy Deploying! 🎉
