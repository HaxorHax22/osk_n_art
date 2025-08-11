# Ósk n Art - Artist Portfolio Website

A premium, minimalist website for Ósk, an Icelandic abstract artist specializing in custom color and size commissions.

## 🎨 Features

- **Premium Design**: Clean, minimalist aesthetic that lets artwork shine
- **Mobile-First**: Fully responsive design optimized for all devices
- **Performance Optimized**: Fast loading with lazy loading and optimized images
- **SEO Ready**: Structured data, meta tags, and sitemap included
- **Accessibility**: WCAG AA compliant with proper contrast and keyboard navigation
- **Interactive Gallery**: Filterable masonry grid with lightbox modal
- **Commission Focus**: Dedicated pages for custom artwork inquiries

## 🏗 Structure

```
osk_n_art/
├── index.html          # Homepage with hero carousel and featured works
├── gallery.html        # Gallery with filterable artwork grid
├── commissions.html    # Commission process and pricing
├── about.html          # Artist story and philosophy
├── contact.html        # Contact information (no form)
├── styles.css          # Main stylesheet with responsive design
├── gallery.css         # Gallery-specific styles
├── script.js           # JavaScript functionality
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine directives
└── README.md           # This file
```

## 🎯 Pages Overview

### Homepage (`index.html`)
- Hero carousel showcasing artworks in modern interiors
- Artist introduction with Icelandic nature inspiration
- Featured works grid with 6 pieces from different palettes
- Process teaser (Inspiration → Creation → Placement)
- Instagram strip with latest studio updates

### Gallery (`gallery.html`)
- Masonry grid layout with artwork filtering
- Filter options: Palette, Orientation, Size
- Lightbox modal for detailed artwork viewing
- Commission CTAs on each piece

### Commissions (`commissions.html`)
- Comprehensive commission process explanation
- Investment guide with pricing tiers
- Requirements and consultation details
- FAQ section addressing common questions

### About (`about.html`)
- Artist biography and Icelandic influences
- Artistic philosophy and process
- Exhibition highlights and recognition
- Materials and care instructions

### Contact (`contact.html`)
- Contact methods (email, phone, Instagram, location)
- Response time expectations
- Quick links to key pages
- No contact form (as requested)

## 🎨 Design System

### Colors
- **Primary**: `#FFFFFF` (White)
- **Secondary**: `#F7F7F7` (Light Gray)
- **Text**: `#111111` (Near Black)
- **Accent**: `#C6A46A` (Gold)
- **Text Secondary**: `#666666` (Medium Gray)

### Typography
- **Headlines**: Playfair Display (serif)
- **Body & UI**: Inter (sans-serif)
- **Generous whitespace and line-height for readability**

### Layout
- **Mobile-first responsive design**
- **Grid-based layouts with CSS Grid and Flexbox**
- **Consistent spacing using rem units**
- **Edge-to-edge imagery with subtle shadows**

## 🚀 Performance Features

- **Lazy loading** for non-critical images
- **Optimized image formats** (WebP/AVIF ready)
- **Responsive images** with srcset
- **CSS budget** under 100KB
- **Minimal JavaScript** for fast loading
- **Preloading** for critical resources

## ♿ Accessibility Features

- **Semantic HTML** structure
- **WCAG AA contrast** ratios
- **Keyboard navigation** support
- **Screen reader** friendly alt text
- **Focus indicators** for interactive elements
- **Reduced motion** support

## 📱 Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** (iOS Safari, Chrome Mobile)
- **Graceful degradation** for older browsers

## 🔧 Customization

### Updating Content

1. **Replace placeholder images** with actual artwork photos
2. **Update contact information** in all files:
   - Email: `osk@example.com`
   - Phone: `+354 581 234 567`
   - Instagram: `@osk.n.art`

3. **Add real artwork data** in gallery.html:
   - Replace Unsplash URLs with actual artwork images
   - Update titles, descriptions, and metadata
   - Adjust filter categories as needed

4. **Customize pricing** in commissions.html based on actual rates

### Adding Analytics

1. **Google Analytics**: Add tracking code to script.js
2. **Update cookie consent** implementation if needed
3. **Configure conversion tracking** for commission inquiries

### SEO Optimization

1. **Update sitemap.xml** with actual domain
2. **Add Google Search Console** verification
3. **Optimize images** with descriptive filenames
4. **Add local business schema** if applicable

## 📧 Contact Integration

The website is designed for direct contact rather than forms:

- **Email links** open default mail client
- **Phone links** trigger click-to-call on mobile
- **Instagram links** direct to profile
- **No contact forms** to avoid spam and keep it simple

## 🎯 Marketing Features

- **Instagram integration** throughout the site
- **Commission CTAs** on every page
- **Social sharing** optimized with Open Graph tags
- **Professional presentation** that builds trust

## 📝 Content Strategy

All copy is written to be:
- **Warm and approachable** while maintaining professionalism
- **Focused on the customer's needs** and space
- **Inspired by Icelandic nature** without being cliché
- **Clear about the commission process** and expectations

## 🚀 Deployment

This is a static website that can be hosted on:
- **Netlify** (recommended for ease of use)
- **Vercel** 
- **GitHub Pages**
- **Traditional web hosting**

Simply upload all files to your web server root directory.

---

**Your space, your colors, your story — in abstract.**
