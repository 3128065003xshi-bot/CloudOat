import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getClientProfile } from '../../lib/dynamoClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const profile = await getClientProfile(email.trim());

      if (!profile) {
        setError('User not found. Please check your email.');
        return;
      }

      if (profile.password !== password) {
        setError('Incorrect password.');
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email.trim());
      navigate('/client-portal');
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to connect to database. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky/10 via-cloud to-oat/10 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-sky/30">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">
            <span className="text-sky">Cloud</span>
            <span className="text-oat">Oat</span>
          </h1>
          <p className="text-gray-600 mt-2">Client Portal Login</p>
        </div>

        <div className="bg-oat/10 border border-oat/30 text-oat-dark px-6 py-4 rounded-xl mb-8 text-center font-medium">
          <strong>Important:</strong> Our client portal is currently <strong>invite-only</strong>.  
          Please contact us to set up your account.
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl mb-8 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@test.com"
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-sky focus:ring-2 focus:ring-sky/30 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••••••••••"
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-sky focus:ring-2 focus:ring-sky/30 outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl text-lg font-semibold transition transform ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky hover:bg-sky-dark text-white hover:shadow-xl hover:scale-[1.02]'
            }`}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Test credentials (for demo only):<br />
          <strong>Email:</strong> test@test.com<br />
          <strong>Password:</strong> test12345
        </div>
      </div>
    </div>
  );
}