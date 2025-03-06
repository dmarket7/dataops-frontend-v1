import { LayoutDashboard, History, Bell, Settings } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">DataOps Dashboard</h1>
      <nav className="space-y-4">
        <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
          <LayoutDashboard /> Dashboard
        </Link>
        <Link href="/validation-history" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
          <History /> Validation History
        </Link>
        <Link href="/alerts" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
          <Bell /> Alerts
        </Link>
        <Link href="/pipeline-config" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
          <Settings /> Pipeline Config
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;