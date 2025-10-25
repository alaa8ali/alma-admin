import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { formatCurrency } from '../utils/priceUtils';

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');

  const fetchProducts = async () => {
    const { data } = await supabase.from('products').select('*');
    setProducts(data || []);
  };

  const addProduct = async () => {
    if (!name || !price || !cost) return alert('أكمل الحقول');
    await supabase.from('products').insert([{ name, price, cost }]);
    setName(''); setPrice(''); setCost('');
    fetchProducts();
  };

  useEffect(() => { fetchProducts(); }, []);

  return (
    <div className="card">
      <div className="flex flex-wrap gap-2 mb-3">
        <input className="input flex-1" placeholder="الاسم" value={name} onChange={e => setName(e.target.value)} />
        <input className="input w-32" placeholder="السعر" value={price} onChange={e => setPrice(e.target.value)} />
        <input className="input w-32" placeholder="الكلفة" value={cost} onChange={e => setCost(e.target.value)} />
        <button className="btn bg-green-600 text-white" onClick={addProduct}>إضافة</button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-right border-b font-bold">
            <th>الاسم</th>
            <th>السعر</th>
            <th>الكلفة</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="border-b">
              <td>{p.name}</td>
              <td>{formatCurrency(p.price)}</td>
              <td>{formatCurrency(p.cost)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
