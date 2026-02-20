export default function Tokens() {
  return (
    <div className="p-8 lg:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-oat-dark mb-10">Token Usage & Balance</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow-xl border border-sky/30 p-10">
          <h2 className="text-3xl font-bold text-sky mb-6">Current Balance</h2>
          <div className="text-center">
            <p className="text-7xl font-black text-sky-dark">17,820</p>
            <p className="text-2xl text-gray-600 mt-4">tokens remaining</p>
          </div>
          <div className="mt-10">
            <div className="w-full bg-gray-200 rounded-full h-5">
              <div className="bg-sky h-5 rounded-full w-[71%]" />
            </div>
            <p className="text-center text-gray-600 mt-4">
              71% used (7,180 tokens this month)
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-oat/30 p-10">
          <h2 className="text-3xl font-bold text-oat-dark mb-6">Usage History</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="font-medium">Chat message processing</p>
                <p className="text-sm text-gray-500">Feb 20, 2026</p>
              </div>
              <span className="text-red-600 font-medium">-12 tokens</span>
            </div>
            {/* Add 3–4 more rows */}
          </div>
        </div>
      </div>
    </div>
  );
}