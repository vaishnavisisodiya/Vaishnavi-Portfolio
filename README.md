# 🌟 Vaishnavi Sisodiya - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development projects, technical skills, and achievements with a unique **Neo-Brutalist design aesthetic**.

![Portfolio Preview](https://img.shields.io/badge/React-18.2-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

## ✨ Features

- **Unique Design**: Neo-brutalist aesthetic with bold typography, dramatic contrasts, and geometric patterns
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Scroll-based animations, hover effects, and micro-interactions
- **Contact Form**: Backend API with email integration using Nodemailer
- **Performance Optimized**: Fast load times with Vite bundler
- **SEO Ready**: Proper meta tags and semantic HTML

## 🎨 Design Highlights

- **Custom Cursor**: Interactive cursor follower effect
- **Scroll Progress Bar**: Visual indicator of page progress
- **Animated Geometric Shapes**: Dynamic background elements
- **Gradient Accents**: Cyan, purple, and pink color scheme
- **Space Mono Font**: Distinctive monospace typography
- **Hover Transformations**: Interactive cards and buttons

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Custom CSS Animations** - Scroll-based and hover effects

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
portfolio-vaishnavi/
├── frontend/
│   ├── App.jsx              # Main React component
│   ├── main.jsx             # React entry point
│   ├── index.html           # HTML template
│   ├── index.css            # Global styles
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS config
│   └── postcss.config.js    # PostCSS config
├── backend/
│   ├── server.js            # Express server
│   ├── package.json         # Backend dependencies
│   └── .env.example         # Environment variables template
└── README.md                # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Gmail account (for contact form email functionality)

### Installation

1. **Clone or download the project**

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../backend
npm install
```

4. **Configure Environment Variables**
```bash
# In the backend folder
cp .env.example .env
# Edit .env and add your email credentials
```

To use Gmail for the contact form:
- Go to your Google Account settings
- Enable 2-factor authentication
- Generate an App Password for "Mail"
- Use this app password in the .env file

### Running the Application

1. **Start Backend Server** (in backend folder)
```bash
npm run dev
# Server runs on http://localhost:5000
```

2. **Start Frontend Development Server** (in frontend folder, new terminal)
```bash
npm run dev
# App runs on http://localhost:3000
```

3. **Open your browser**
Navigate to `http://localhost:3000`

## 📧 Contact Form Setup

The contact form requires email configuration in the backend `.env` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

**Gmail App Password Setup:**
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Go to "App passwords"
4. Select "Mail" and generate a password
5. Use this 16-character password in your .env file

## 🎯 Sections

1. **Hero** - Bold introduction with animated elements
2. **About** - Education and achievements
3. **Projects** - Featured full-stack projects with live demos
4. **Skills** - Technical stack organized by category
5. **Leadership** - Extracurricular activities and volunteering
6. **Contact** - Email and social media links

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Render/Heroku)
```bash
cd backend
# Deploy with your preferred platform
# Set environment variables in platform settings
```

## 🎨 Customization

### Colors
Edit the gradient colors in `App.jsx`:
```jsx
// Current: Cyan, Purple, Pink
bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500

// Change to your preferred colors
bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500
```

### Typography
Change the font in `App.jsx`:
```jsx
style={{ fontFamily: '"Space Mono", monospace' }}
// Replace with your preferred Google Font
```

### Content
Update your information in the `App.jsx` file:
- Personal details in Hero section
- Projects array
- Skills object
- Achievements and leadership

## 📱 Responsive Design

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Two column grid
- **Desktop**: > 1024px - Full multi-column layout

## ⚡ Performance

- Vite for fast HMR and build times
- CSS animations instead of JS for better performance
- Lazy loading for smooth scrolling
- Optimized bundle size

## 🔗 Live Links

Update these in `App.jsx` with your actual URLs:
- GitHub: `https://github.com/vaishnavisisodiya`
- LinkedIn: `https://linkedin.com/in/vaishnavi-sisodiya`
- LeetCode: `https://leetcode.com/u/sisodiyavaishnavi`
- Project repositories and live demos

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

## 📧 Contact

- **Email**: vaishvi.sisodiya28@gmail.com
- **Phone**: +91-8319745828
- **LinkedIn**: [Vaishnavi Sisodiya](https://linkedin.com/in/vaishnavi-sisodiya)
- **GitHub**: [vaishnavisisodiya](https://github.com/vaishnavisisodiya)

## 🙏 Acknowledgments

- Design inspiration from neo-brutalist and modern web design trends
- Icons from Lucide React
- Fonts from Google Fonts (Space Mono)

---

**Built with ❤️ by Vaishnavi Sisodiya**
