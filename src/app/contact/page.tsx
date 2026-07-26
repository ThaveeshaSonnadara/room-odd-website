import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { LoginButtons } from '@/components/auth/LoginButtons';
import { GoogleCalendarSync } from '@/components/calendar/GoogleCalendarSync';

import { useState } from 'react';

export default function ContactPage() {
  const { isAuthenticated, user, isLoading } = useAuth();

  // Local form state
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: user?.name, email: user?.email, message }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      setStatus('sent');
      setMessage('');
    } catch (err:any) {
      setError(err.message);
      setStatus('error');
    }
  };

  if (isLoading) {
    return <p className="p-4">Loading…</p>;
  }

  if (!isAuthenticated) {
    return (
      <motion.div className="p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-display mb-4">Contact Us</h2>
        <p className="mb-4">Please sign in to send a message.</p>
        <LoginButtons />
      </motion.div>
    );
  }

  return (
    <motion.div className="p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-display mb-4">Contact Us</h2>
      <p className="mb-4">Welcome, {user?.name || 'valued client'}! Use the form below to book a consultation.</p>
      {/* Simple placeholder form – will be enhanced later with Resend email handling */}
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-muted rounded-md p-2"
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
      {status === 'sent' && (
        <>
          <p className="mt-2 text-green-600">Message sent successfully!</p>
          <GoogleCalendarSync />
        </>
      )}
      {status === 'error' && <p className="mt-2 text-red-600">{error}</p>}
    </motion.div>
  );
}
