# 🌟 3D Interactive Portfolio

A modern, immersive portfolio website featuring a 3D interactive room environment built with React Three Fiber, GSAP animations, and styled-components. Navigate through different sections with smooth camera transitions, explore interactive skill showcases, and experience a unique blend of 3D graphics and traditional web design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![Three.js](https://img.shields.io/badge/Three.js-0.158.0-orange) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Live Demo

[**View Live Portfolio →**](https://kanishkainth.me)

## ✨ Features

### 🎮 3D Interactive Experience
- **Immersive 3D Room**: Fully interactive 3D environment with detailed room scene
- **Dynamic Camera Controls**: Smooth camera transitions between different portfolio sections
- **Interactive Elements**: Clickable objects and hover effects throughout the 3D scene
- **Video Textures**: Dynamic video content displayed on 3D surfaces (Mac screen, terminal)

### 🎨 Modern UI/UX
- **Glass Morphism Design**: Beautiful frosted glass effects and modern aesthetics
- **Smooth Animations**: GSAP-powered transitions and micro-interactions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Sound Effects**: Immersive audio feedback for user interactions

### 📱 Portfolio Sections
- **Hero Section**: Introduction with animated text and call-to-action
- **About Me**: Personal information with rotating logo and social links
- **Skills Showcase**: Interactive skill cards with hover animations and video previews
- **Projects Gallery**: Featured projects with technology stack visualization
- **Contact Footer**: Professional contact information

### 🛠️ Technical Features
- **Performance Optimized**: Efficient 3D rendering with React Three Fiber
- **Mobile Responsive**: Adaptive camera positions and UI for mobile devices
- **Loading System**: Beautiful loading screen with progress indication
- **Context Management**: Centralized state management for camera and UI state
- **TypeScript Ready**: Prepared for TypeScript migration

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Component-based UI library
- **Vite 7.1.2** - Fast build tool and development server

### 3D Graphics & Animation
- **Three.js 0.158.0** - 3D graphics library
- **@react-three/fiber 8.15.12** - React renderer for Three.js
- **@react-three/drei 9.88.13** - Useful helpers for React Three Fiber
- **@react-three/postprocessing 2.15.11** - Post-processing effects
- **GSAP 3.13.0** - Professional-grade animation library

### Styling & UI
- **Styled Components 6.1.19** - CSS-in-JS styling solution
- **TailwindCSS 4.1.12** - Utility-first CSS framework
- **React Icons 5.5.0** - Popular icon library

### Additional Libraries
- **Swiper 12.0.1** - Touch slider for project gallery
- **use-sound 5.0.0** - Sound effects management
- **react-responsive 10.0.1** - Responsive component utilities
- **Leva 0.10.0** - GUI controls for development

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── Fonts/              # Custom fonts
│   ├── models/             # 3D models (.glb files)
│   ├── Photos/             # Images and icons
│   │   ├── Icons/          # Technology stack icons
│   │   ├── Portfolio/      # Project screenshots
│   │   └── Utils/          # UI elements and backgrounds
│   ├── Sounds/             # Audio files
│   ├── Textures/           # 3D textures
│   └── videos/             # Video content for 3D scenes
├── src/
│   ├── components/
│   │   ├── Experiance/     # 3D scene components
│   │   │   ├── Camera.jsx
│   │   │   ├── Room.jsx
│   │   │   ├── Lighting.jsx
│   │   │   └── animations.js
│   │   ├── Loader/         # Loading screen
│   │   ├── Main/           # Main layout component
│   │   └── Sections/       # Portfolio sections
│   │       ├── AboutMe/
│   │       ├── Hero/
│   │       ├── Skills/
│   │       ├── Projects/
│   │       └── Footer/
│   ├── context/            # React Context for state management
│   ├── data/               # Static data and configurations
│   ├── utils/              # Utility functions
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kannishhh/3d_Portfolio.git
   cd 3d_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🎮 Usage & Navigation

### 3D Scene Controls
- **Mouse Movement**: Look around the 3D environment
- **Scroll**: Navigate between different portfolio sections
- **Click Skills**: Interactive skill cards that change the display content
- **Hover Effects**: Various elements respond to mouse interactions

### Section Navigation
1. **Hero** - Introduction and main call-to-action
2. **About Me** - Personal background and social links
3. **Skills** - Interactive technology showcase
4. **Projects** - Featured work and project gallery

### Mobile Experience
- Optimized camera positions for mobile devices
- Touch-friendly navigation
- Responsive UI components

## 🎨 Customization

### Adding New Skills
1. Navigate to `src/data/SkillsData.js`
2. Add your skill object:
   ```javascript
   {
     name: "Your Technology",
     animation: 1, // 1 for scale, 2 for rotate
     url: "YourIcon.png", // Place icon in public/Photos/Icons/
     is_special: true // Optional: adds play icon
   }
   ```

### Adding New Projects
1. Update `src/components/Sections/Projects/Project.jsx`
2. Add your project in the WorkCard components:
   ```jsx
   <WorkCard
     text="Your Project Name"
     Cover="ImageNumber" // Corresponds to Edit{number}.webp
     techs={["React js", "Node.js"]} // Array of technologies
     Repo="https://github.com/yourusername/repo"
   />
   ```

### Customizing 3D Scene
- Modify camera positions in `src/data/AnimationsData.js`
- Update 3D models in `src/components/Experiance/Room.jsx`
- Add new textures in the `public/Textures/` directory

### Styling Changes
- Global styles: `src/App.css`
- Component styles: Individual `Styled*.js` files
- CSS variables in `:root` for easy theme customization

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | Core framework |
| three | ^0.158.0 | 3D graphics |
| @react-three/fiber | ^8.15.12 | React Three.js integration |
| @react-three/drei | ^9.88.13 | Three.js helpers |
| gsap | ^3.13.0 | Animations |
| styled-components | ^6.1.19 | Styling |
| swiper | ^12.0.1 | Carousel functionality |

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Setup
- The project uses Vite for fast development and building
- ESLint is configured for code quality
- Hot Module Replacement (HMR) for instant updates

## 🌟 Features in Detail

### 3D Room Environment
- **Baked Lighting**: Pre-calculated lighting for optimal performance
- **Interactive Objects**: Mac screen, books, and decorative elements
- **Video Textures**: Dynamic content on screens
- **Particle Effects**: Sparkles and atmospheric elements

### Animation System
- **Camera Transitions**: Smooth movements between sections
- **GSAP Integration**: Professional animations and transitions
- **Mobile Optimization**: Different animation sets for mobile devices
- **Performance Optimized**: Efficient rendering and animation

### State Management
- **React Context**: Centralized state for camera and UI
- **Section Tracking**: Automatic section detection and navigation
- **Loading States**: Comprehensive loading system with progress

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- **Optimized 3D Models**: Compressed .glb files
- **Texture Optimization**: Compressed images and videos
- **Code Splitting**: Lazy loading for optimal performance
- **Mobile Optimization**: Reduced complexity for mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kanish Kainth**
- Portfolio: [kanishkainth.me](https://kanishkainth.me)
- LinkedIn: [kanishkainth](https://www.linkedin.com/in/kanishkainth/)
- GitHub: [kannishhh](https://github.com/kannishhh)

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- React Three Fiber team for the excellent React integration
- GSAP for professional-grade animations
- All open-source contributors who made this project possible

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/kannishhh/3d_Portfolio)
![GitHub language count](https://img.shields.io/github/languages/count/kannishhh/3d_Portfolio)
![GitHub top language](https://img.shields.io/github/languages/top/kannishhh/3d_Portfolio)

---

⭐ **If you found this project helpful, please give it a star!** ⭐