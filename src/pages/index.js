import Link from 'next/link';
import DashboardStats from '../components/DashboardStats';

export default function Home() {
  const links = [
    { href: '/products', label: 'المنتجات' },
    { href: '/categories', label: 'الفئات' },
    { href: '/orders', label: 'الطلبات' },
    { href: '/reports', label: 'التقارير' },
    { href: '/media', label: 'مركز الوسائط' },
    { href: '/settings', label: 'الإعدادات' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">لوحة تحكم Alma</h1>
      <DashboardStats />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            <div className="card hover:bg-blue-50 cursor-pointer">
              <h3 className="text-lg font-semibold text-blue-700">{link.label}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

