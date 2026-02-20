import { Routes, Route, Navigate } from 'react-router-dom';

// Public pages
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsGEO from './components/WhatIsGEO';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

// Client Portal pages
import Login from './pages/client-portal/Login';
import PortalLayout from './pages/client-portal/PortalLayout';
import Dashboard from './pages/client-portal/Dashboard';
import UserInfo from './pages/client-portal/UserInfo';
import CurrentPlan from './pages/client-portal/CurrentPlan';
import Leads from './pages/client-portal/Leads';
import Customers from './pages/client-portal/Customers';
import Tokens from './pages/client-portal/Tokens';
import Coupons from './pages/client-portal/Coupons';

function App() {
  return (
    <Routes>
      {/* Public landing page */}
      <Route path="/" element={
        <>
          <Navbar />
          <Hero />
          <WhatIsGEO />
          <Services />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <Contact />
          <ChatWidget />
        </>
      } />

      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Protected client portal – all sub-routes use PortalLayout */}
      <Route path="/client-portal" element={<PortalLayout />}>
        <Route index element={<Dashboard />} />                {/* default when going to /client-portal */}
        <Route path="user" element={<UserInfo />} />
        <Route path="plan" element={<CurrentPlan />} />
        <Route path="leads" element={<Leads />} />
        <Route path="customers" element={<Customers />} />
        <Route path="tokens" element={<Tokens />} />
        <Route path="coupons" element={<Coupons />} />
        {/* Any unknown sub-path → back to dashboard */}
        <Route path="*" element={<Navigate to="/client-portal" replace />} />
      </Route>

      {/* Catch-all redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;