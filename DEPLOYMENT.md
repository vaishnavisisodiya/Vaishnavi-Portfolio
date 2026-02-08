# 🚀 Deployment Guide

## Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
cd frontend
vercel
```

3. **Environment Variables**
- Set `VITE_API_URL` to your backend URL in Vercel dashboard

### Option 2: Netlify

1. **Build the project**
```bash
cd frontend
npm run build
```

2. **Deploy via Netlify CLI or drag & drop the `dist` folder**

### Option 3: GitHub Pages

1. **Update vite.config.js**
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. **Build and deploy**
```bash
npm run build
npm run deploy
```

## Backend Deployment

### Option 1: Railway

1. **Create account at railway.app**

2. **Connect GitHub repo or deploy via CLI**
```bash
npm i -g @railway/cli
railway login
railway init
railway up
```

3. **Set environment variables in Railway dashboard**
- `PORT` (automatically set)
- `EMAIL_USER`
- `EMAIL_PASS`
- `FRONTEND_URL`

### Option 2: Render

1. **Create account at render.com**

2. **New Web Service**
- Connect GitHub repository
- Build Command: `npm install`
- Start Command: `npm start`

3. **Environment Variables**
- Add all variables from `.env.example`

### Option 3: Heroku

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Deploy**
```bash
cd backend
heroku login
heroku create your-portfolio-api
git init
heroku git:remote -a your-portfolio-api
git add .
git commit -m "Initial commit"
git push heroku main
```

3. **Set config vars**
```bash
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
```

## Full-Stack Deployment

### Vercel + Railway (Recommended)

1. **Deploy Frontend to Vercel**
   - Automatic deployments from GitHub
   - Fast CDN
   - Free SSL

2. **Deploy Backend to Railway**
   - Easy database integration
   - Automatic scaling
   - Free tier available

3. **Update Frontend API URL**
   - Create `.env.production` in frontend:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```

4. **Update Backend CORS**
   - Add your Vercel URL to CORS whitelist

## Environment Variables Checklist

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000  # Development
VITE_API_URL=https://your-api.com   # Production
```

### Backend (.env)
```
PORT=5000
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=https://your-frontend.vercel.app
```

## Post-Deployment

1. **Test contact form**
2. **Check all links (GitHub, LinkedIn, etc.)**
3. **Verify responsive design on mobile**
4. **Test page load speed**
5. **Set up analytics (optional)**

## Custom Domain

### Frontend (Vercel)
1. Go to Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Backend (Railway/Render)
1. Go to Settings → Domains
2. Add custom domain
3. Update DNS CNAME record

## Monitoring

- **Frontend**: Vercel Analytics (built-in)
- **Backend**: Railway/Render logs
- **Uptime**: UptimeRobot or similar service
- **Errors**: Sentry (optional)

## Performance Optimization

1. **Enable compression** in backend
2. **Use CDN** for static assets
3. **Implement caching headers**
4. **Optimize images** (convert to WebP)
5. **Enable HTTP/2**

---

Need help? Contact: vaishvi.sisodiya28@gmail.com
