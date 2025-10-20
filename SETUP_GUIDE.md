# Alma Admin Dashboard - Setup & Deployment Guide

## Project Overview

**alma-admin** is a modern admin dashboard for the Alma e-commerce store built with Next.js 14, TypeScript, TailwindCSS, and Supabase.

### Key Features
- ✅ Simple password-based authentication (alma1234)
- ✅ HTTP-only secure cookies (12-hour sessions)
- ✅ Dashboard with statistics
- ✅ Product management
- ✅ Category management
- ✅ Offer management
- ✅ Order management
- ✅ User management
- ✅ Responsive design
- ✅ Route protection with middleware

---

## Local Development Setup

### Prerequisites
- Node.js 18+ (you have 22.13.0)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/alaa8ali/alma-admin.git
cd alma-admin
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory with the Supabase credentials and admin password.

4. **Run the development server**
```bash
npm run dev
```

5. **Access the application**
- Open http://localhost:3000 in your browser
- You'll be redirected to /login
- Enter password: `alma1234`
- Click "Login"

---

## Building for Production

### Build the project
```bash
npm run build
```

### Start production server
```bash
npm start
```

---

## Deployment to Vercel

### Step 1: Prepare GitHub Repository

The project is already on GitHub at: https://github.com/alaa8ali/alma-admin

Make sure all changes are committed and pushed:
```bash
git add .
git commit -m "Your message"
git push origin master
```

### Step 2: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub account
4. Authorize Vercel to access your GitHub repositories

### Step 3: Create New Project on Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New"
3. Select "Project"
4. Search for and select "alma-admin" repository
5. Click "Import"

### Step 4: Configure Environment Variables

On the Vercel project settings page:

1. Click "Environment Variables"
2. Add the following variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_PASSWORD`

### Step 5: Deploy

1. Click "Deploy" button
2. Wait for the build to complete (usually 2-5 minutes)
3. Once deployment is successful, you'll see a success message

### Step 6: Access Your Dashboard

Your dashboard will be available at:
- **https://alma-admin.vercel.app**

---

## Project Structure

```
alma-admin/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       ├── login/
│   │   │       │   └── route.ts
│   │   │       └── logout/
│   │   │           └── route.ts
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── offers/
│   │   │   ├── orders/
│   │   │   └── users/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   └── DashboardLayout.tsx
│   └── lib/
├── middleware.ts
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Authentication Details

### Login Flow
1. User navigates to `/login`
2. Enters password: `alma1234`
3. Password is sent to `/api/auth/login` endpoint
4. If correct, HTTP-only cookie is set with 12-hour expiration
5. User is redirected to `/dashboard`

### Session Management
- **Cookie Name**: `session`
- **Cookie Value**: `authenticated`
- **Duration**: 12 hours
- **Security**: HTTP-only, Secure (production), SameSite=Lax

### Logout
- Click "Logout" button in sidebar
- Session cookie is cleared
- User is redirected to `/login`

---

## Available Routes

### Public Routes
- `/` - Redirects to `/login`
- `/login` - Login page
- `/api/auth/login` - Login API endpoint
- `/api/auth/logout` - Logout API endpoint

### Protected Routes (Require Authentication)
- `/dashboard` - Main dashboard
- `/dashboard/products` - Products management
- `/dashboard/categories` - Categories management
- `/dashboard/offers` - Offers management
- `/dashboard/orders` - Orders management
- `/dashboard/users` - Users management

---

## Available Scripts

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## Troubleshooting

### Issue: Login page shows but login doesn't work

**Solution:**
1. Verify `ADMIN_PASSWORD` environment variable is set to `alma1234`
2. Check browser console for errors
3. Clear browser cookies and cache
4. Try in incognito/private window

### Issue: Vercel deployment fails with build error

**Solution:**
1. Check Vercel build logs for specific errors
2. Verify all environment variables are set correctly
3. Ensure `.env.local` is in `.gitignore` (it is)
4. Try rebuilding from Vercel dashboard

### Issue: Cannot access dashboard after login

**Solution:**
1. Check browser cookies are enabled
2. Verify middleware.ts is properly configured
3. Check browser console for redirect errors
4. Clear browser cache and try again

### Issue: Supabase connection errors

**Solution:**
1. Verify Supabase credentials are correct
2. Check Supabase project is active at https://supabase.com/dashboard
3. Verify database tables exist
4. Check Supabase network status

---

## Security Best Practices

1. **Never commit `.env.local` to Git** (it's in `.gitignore`)
2. **Change admin password in production**
3. **Use strong passwords for Supabase keys**
4. **Enable HTTPS** (Vercel does this automatically)
5. **Regularly update dependencies**
6. **Monitor Supabase access logs**
7. **Use environment variables for all secrets**

---

## Performance Tips

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Next.js handles this automatically
3. **Caching**: Vercel caches static assets
4. **Database Queries**: Optimize Supabase queries
5. **Bundle Size**: Monitor with `npm run build`

---

## Next Steps

1. ✅ Project created and built successfully
2. ✅ Code pushed to GitHub
3. 📋 Deploy to Vercel (follow steps above)
4. 🔧 Configure custom domain (optional)
5. 📊 Set up monitoring and analytics
6. 🚀 Launch to production

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **TailwindCSS Docs**: https://tailwindcss.com/docs
- **GitHub Repository**: https://github.com/alaa8ali/alma-admin

---

**Last Updated**: October 20, 2025  
**Project Version**: 0.1.0  
**Status**: ✅ Ready for Deployment

