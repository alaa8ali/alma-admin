import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function OffersManager() {
  const [title, setTitle] = useState('');
  const [discount, setDiscount] = useState('');
  const [endDate, setEndDate] = useState('');

  const createOffer = async () => {
    if (!title || !discount || !endDate) {
      alert('املأ جميع الحقول.');
      return;
    }
    await supabase.from('offers').insert([{ title, discount, end_date: endDate }]);
    alert('✅ تم إنشاء العرض بنجاح');
  };

  return (
    <div className="card p-4 bg-white rounded-2xl shadow">
      <h3 className="text-xl font-bold mb-3">🎉 إدارة العروض</h3>
      <input type="text" placeholder="عنوان العرض" value={title} onChange={e => setTitle(e.target.value)} className="input mb-2" />
      <input type="number" placeholder="نسبة الخصم %" value={discount} onChange={e => setDiscount(e.target.value)} className="input mb-2" />
      <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="input mb-2" />
      <button onClick={createOffer} className="btn bg-green-600 text-white">إضافة العرض</button>
    </div>
  );
}

