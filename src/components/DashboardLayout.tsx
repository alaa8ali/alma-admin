"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  Package,
  Tag,
  Zap,
  ShoppingCart,
  Users,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/products", label: "Products", icon: Package },
    { href: "/dashboard/categories", label: "Categories", icon: Tag },
    { href: "/dashboard/offers", label: "Offers", icon: Zap },
    { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
    { href: "/dashboard/users", label: "Users", icon: Users },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <h1 className={`font-bold text-xl ${!sidebarOpen && "text-center"}`}>
            {sidebarOpen ? "Alma Admin" : "AA"}
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                <Icon className="w-5 h-5" />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition text-red-400"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Admin Dashboard</h2>
          <div className="w-10 h-10 bg-indigo-600 rounded-full"></div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
