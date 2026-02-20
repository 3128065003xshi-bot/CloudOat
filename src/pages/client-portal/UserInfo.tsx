export default function UserInfo() {
  return (
    <div className="p-8 lg:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-oat-dark mb-10">User Information</h1>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl">
        <div className="bg-sky/5 p-8 border-b">
          <h2 className="text-2xl font-bold text-sky-dark">Account Details</h2>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
              <p className="text-xl font-medium text-gray-900">Test User</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
              <p className="text-xl font-medium text-gray-900">test@test.com</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Phone</label>
              <p className="text-xl font-medium text-gray-900">(555) 123-4567</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Joined</label>
              <p className="text-xl font-medium text-gray-900">February 1, 2026</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Account Status</label>
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Active
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 text-right">
        <button className="text-sky hover:text-sky-dark font-medium">
          Edit Profile →
        </button>
      </div>
    </div>
  );
}