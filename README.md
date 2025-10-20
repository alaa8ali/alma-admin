# Alma Admin Dashboard

A modern, independent admin dashboard for the Alma e-commerce store built with Next.js 14, TypeScript, TailwindCSS, and Supabase.

## Features

- **Simple Authentication**: Fixed password-based login (alma1234)
- **Session Management**: HTTP-only cookies with 12-hour expiration
- **Dashboard Statistics**: Real-time stats for products, orders, users, and revenue
- **Product Management**: Full CRUD operations with image uploads to Supabase Storage
- **Category Management**: Organize products into categories
- **Offer Management**: Create and manage product discounts
- **Order Management**: View and track customer orders
- **User Management**: Manage customer accounts
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Route Protection**: All admin routes require authentication

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Deployment**: Vercel

## Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alaa8ali/alma-admin.git
cd alma-admin
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with the following variables:
```env
NEXT_PUBLIC_SUPABASE_URL=https://yqnvdurconsjesnampmj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ADMIN_PASSWORD=alma1234
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Authentication

The dashboard uses a simple password-based authentication system:

- **Login URL**: `/login`
- **Default Password**: `alma1234`
- **Session Duration**: 12 hours
- **Session Storage**: HTTP-only cookies

## Project Structure

```
alma-admin/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       ├── login/
│   │   │       └── logout/
│   │   ├── dashboard/
│   │   │   ├── page.tsx (Dashboard home)
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── offers/
│   │   │   ├── orders/
│   │   │   └── users/
│   │   ├── login/
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
└── package.json
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Select the `alaa8ali/alma-admin` repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_PASSWORD`
6. Click "Deploy"

The dashboard will be available at `https://alma-admin.vercel.app`

## Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## API Routes

### Authentication
- `POST /api/auth/login` - Login with password
- `POST /api/auth/logout` - Logout and clear session

## Security Notes

- The admin password should be changed in production
- Environment variables should never be committed to version control
- Use strong, unique passwords for Supabase service role key
- Regularly update dependencies for security patches
- Enable HTTPS in production (Vercel does this automatically)

## Troubleshooting

### Login not working
- Verify the `ADMIN_PASSWORD` environment variable is set correctly
- Check browser cookies are enabled
- Clear browser cache and try again

### Database connection errors
- Verify Supabase credentials are correct
- Check Supabase project is active
- Ensure database tables exist with correct schema

## License

Proprietary - Alma E-commerce

## Support

For issues or questions, please contact the development team or create an issue on GitHub.

---

**Project**: alma-admin  
**Version**: 0.1.0  
**Last Updated**: October 2025
