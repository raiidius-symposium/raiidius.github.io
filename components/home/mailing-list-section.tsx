'use client';

import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/lib/content.config';

export function MailingListSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');





  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder handler - integrate with your email service
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxr-fkIRtfNQCesb2ZTP2_HdZMz-df88BP9YPFWiuvn7BfkRgYigv35h9sMHt7wPn-z/exec';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append('email', email);

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.ok) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  } catch {
    setStatus('error');
  }
};

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
              <Mail className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
            Stay Updated
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Subscribe to the {siteConfig.seriesAcronym} mailing list for announcements about 
            registration, deadlines, and future editions.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-primary-foreground text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button 
              type="submit" 
              variant="secondary" 
              className="h-11 gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

{status === 'error' && (
  <p className="mt-4 text-sm text-primary-foreground/90">
    There was a problem subscribing. Please try again.
  </p>
)}

          {status === 'success' && (
            <p className="mt-4 text-sm text-primary-foreground/90">
              Thank you for subscribing! We&apos;ll be in touch.
            </p>
          )}

          <p className="mt-4 text-xs text-primary-foreground/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
