# 🚀 TransiAI Deployment Guide

## Quick Deploy to Netlify (Recommended)

### Option 1: Deploy via Netlify CLI (Fastest)

1. **Install Netlify CLI** (if not already installed):
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Deploy from the project directory**:
```bash
cd C:\Users\mupepe\Desktop\transiai
netlify deploy --prod
```

4. **Follow the prompts**:
   - Create & configure a new site? **Yes**
   - Team: Select your team
   - Site name: `transiai` (or your preferred name)
   - Publish directory: `.` (current directory)

5. **Your site will be live at**: `https://transiai.netlify.app` (or your custom name)

---

### Option 2: Deploy via Netlify Dashboard (Easiest)

1. **Push to GitHub first** (see GitHub section below)

2. **Go to Netlify**:
   - Visit: https://app.netlify.com
   - Click "Add new site" → "Import an existing project"

3. **Connect to GitHub**:
   - Select "GitHub"
   - Authorize Netlify
   - Choose your `transiai` repository

4. **Configure build settings**:
   - Build command: Leave empty (static site)
   - Publish directory: `.` (root)
   - Click "Deploy site"

5. **Done!** Your site will be live in ~1 minute

---

### Option 3: Drag & Drop Deploy

1. **Go to Netlify**: https://app.netlify.com/drop

2. **Drag the entire `transiai` folder** onto the page

3. **Done!** Instant deployment (but won't auto-update from Git)

---

## 📦 Push to GitHub

### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `transiai`
3. Description: `African AI-Powered Mobility Platform`
4. Make it **Public** (for free Netlify hosting)
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push Your Code

```bash
cd C:\Users\mupepe\Desktop\transiai

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/transiai.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify

- Visit: `https://github.com/YOUR_USERNAME/transiai`
- You should see all 32 files

---

## 🌐 Custom Domain (Optional)

### On Netlify:

1. Go to: Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `transiai.co.za`)
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificate

---

## 🔄 Continuous Deployment

Once connected to GitHub, every push automatically deploys:

```bash
# Make changes to your code
git add .
git commit -m "Update feature"
git push

# Netlify automatically deploys in ~30 seconds
```

---

## 📊 Netlify Features You Get

✅ **Free Hosting** - 100GB bandwidth/month
✅ **Automatic HTTPS** - Free SSL certificate
✅ **CDN** - Global content delivery
✅ **Continuous Deployment** - Auto-deploy from Git
✅ **Instant Rollbacks** - One-click to previous versions
✅ **Preview Deployments** - Test before going live
✅ **Form Handling** - Built-in form submissions
✅ **Analytics** - Traffic insights (paid add-on)

---

## 🎯 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify maps work (Leaflet.js)
- [ ] Test login flows (passenger/driver/admin)
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify QR code generation
- [ ] Test queue system
- [ ] Check all buttons work

---

## 🐛 Troubleshooting

### Issue: 404 on page refresh
**Solution**: Already configured in `netlify.toml` with redirects

### Issue: Maps not loading
**Solution**: Check browser console for errors. Leaflet.js loads from CDN.

### Issue: Slow loading
**Solution**: Netlify CDN should handle this. Check your internet connection.

### Issue: Forms not working
**Solution**: Add `netlify` attribute to forms for built-in handling

---

## 📱 Share Your Site

Once deployed, share:
- **Live URL**: `https://your-site.netlify.app`
- **GitHub Repo**: `https://github.com/YOUR_USERNAME/transiai`
- **Demo Credentials**:
  - Passenger: `thabo@example.com` / `password123`
  - Driver: `nomsa@example.com` / `password123`
  - Admin: `admin@transiai.com` / `admin123`

---

## 🎉 You're Done!

Your TransiAI platform is now live and accessible worldwide!

**Need help?** Check:
- Netlify Docs: https://docs.netlify.com
- GitHub Docs: https://docs.github.com
- TransiAI README: See README.md in this project

---

**Built with ❤️ for South Africa**
