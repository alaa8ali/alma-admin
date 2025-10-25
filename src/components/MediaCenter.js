import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function MediaCenter() {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState([]);

  const uploadImage = async () => {
    if (!file) return alert('اختر صورة أولاً!');
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from('images').upload(fileName, file);
    if (error) return alert('فشل رفع الصورة: ' + error.message);
    const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/images/${fileName}`;
    setUploaded([...uploaded, url]);
  };

  return (
    <div className="card">
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} className="mb-3" />
      <button onClick={uploadImage} className="btn bg-green-600 text-white">رفع الصورة</button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {uploaded.map((img, i) => (
          <img key={i} src={img} alt="Uploaded" className="rounded-xl shadow" />
        ))}
      </div>
    </div>
  );
}

