# Agency.ai - Modern Digital Agency Website

A stunning, modern digital agency website built with React, Vite, and Tailwind CSS. Features a premium design aesthetic with smooth animations, responsive layouts, and an exceptional user experience.

## ✨ Features

- **Modern Design**: Clean, premium SaaS/agency aesthetic with soft gradients and rounded elements
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Intersection Observer-based scroll animations and hover effects
- **Component-Based**: Well-organized React components for easy maintenance
- **Custom Typography**: Distinctive font choices (Outfit & DM Sans) for visual appeal
- **Interactive Elements**: Sticky navigation, mobile menu, smooth scrolling
- **Contact Form**: Functional contact form with validation
- **SEO Friendly**: Semantic HTML and proper meta tags

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd agency-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The site will be running at `http://localhost:5173`
   - Hot reload is enabled - changes appear instantly

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
agency-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navigation with mobile menu
│   │   ├── Hero.jsx         # Hero section with animated headline
│   │   ├── TrustedBy.jsx    # Brand logos section
│   │   ├── Services.jsx     # Services grid with cards
│   │   ├── Work.jsx         # Portfolio showcase
│   │   ├── Team.jsx         # Team member cards
│   │   ├── Contact.jsx      # Contact form section
│   │   └── Footer.jsx       # Footer with links and newsletter
│   ├── App.jsx              # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles and animations
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies
```

## 🎨 Design Features

### Color Palette
- **Primary Blue**: `#1a2b63` - Deep, professional blue
- **Accent Indigo**: `#4158D0` - Vibrant gradient color
- **Light Background**: `#f8f9fc` - Soft, clean background
- **Accent Blue**: `#0066ff` - Bright accent color

### Typography
- **Display Font**: Outfit - Modern, geometric sans-serif for headings
- **Body Font**: DM Sans - Clean, readable sans-serif for body text

### Key Sections
1. **Navbar** - Sticky header with smooth scroll navigation
2. **Hero** - Eye-catching headline with gradient text
3. **Trusted By** - Client logos with hover effects
4. **Services** - Four service cards with icons and descriptions
5. **Our Work** - Portfolio grid with project showcases
6. **Team** - Team member profiles with social links
7. **Contact** - Form with additional contact information
8. **Footer** - Links, newsletter signup, and social media

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'agency-blue': '#1a2b63',
  'agency-indigo': '#4158D0',
  // Add your custom colors
}
```

### Modifying Content
Each component file contains its own content. Simply edit the relevant component in `src/components/` to update text, images, or structure.

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link if needed in `Navbar.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and adapt to different screen sizes.

## 🎯 Performance

- Optimized animations using CSS and Intersection Observer
- Lazy loading for scroll animations
- Minimal JavaScript bundle size
- Production build with code splitting

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own projects!

## 💡 Tips

- Use the custom gradient classes for consistent styling
- The `reveal` class enables scroll animations
- All sections have IDs for smooth scrolling navigation
- Mobile menu automatically closes when navigating
- Form submissions log to console (connect to your backend)

## 🌟 Credits

Built with:
- React 18
- Vite 5
- Tailwind CSS 3
- Google Fonts (Outfit & DM Sans)

---

Made with ❤️ for digital agencies and creative studios
