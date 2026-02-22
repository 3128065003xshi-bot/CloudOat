// src/pages/client-portal/PortalLayout.tsx
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LogOut, User, CreditCard, Users, Coins, Ticket, LayoutDashboard } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/client-portal' },
  { icon: User, label: 'User Info', path: '/client-portal/user' },
  { icon: CreditCard, label: 'Current Plan', path: '/client-portal/plan' },
  { icon: Users, label: 'Leads', path: '/client-portal/leads' },
  { icon: Users, label: 'Customers', path: '/client-portal/customers' },
  { icon: Coins, label: 'Tokens', path: '/client-portal/tokens' },
  { icon: Ticket, label: 'Coupons', path: '/client-portal/coupons' },
  { icon: LogOut, label: 'Logout', isLogout: true },
];

export default function PortalLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-cloud">
      {/* Left Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200/80 flex flex-col shadow-sm">
        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-sky">Cloud</span>
            <span className="text-oat">Oat</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1.5">Client Portal</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-5 py-8 space-y-1.5">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const baseClasses = "group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 font-medium text-lg";

            if (item.isLogout) {
              return (
                <button
                  key="logout"
                  onClick={handleLogout}
                  className={`${baseClasses} text-red-600 hover:bg-red-50/80 hover:text-red-700`}
                >
                  <LogOut size={24} className="group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.path ?? '/client-portal'}   // fallback if somehow undefined
                className={`${baseClasses} ${
                  isActive
                    ? 'bg-sky/10 text-sky-dark font-semibold shadow-sm'
                    : 'text-oat-dark hover:bg-sky/5 hover:text-sky-dark'
                }`}
              >
                <item.icon
                  size={24}
                  className={`transition-colors ${isActive ? 'text-sky-dark' : 'text-oat'}`}
                />
                <span>{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-sky-dark" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer info */}
        <div className="p-6 border-t border-gray-200 text-sm text-gray-600">
          Logged in as:<br />
          <span className="font-medium text-oat-dark">
            {localStorage.getItem('userEmail') || 'test@test.com'}
          </span>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
}