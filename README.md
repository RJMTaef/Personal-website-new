# Roslan Taef - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, React, Tailwind CSS, and Framer Motion. Features a clean, minimalist aesthetic with subtle 3D accents and tasteful micro-interactions.

## ✨ Features

- **Modern Design**: Glassmorphism, soft shadows, rounded corners, and smooth gradients
- **Dark/Light Mode**: Auto-detect system theme with persistent preference
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll animations, hover effects, and micro-interactions
- **Accessibility**: WCAG AA compliant with semantic HTML and keyboard navigation
- **SEO Optimized**: Open Graph, Twitter meta, JSON-LD schema, sitemap, and robots.txt
- **Performance**: Optimized for Core Web Vitals with lazy loading and efficient animations

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills section
│   │   ├── Experience.tsx      # Experience timeline
│   │   ├── Projects.tsx        # Projects with filtering
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer
│   │   └── ThemeToggle.tsx     # Theme switcher
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Theme management
│   └── data/
│       └── portfolio.ts        # Portfolio data
├── public/
│   ├── robots.txt              # SEO robots file
│   ├── sitemap.xml             # SEO sitemap
│   └── site.webmanifest        # PWA manifest
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Customization

### Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal details (name, email, location)
- Skills and technologies
- Work experience and education
- Projects and achievements
- Social media links
- SEO metadata

### Styling

- **Colors**: Modify Tailwind CSS variables in `src/app/globals.css`
- **Layout**: Adjust spacing and grid layouts in component files
- **Animations**: Customize Framer Motion animations in components

### Content

- **Sections**: Add/remove sections by modifying `src/app/page.tsx`
- **Components**: Create new components in `src/components/`
- **Data**: Extend the portfolio data structure in `src/data/portfolio.ts`

## 📱 Sections

1. **Hero**: Large name display, role tags, animated background, CTA buttons
2. **About**: Personal story, interests, and profile information
3. **Skills**: Categorized skills with interactive chips
4. **Experience**: Timeline of work experience and education
5. **Projects**: Filterable project showcase with tags
6. **Contact**: Contact form, social links, and resume download

## 🎨 Design Features

- **Glassmorphism**: Translucent cards with backdrop blur
- **Gradients**: Subtle color transitions and backgrounds
- **Shadows**: Soft, layered shadows for depth
- **Animations**: Smooth transitions and hover effects
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent spacing system using Tailwind's scale

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly
- Focus management

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Static Export

1. Add `"output": "export"` to `next.config.js`
2. Run `npm run build`
3. Deploy the `out` folder to any static hosting

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimal JavaScript bundle
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

## 🔒 Security

- **Form Protection**: Honeypot field for spam prevention
- **Input Validation**: Client and server-side validation
- **HTTPS Ready**: Secure headers and configurations
- **XSS Protection**: Sanitized user inputs

## 📈 Analytics Ready

The site is prepared for analytics integration:
- Google Analytics 4
- Google Tag Manager
- Plausible Analytics
- Custom event tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact: roslan.taef@example.com
- LinkedIn: [Roslan Taef](https://www.linkedin.com/in/roslan-taef)

---

Built with ❤️ by Roslan Taef
