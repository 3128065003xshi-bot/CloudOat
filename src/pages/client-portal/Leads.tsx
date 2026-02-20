export default function Leads() {
  return (
    <div className="p-8 lg:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-oat-dark mb-10">Leads</h1>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold text-sky-dark mb-2">February 2026 Leads</h2>
          <p className="text-gray-600">Generated from generative AI traffic</p>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            { name: "John Doe", email: "john@example.com", source: "ChatGPT", date: "Feb 20" },
            { name: "Jane Smith", email: "jane@company.com", source: "Perplexity", date: "Feb 19" },
            // Add 3–5 more fake rows
          ].map((lead, i) => (
            <div key={i} className="p-6 flex justify-between items-center hover:bg-gray-50 transition">
              <div>
                <p className="font-medium text-gray-900">{lead.name}</p>
                <p className="text-sm text-gray-600">{lead.email}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{lead.source}</p>
                <p className="text-sm text-gray-500">{lead.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}