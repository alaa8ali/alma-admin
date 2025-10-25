import PriceUpdater from '../components/PriceUpdater';
import OffersManager from '../components/OffersManager';

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">⚙️ الإعدادات</h2>
      <PriceUpdater />
      <OffersManager />
    </div>
  );
}

