export default function Coupons() {
  return (
    <div className="p-8 lg:p-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-oat-dark">Coupons</h1>
        <button className="bg-oat text-cloud px-6 py-3 rounded-xl font-semibold hover:bg-oat-dark transition">
          Create New Coupon
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold text-oat-dark mb-2">Active Coupons</h2>
          <p className="text-gray-600">You have 3 active coupon codes</p>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            { code: "GEO2026", discount: "20%", uses: "12/50", expires: "Mar 31, 2026" },
            { code: "WELCOME10", discount: "10%", uses: "8/100", expires: "Apr 15, 2026" },
            // Add more rows
          ].map((coupon, i) => (
            <div key={i} className="p-6 flex justify-between items-center hover:bg-gray-50 transition">
              <div>
                <p className="font-bold text-xl text-sky">{coupon.code}</p>
                <p className="text-gray-600">{coupon.discount} off</p>
              </div>
              <div className="text-right">
                <p className="text-gray-700">{coupon.uses} uses</p>
                <p className="text-sm text-gray-500">Expires {coupon.expires}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}