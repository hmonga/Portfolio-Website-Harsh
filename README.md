# Portfolio Website - Harsh Monga

A modern React portfolio website built with Vite, featuring 3D animated backgrounds, interactive menus, and a full-stack contact form.

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

This project is configured for Vercel deployment.

### Deploy to Vercel

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New Project"
3. Import your repository: `hmonga/Portfolio-Website-Harsh`
4. Vercel will auto-detect the settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click "Deploy"
6. Your site will be live in minutes!

#### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

### Automatic Deployments

Once connected to Vercel, every push to your `main` branch will automatically trigger a new deployment.

## Tech Stack

- React 18
- Vite
- React Router
- Three.js & React Three Fiber
- GSAP (Animations)
- EmailJS (Contact Form)
- Modern CSS

