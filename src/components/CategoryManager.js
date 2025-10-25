import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function CategoryManager() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  const fetchCategories = async () => {
    const { data } = await supabase.from('categories').select('*');
    setCategories(data || []);
  };

  const addCategory = async () => {
    if (!name) return alert('اكتب اسم الفئة');
    await supabase.from('categories').insert([{ name }]);
    setName('');
    fetchCategories();
  };

  useEffect(() => { fetchCategories(); }, []);

  return (
    <div className="card">
      <div className="flex mb-3 gap-2">
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="input flex-1" placeholder="اسم الفئة" />
        <button onClick={addCategory} className="btn bg-green-600 text-white">إضافة</button>
      </div>

      <ul>
        {categories.map(cat => (
          <li key={cat.id} className="py-2 border-b">{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}
