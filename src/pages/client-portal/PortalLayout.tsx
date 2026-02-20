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
    // Simple auth check (replace with real Cognito check later)
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
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-8 border-b">
          <h1 className="text-2xl font-bold">
            <span className="text-sky">Cloud</span>
            <span className="text-oat">Oat</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Client Portal</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            if (item.isLogout) {
              return (
                <button
                  key="logout"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 px-5 py-4 text-red-600 hover:bg-red-50 rounded-xl transition font-medium"
                >
                  <LogOut size={22} />
                  <span>Logout</span>
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.path ?? '/client-portal'}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl transition font-medium ${
                  isActive
                    ? 'bg-sky/10 text-sky font-semibold'
                    : 'text-gray-700 hover:bg-sky/5 hover:text-sky'
                }`}
              >
                <item.icon size={22} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t text-sm text-gray-500">
          Logged in as:<br />
          <span className="font-medium text-gray-800">
            {localStorage.getItem('userEmail') || 'test@test.com'}
          </span>
        </div>
      </aside>

      {/* Main content – different page loads here */}
      <main className="flex-1 overflow-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
}