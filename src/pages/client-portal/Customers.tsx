export default function Customers() {
  return (
    <div className="p-8 lg:p-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-oat-dark">Customers</h1>
        <button className="bg-sky text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-dark transition">
          Add New Customer
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold text-oat-dark mb-2">Active Customers</h2>
          <p className="text-gray-600">8 customers under management</p>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            { name: "Acme Corp", email: "contact@acme.com", status: "Active", added: "Jan 15" },
            { name: "Beta Inc", email: "info@beta.com", status: "Active", added: "Feb 5" },
            // Add more rows
          ].map((cust, i) => (
            <div key={i} className="p-6 flex justify-between items-center hover:bg-gray-50 transition">
              <div>
                <p className="font-medium text-gray-900">{cust.name}</p>
                <p className="text-sm text-gray-600">{cust.email}</p>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {cust.status}
                </span>
                <p className="text-sm text-gray-500 mt-1">Added {cust.added}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}