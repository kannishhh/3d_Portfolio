# Kanish Kainth | Portfolio

A high-end, interactive portfolio website built with React, Three.js, and Tailwind CSS. This project showcases a minimal, dark aesthetic inspired by "Jewel" tones (Emerald, Sapphire) and features smooth 3D interactions and polished animations.

![Portfolio Preview](./assets/preview.webm)

## 🚀 Tech Stack

- **Frontend**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) via [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) and [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Email Service**: [EmailJS](https://emailjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Features

- **Interactive 3D Scene**: A subtle particle system and environment mapping built with Three.js.
- **Smooth Scroll Experience**: Integrated for a seamless transition between sections.
- **Project Showcase**: Detailed project cards with video demos, tech tags, and live/source links.
- **Custom Cursor**: A reactive, spring-animated cursor for enhanced interactivity.
- **Dynamic Journey**: A chronological timeline of professional experiences.
- **Contact Form**: A fully functional contact form integrated with the EmailJS for real-time email notifications.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Legal Pages**: Includes Privacy Policy and Terms & Conditions pages.

## 🛠️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kannishhh/3d_Portfolio
   cd 3d_Portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the frontend directory and add your EmailJS API key:

   ```env
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_USER_ID=your_user_id
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── About.jsx     # Three.js Canvas and 3D logic
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── Projects.jsx
│   │   ├── Scene.jsx
│   │   └── Skills.jsx
│   ├── data/             # Static data for projects, skills, etc.
│   ├── App.jsx           # Main application logic & Routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles & Tailwind imports
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies and scripts
```

## 📄 License

This project is licensed under the MIT License - see the [Terms & Conditions](/terms) page for details.

---

Built with ❤️ by [Kanish Kainth](mailto:knshkainth2002@gmail.com)
