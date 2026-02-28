// src/pages/client-portal/CurrentPlan.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config/env';

export default function CurrentPlan() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
  const fetchProfileData = async () => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      navigate('/login'); // Now we are using navigate, so it must be in the array
      return;
    }

    try {
      console.log("📡 Attempting to fetch from:", `${config.apiUrl}/profile?email=${userEmail}`);
      
      const res = await fetch(`${config.apiUrl}/profile?email=${encodeURIComponent(userEmail)}`);
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error("❌ API Error Status:", res.status, errorText);
        setError(`Server error: ${res.status}`);
        return;
      }

      const data = await res.json();
      console.log("📦 Data received from server:", data);
      
      if (data.user) {
        setProfile(data.user);
      }
    } catch (err) {
      console.error("❌ Network Fetch Failed. Is the server running on port 3000?", err);
      setError("Network error. Check if local-server.js is running.");
    } finally {
      setLoading(false);
    }
  };

  fetchProfileData();
}, [navigate]); // <--- ADD 'navigate' BACK HERE

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-2 border-sky"></div>
      </div>
    );
  }

  // Token Calculations
  const total = Number(profile?.tokensTotal) || 0;
  const used = Number(profile?.tokensUsedThisMonth) || 0;
  const remaining = Math.max(0, total - used);
  const usagePercent = total > 0 ? Math.min(100, (used / total) * 100) : 0;

  // Plan Details from the backend "Join"
  const plan = profile?.planDetails;

  console.log("Current Plan Data:", plan);

  return (
    <div className="p-8 lg:p-12">

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl">
          {error}
        </div>
      )}

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-oat-dark">Current Plan & Tokens</h1>
        <p className="text-sky-dark font-medium mt-2 tracking-wide uppercase text-sm">
          Subscription Status: <span className="text-green-600 font-bold">{profile?.status}</span>
        </p>
      </header>

      <div className="grid lg:grid-cols-5 gap-8">
        
        {/* LEFT COLUMN: Plan Details (Spans 3 columns) */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Main Plan Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-sky/10 overflow-hidden">
            <div className="bg-gradient-to-br from-cloud to-sky/5 p-8 border-b border-sky/10 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-black text-oat-dark uppercase tracking-tight">
                  {plan?.planName || 'Plan Name Missing'}
                </h2>
                <p className="text-sky-dark font-bold mt-1">Tier Level: {profile?.role}</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-black text-sky-dark">${plan?.price ? String(plan.price) : '---'}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Per Month</p>
              </div>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-8">
              {/* Service Inclusions */}
              <div>
                <h3 className="text-sm font-bold text-oat uppercase tracking-widest mb-4">Service Inclusions</h3>
                <ul className="space-y-3">
                  {plan?.promoNote && (
                      <li className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-2xl animate-pulse-subtle">
                        <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                        <div>
                          <p className="text-xs font-black text-green-700 uppercase tracking-tighter">Limited Offer</p>
                          <p className="text-sm font-bold text-green-600">{plan.promoNote}</p>
                        </div>
                      </li>
                    )}
                  <li className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                    <div className="w-2 h-2 rounded-full bg-sky" />
                    {plan?.leadsEstimated} Guaranteed Leads / mo
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                    <div className="w-2 h-2 rounded-full bg-sky" />
                    Agent Skill: {plan?.agentSkill}
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                    <div className="w-2 h-2 rounded-full bg-sky" />
                    Website Rebuild: {plan?.websiteRebuild === 'Included' ? 'Free Rebuild' : `$${plan?.websiteRebuild}`}
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                    <div className="w-2 h-2 rounded-full bg-sky" />
                    Portal: {plan?.portalType}
                  </li>
                </ul>
              </div>

              {/* Technical Infrastructure */}
              <div>
                <h3 className="text-sm font-bold text-oat uppercase tracking-widest mb-4">Technical Specs</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                    <div className="w-2 h-2 rounded-full bg-oat" />
                    Model: {plan?.chatModel || 'Loading...'}  
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                    <div className="w-2 h-2 rounded-full bg-oat" />
                    API Rate: {plan?.tokensPerMin}
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium text-sm italic text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-oat" />
                    {plan?.awsBackend}
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="px-8 pb-8">
               <button className="w-full bg-oat hover:bg-oat-dark text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-oat/20 flex items-center justify-center gap-2">
                 Modify Subscription ✎
               </button>
            </div>
          </div>

          {/* Social Proof Stats (Optional extra section) */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-2xl border border-sky/10 shadow-sm text-center">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Google Reviews</p>
                <p className="text-lg font-bold text-oat-dark">{plan?.googleReviews}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-sky/10 shadow-sm text-center">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Social Quota</p>
                <p className="text-lg font-bold text-oat-dark">{plan?.socialReviews}</p>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Token Usage (Spans 2 columns) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-xl border border-sky/20 p-8 h-full flex flex-col">
            <h2 className="text-2xl font-black text-sky mb-8 uppercase tracking-tight">Token Allocation</h2>
            
            <div className="flex-grow flex flex-col justify-center">
              <div className="text-center mb-10">
                <p className="text-7xl font-black text-sky-dark">{remaining.toLocaleString()}</p>
                <p className="text-gray-500 font-bold mt-2 uppercase text-xs tracking-widest">Available Balance</p>
              </div>

              <div className="space-y-6">
                <div className="bg-cloud p-6 rounded-2xl border border-sky/10">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-sm font-bold text-oat-dark uppercase tracking-wide">Monthly Consumption</span>
                    <span className="text-lg font-black text-sky-dark">{usagePercent.toFixed(1)}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200/50 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-sky h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(125,211,252,0.5)]" 
                      style={{ width: `${usagePercent}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    <span>Used: {used.toLocaleString()}</span>
                    <span>Cap: {total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-[11px] text-center text-gray-400 font-medium mb-4 italic">
                    Overage Rate: ${plan?.priceAfterCap} per 1M tokens after cap.
                  </p>
                  <button className="w-full border-2 border-sky text-sky hover:bg-sky hover:text-white font-black py-4 rounded-2xl transition-all uppercase tracking-widest text-sm">
                    Recharge Tokens
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-50 flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <span>Next Reset</span>
              <span>{profile?.tokensResetDate || '1st of Month'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}