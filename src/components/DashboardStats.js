import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function DashboardStats() {
  const [stats, setStats] = useState({ products: 0, orders: 0, users: 0 });

  const fetchStats = async () => {
    const { count: pCount } = await supabase.from('products').select('*', { count: 'exact', head: true });
    const { count: oCount } = await supabase.from('orders').select('*', { count: 'exact', head: true });
    const { count: uCount } = await supabase.from('users').select('*', { count: 'exact', head: true });
    setStats({ products: pCount, orders: oCount, users: uCount });
  };

  useEffect(() => { fetchStats(); }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="card text-center"><h3>🛍️ المنتجات</h3><p className="text-2xl font-bold">{stats.products}</p></div>
      <div className="card text-center"><h3>📦 الطلبات</h3><p className="text-2xl font-bold">{stats.orders}</p></div>
      <div className="card text-center"><h3>👥 المستخدمون</h3><p className="text-2xl font-bold">{stats.users}</p></div>
    </div>
  );
}
