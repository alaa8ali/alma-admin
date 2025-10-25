import OrdersList from '../components/OrdersList';

export default function OrdersPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🧾 إدارة الطلبات</h2>
      <OrdersList />
    </div>
  );
}

