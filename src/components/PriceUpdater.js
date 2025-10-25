import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function PriceUpdater() {
  const [percentage, setPercentage] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState('');

  const updatePrices = async () => {
    setLoading(true);
    let query = supabase.from('products');
    if (category) query = query.eq('category', category);
    const { data: products } = await query.select('*');

    for (const product of products) {
      let newPrice = product.price;
      if (exchangeRate) newPrice = (product.price * parseFloat(exchangeRate)).toFixed(2);
      if (percentage) newPrice = (newPrice * (1 + parseFloat(percentage) / 100)).toFixed(2);

      await supabase.from('products').update({ price: newPrice }).eq('id', product.id);
    }

    setLoading(false);
    alert('تم تحديث الأسعار بنجاح!');
  };

  return (
    <div className="card p-4 bg-white rounded-2xl shadow">
      <h3 className="text-xl font-bold mb-3">🛠️ تعديل الأسعار</h3>
      <input type="number" placeholder="نسبة الزيادة أو التخفيض %" value={percentage} onChange={e => setPercentage(e.target.value)} className="input mb-2" />
      <input type="text" placeholder="اسم الفئة (اختياري)" value={category} onChange={e => setCategory(e.target.value)} className="input mb-2" />
      <input type="number" placeholder="سعر الصرف (اختياري)" value={exchangeRate} onChange={e => setExchangeRate(e.target.value)} className="input mb-2" />
      <button onClick={updatePrices} disabled={loading} className="btn bg-blue-600 text-white">
        {loading ? 'جارٍ التحديث...' : 'تحديث الأسعار'}
      </button>
    </div>
  );
}

