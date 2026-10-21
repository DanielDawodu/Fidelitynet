# FidelityNet Global Services - Deployment Guide

## Overview
This document provides complete deployment instructions for the FidelityNet Global Services corporate website to Vercel.

## Prerequisites
- Vercel account (free tier works)
- Git repository (GitHub, GitLab, or Bitbucket)
- Domain: `fidellitynetglobalservices.online` (already purchased)

## Environment Variables

Before deploying, configure the following environment variable in Vercel:

### Contact Form Endpoint
- **Variable Name**: `VITE_FORM_ENDPOINT`
- **Description**: Endpoint for contact form submissions (e.g., Formspree, Formsubmit)
- **Required**: Optional (but recommended for form functionality)
- **How to get**:
  1. Sign up at [Formspree](https://formspree.io/) (free tier available)
  2. Create a new form
  3. Copy the form endpoint URL
  4. Add it as a Vercel environment variable

**Note**: Without this variable configured, the contact form will display a message asking users to contact via phone or email.

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FidelityNet corporate website"
   git branch -M main
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Log in to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Configure project settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Add environment variables (see above)
   - Click "Deploy"

3. **Configure Custom Domain**
   - After deployment, go to project settings
   - Click "Domains"
   - Add domain: `fidellitynetglobalservices.online`
   - Follow Vercel's DNS configuration instructions
   - **Important**: Preserve existing email DNS records (MX, SPF, DKIM)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Configure Domain**
   ```bash
   vercel domains add fidellitynetglobalservices.online
   ```

## Post-Deployment Checklist

### 1. Verify Domain Configuration
- [ ] Domain resolves to Vercel
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] Email DNS records are preserved (MX, SPF, DKIM)

### 2. Test Website Functionality
- [ ] All four pages load: Home, Services, About, Contact
- [ ] Navigation links work correctly
- [ ] Mobile menu functions properly
- [ ] Contact form displays correctly
- [ ] Phone, WhatsApp, and email links work
- [ ] 404 page displays for invalid routes

### 3. Configure Contact Form (Optional)
- [ ] Set up Formspree or similar service
- [ ] Add `VITE_FORM_ENDPOINT` environment variable
- [ ] Test form submission
- [ ] Verify email delivery

### 4. SEO Setup
- [ ] Submit sitemap to Google Search Console:
  - URL: `https://fidellitynetglobalservices.online/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership in both platforms
- [ ] Request indexing of key pages

### 5. Google Business Profile (Optional)
- [ ] Create or update Google Business Profile
- [ ] Verify business details
- [ ] Add website URL
- [ ] Ensure consistency with NAP (Name, Address, Phone)

## Important Notes

### Email Configuration
The website domain (`fidellitynetglobalservices.online`) and email service (MailShrine) are separate. When configuring DNS:
- **DO NOT** change nameservers unless necessary
- **DO NOT** delete existing email DNS records
- **PRESERVE** MX, SPF, DKIM, and other email-related records
- Vercel will provide specific DNS records to add, not replace

### Contact Form
- The form is designed to work with Formspree or similar services
- Without configuration, it shows a helpful fallback message
- Email delivery is not configured by default to avoid exposing credentials

### SEO
- Robots.txt and sitemap.xml are pre-configured
- Canonical URLs are set to `https://fidellitynetglobalservices.online`
- Open Graph and Twitter Card metadata are included
- JSON-LD structured data is implemented

### Performance
- Production build is optimized with code splitting
- Images should be optimized before upload
- Lazy loading is implemented where appropriate
- CSS is minified in production

## Troubleshooting

### Build Fails
- Ensure Node.js version is 18+ (check with `node --version`)
- Delete `node_modules` and run `npm install`
- Check for TypeScript errors with `npm run build` locally

### Domain Not Resolving
- Check DNS propagation (can take 24-48 hours)
- Verify DNS records in Vercel dashboard
- Ensure domain registrar points to Vercel's nameservers

### Contact Form Not Working
- Verify `VITE_FORM_ENDPOINT` is set in Vercel environment variables
- Test form endpoint directly
- Check Formspree dashboard for submission logs

### 404 Errors on Refresh
- Vercel's `vercel.json` handles SPA routing
- Ensure `rewrites` configuration is present
- Deploy configuration should include the rewrites rule

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Test changes locally before deploying
- Monitor Vercel for any build failures

### Content Updates
- Edit content in `src/lib/constants.ts` for company info
- Edit pages in `src/pages/` for page-specific content
- Rebuild and redeploy after changes

### Monitoring
- Vercel provides analytics and error tracking
- Monitor website uptime
- Check Search Console for indexing issues

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- Formspree: https://formspree.io/docs

## Contact
For deployment issues, refer to Vercel's support or the project documentation.
