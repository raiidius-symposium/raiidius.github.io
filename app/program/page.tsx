'use client';

import { useMemo, useState } from 'react';
import { Clock, MapPin, Users, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEdition } from '@/lib/edition-context';
import { getSessionSpeakers, siteConfig, type Session } from '@/lib/content.config';

const formatLabels: Record<string, string> = {
  registration: 'Registration',
  keynote: 'Keynote',
  breakout: 'Breakout',
  panel: 'Panel',
  poster: 'Poster',
  session: 'Session',
  roundtable: 'Roundtable',
  reception: 'Reception',
  break: 'Break',
  lunch: 'Lunch',
  remarks: 'Remarks',
};

const formatColors: Record<string, string> = {
  keynote: 'bg-primary text-primary-foreground',
  panel: 'bg-primary/80 text-primary-foreground',
  breakout: 'bg-accent text-accent-foreground',
  poster: 'bg-secondary text-secondary-foreground',
  session: 'bg-primary/60 text-primary-foreground',
  roundtable: 'bg-primary/70 text-primary-foreground',
  reception: 'bg-muted text-muted-foreground',
  break: 'bg-muted text-muted-foreground',
  lunch: 'bg-muted text-muted-foreground',
  registration: 'bg-muted text-muted-foreground',
  remarks: 'bg-secondary text-secondary-foreground',
};

function SessionCard({ session }: { session: Session }) {
  const { currentEdition } = useEdition();
  const speakers = getSessionSpeakers(currentEdition, session);

  return (
    <div className="relative border-l-4 border-primary/20 py-4 pl-4 transition-colors hover:border-primary/50">
      <div className="mb-2 flex flex-wrap items-start gap-2">
        <Badge className={formatColors[session.format] || 'bg-muted'}>
          {formatLabels[session.format] || session.format}
        </Badge>
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-3 w-3" />
          {session.startTime} - {session.endTime}
        </span>
        {session.location && (
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {session.location}
          </span>
        )}
      </div>
      <h3 className="mb-1 text-lg font-semibold">{session.title}</h3>
      <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{session.description}</p>
      {speakers.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {speakers.map((speaker) => (
            <Badge key={speaker.id} variant="outline" className="text-xs">
              <Users className="mr-1 h-3 w-3" />
              {speaker.name}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

function BreakoutTracksCard() {
  const { currentEdition } = useEdition();

  if (!currentEdition.breakoutTracks.length) return null;

  return (
    <Card className="mt-4 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Breakout Session Tracks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentEdition.breakoutTracks.map((track) => (
          <div key={track.id} className="border-l-2 border-accent pl-3">
            <div className="mb-1 flex items-center gap-2">
              <Badge variant="outline" className="text-xs font-mono">
                Track {track.label}
              </Badge>
              <span className="text-sm font-medium">{track.title}</span>
            </div>
            <p className="text-xs text-muted-foreground">{track.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function ProgramPage() {
  const { currentEdition } = useEdition();
  const [activeFilter, setActiveFilter] = useState('all');

  const availableFormats = useMemo(() => {
    const base = ['all'];
    const seen = new Set(currentEdition.agenda.map((session) => session.format));
    const ordered = ['registration','remarks', 'keynote', 'breakout', 'session', 'break','panel', 'lunch', 'roundtable', 'poster', 'reception',  ];
    return [...base, ...ordered.filter((format) => seen.has(format))];
  }, [currentEdition.agenda]);

  const filteredSessions =
    activeFilter === 'all'
      ? currentEdition.agenda
      : currentEdition.agenda.filter((session) => session.format === activeFilter);

  const handlePrint = () => {
    window.print();
  };

  if (!currentEdition.agenda.length) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold">Program</h1>
          <p className="text-muted-foreground">
            The program for {siteConfig.seriesAcronym} {currentEdition.year} will be announced soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            {siteConfig.seriesAcronym} {currentEdition.year} Program
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">
            {currentEdition.dateFormatted} &middot; {currentEdition.timezone}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {currentEdition.venue} &middot; {currentEdition.venueRoom} &middot; {currentEdition.fullAddress}
            </span>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <Tabs value={activeFilter} onValueChange={setActiveFilter}>
            <TabsList className="h-auto flex-wrap gap-1">
              {availableFormats.map((format) => (
                <TabsTrigger key={format} value={format} className="text-xs capitalize">
                  {format === 'all' ? 'All' : formatLabels[format] || format}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <Button variant="outline" size="sm" onClick={handlePrint} className="hidden gap-2 print:hidden md:flex">
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>

        <div className="space-y-2">
          {filteredSessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>

        {(activeFilter === 'all' || activeFilter === 'breakout') && <BreakoutTracksCard />}

        <style jsx global>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .container,
            .container * {
              visibility: visible;
            }
            .container {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .print\:hidden {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
