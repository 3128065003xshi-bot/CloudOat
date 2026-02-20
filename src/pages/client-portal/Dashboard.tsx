export default function Dashboard() {
  return (
    <div className="p-8 lg:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-oat-dark mb-8">Welcome to Your Dashboard</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Stats Cards */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky/20">
          <h3 className="text-xl font-semibold text-sky mb-4">Tokens Remaining</h3>
          <p className="text-6xl font-black text-sky-dark">17,820</p>
          <p className="text-gray-600 mt-2">out of 25,000 monthly allowance</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-oat/20">
          <h3 className="text-xl font-semibold text-oat mb-4">Leads This Month</h3>
          <p className="text-6xl font-black text-oat-dark">52</p>
          <p className="text-gray-600 mt-2">from generative AI traffic</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-dark/20">
          <h3 className="text-xl font-semibold text-sky-dark mb-4">Active Customers</h3>
          <p className="text-6xl font-black text-sky">8</p>
          <p className="text-gray-600 mt-2">under your management</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-oat-dark mb-6">Recent Activity</h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium text-gray-900">Chat message processed</p>
              <p className="text-sm text-gray-500">Feb 20, 2026 - 08:45 AM</p>
            </div>
            <span className="text-sky font-medium">-12 tokens</span>
          </div>
          {/* Add 2–3 more rows like this */}
        </div>
      </div>
    </div>
  );
}