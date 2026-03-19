'use client';

import Link from 'next/link';
import { Calendar, Clock, MapPin, CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEdition } from '@/lib/edition-context';
import { siteConfig } from '@/lib/content.config';
import { downloadICSFile } from '@/lib/calendar';

export function HeroSection() {
  const { currentEdition } = useEdition();

  const handleAddToCalendar = () => {
    if (currentEdition.isActive) {
      downloadICSFile(currentEdition);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.03),transparent_50%)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Title */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-primary md:text-7xl">
            {siteConfig.seriesAcronym}
          </h1>
          
          {/* Tagline */}
<p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed max-w-3xl mx-auto">
  <span>
    <strong className="font-semibold text-foreground">R</strong>esponsible{' '}
    <strong className="font-semibold text-foreground">AI</strong> for{' '}
    <strong className="font-semibold text-foreground">I</strong>nfectious{' '}
    <strong className="font-semibold text-foreground">D</strong>isease
  </span>
  <br />
  <span>
    <strong className="font-semibold text-foreground">I</strong>ntervention,{' '}
    <strong className="font-semibold text-foreground">U</strong>nderstanding, &amp;{' '}
    <strong className="font-semibold text-foreground">S</strong>urveillance
  </span>
</p>

          {/* Edition Badge */}
          <div className="mb-8 flex justify-center">
            <Badge 
              variant="outline" 
              className="px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5"
            >
              <span className="text-primary">{siteConfig.seriesAcronym} {currentEdition.year}</span>
              <span className="mx-2 text-muted-foreground">|</span>
              <span className="text-muted-foreground">Theme: {currentEdition.themeShortTitle}</span>
            </Badge>
          </div>

          {/* Event Details */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{currentEdition.dateFormatted}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{currentEdition.timezone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{currentEdition.venueRoom} &middot; {currentEdition.fullAddress}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {currentEdition.isActive ? (
              <>
<Button asChild size="lg" className="min-w-[160px]">
  <Link href="/register">
    Register Now
  </Link>
</Button>
<Button asChild variant="outline" size="lg" className="min-w-[200px]">
  <Link href="/abstracts">
    Submit Abstract
  </Link>
</Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  onClick={handleAddToCalendar}
                  className="gap-2"
                >
                  <CalendarPlus className="h-4 w-4" />
                  Add to Calendar
                </Button>
              </>
            ) : (
              <Button disabled size="lg">
                Coming {currentEdition.dateFormatted}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
