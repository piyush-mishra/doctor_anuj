# Project Context

Project: Dr Anuj Urologist
 
Stack:

- Next.js 15
- TypeScript
- Tailwind CSS
- App Router
   
  Rules:
- Mobile First
- Responsive
- SEO Friendly
- No Bootstrap
- No jQuery
- Use Tailwind Only
- Use Next Image Component
- Use Semantic HTML
- Accessibility Support
   
  Design Style:
- Premium Healthcare
- Modern
- Clean White Background
- Blue Accent Color
   
  Sections:
- Hero
- About Doctor
- Expertise
- Services
- Testimonials
- FAQ
- Appointment CTA
- Footer

Theme:

- Light Mode
- Dark Mode
- System Mode

# SEO Requirements

 
Every major treatment and condition must have its own route.
 
Examples:
 

- /kidney-stone-treatment
- /enlarged-prostate-treatment
- /laser-urology
- /prostate-cancer-treatment
- /urinary-incontinence-treatment
   
  Each route must include:
   
- Unique title tag
- Unique meta description
- Canonical URL
- Internal links to related treatments
- FAQ section
- Call To Action section
- Breadcrumb navigation
- Structured Data (Schema.org)
   
  Homepage cards must link to their dedicated pages.
   
  All pages should be crawlable by search engines.
   
  Generate sitemap.xml automatically.
   
  Generate robots.txt automatically.

  # Image Management

Image Provider:

- Cloudinary

Rules:

- Use Cloudinary for all production images.
- Do not store large images in the Git repository.
- Use next-cloudinary for image rendering.
- Use optimized image formats.
- Use responsive image delivery.
- Use lazy loading where applicable.
- Use WebP or AVIF when supported.
- Doctor photos, treatment images and blog images should be served from Cloudinary.

Package:

npm install next-cloudinary

# Content Hub Strategy

 
Parent Path:
 
/about-us
 
Child Pages:
 
/about-us/about-dr-anuj
/about-us/patient-education
/about-us/watch-videos
/about-us/health-library
/about-us/faqs
/about-us/blogs
 
Rules:
 

- Educational content should reside under /about-us.
- All pages must interlink with each other.
- Homepage should link to About Us content hub.
- Treatment pages should link to related educational content.
- Educational pages should link back to treatment pages.

When generating new pages:

- Add internal links to related pages.
- Use SEO-friendly URLs.
- Link treatments to patient education pages.
- Link blogs to treatments.
- Link FAQs to related conditions.
- Add breadcrumb navigation.
