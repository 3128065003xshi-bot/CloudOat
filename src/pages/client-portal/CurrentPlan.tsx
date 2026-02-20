export default function CurrentPlan() {
  return (
    <div className="p-8 lg:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-oat-dark mb-10">Current Plan & Tokens</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Plan Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-oat/30 p-10">
          <h2 className="text-3xl font-bold text-oat-dark mb-6">Pro Plan</h2>
          <p className="text-6xl font-black text-sky mb-2">$299</p>
          <p className="text-gray-600 text-lg mb-8">per month</p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-sky/10 flex items-center justify-center">
                <div className="w-3 h-3 bg-sky rounded-full" />
              </div>
              25,000 tokens per month
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-sky/10 flex items-center justify-center">
                <div className="w-3 h-3 bg-sky rounded-full" />
              </div>
              Priority support & reporting
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-sky/10 flex items-center justify-center">
                <div className="w-3 h-3 bg-sky rounded-full" />
              </div>
              Unlimited customer management
            </li>
          </ul>

          <button className="mt-10 w-full bg-oat text-cloud py-4 rounded-xl font-semibold hover:bg-oat-dark transition">
            Upgrade Plan
          </button>
        </div>

        {/* Tokens Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-sky/30 p-10">
          <h2 className="text-3xl font-bold text-sky mb-6">Token Balance</h2>
          <div className="text-center mb-8">
            <p className="text-7xl font-black text-sky-dark">17,820</p>
            <p className="text-xl text-gray-600 mt-2">remaining this month</p>
          </div>

          <div className="bg-sky/5 rounded-xl p-6 mb-8">
            <p className="text-lg font-medium text-sky-dark mb-2">Usage this month</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-sky h-4 rounded-full w-[70%]" />
            </div>
            <p className="text-sm text-gray-600 mt-2">7,180 tokens used (28.7%)</p>
          </div>

          <button className="w-full bg-sky text-white py-4 rounded-xl font-semibold hover:bg-sky-dark transition">
            Buy More Tokens
          </button>
        </div>
      </div>
    </div>
  );
}