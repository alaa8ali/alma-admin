import CategoryManager from '../components/CategoryManager';

export default function CategoriesPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏷️ إدارة الفئات</h2>
      <CategoryManager />
    </div>
  );
}

