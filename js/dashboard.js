import { supabase } from './supabaseClient.js';

// تأمين الصفحة
const session = localStorage.getItem('alma_session');
if (!session) window.location.href = 'index.html';

// تسجيل الخروج
document.getElementById('logout').addEventListener('click', async () => {
  await supabase.auth.signOut();
  localStorage.removeItem('alma_session');
  window.location.href = 'index.html';
});

// تحميل الإحصائيات والطلبات
async function loadDashboard() {
  // عدد المنتجات
  const { count: productCount } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true });

  // عدد الطلبات
  const { count: orderCount } = await supabase
    .from('orders')
    .select('*', { count: 'exact', head: true });

  // تحديث الإحصائيات
  document.getElementById('stats-content').innerHTML = `
    <div>عدد المنتجات: ${productCount}</div>
    <div>عدد الطلبات: ${orderCount}</div>
  `;

  // عرض الطلبات الأخيرة
  const { data: orders } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  const tbody = document.querySelector('#orders-table tbody');
  tbody.innerHTML = '';
  orders?.forEach(order => {
    tbody.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.customer_name || '—'}</td>
        <td>${order.total || 0} ج.م</td>
        <td>${order.status || 'قيد التنفيذ'}</td>
      </tr>
    `;
  });
}

loadDashboard();
