"use client";

import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-medium">Total Products</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-medium">Total Orders</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-medium">Total Users</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-medium">Total Revenue</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">$0</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Welcome to Alma Admin</h2>
          <p className="text-gray-600">
            Use the sidebar to navigate to different sections of the admin dashboard.
            You can manage products, categories, offers, orders, and users from here.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
