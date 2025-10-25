import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function OrdersList() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { data } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    setOrders(data || []);
  };

  useEffect(() => { fetchOrders(); }, []);

  const updateStatus = async (id, status) => {
    await supabase.from('orders').update({ status }).eq('id', id);
    fetchOrders();
  };

  return (
    <div className="card">
      {orders.map(order => (
        <div key={order.id} className="border-b py-3">
          <div>🧾 الطلب #{order.id}</div>
          <div>👤 {order.customer_name}</div>
          <div>💰 {order.total} د.ع</div>
          <div>📦 الحالة: {order.status}</div>
          <button onClick={() => updateStatus(order.id, 'تم التسليم')} className="btn bg-blue-600 text-white mt-2">تحديث الحالة</button>
        </div>
      ))}
    </div>
  );
}

