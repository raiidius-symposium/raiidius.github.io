'use client';

import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEdition } from '@/lib/edition-context';

const roleLabels: Record<string, string> = {
  keynote: 'Keynote Speaker',
  panelist: 'Panelist',
  'breakout-lead': 'Breakout Lead',
  presenter: 'Presenter',
  organizer: 'Organizer',
  moderator: 'Moderator',
  'general-chair': 'General Chair',
  'program-chair': 'Program Chair',
};

const roleOrder = [
  'general-chair',
  'program-chair',
  'organizer',
  'keynote',
  'panelist',
  'breakout-lead',
  'presenter',
  'moderator',
];

const getSpeakerRoles = (speaker: { role: string | string[] }): string[] =>
  Array.isArray(speaker.role) ? speaker.role : [speaker.role];

const getPrimaryRole = (speaker: { role: string | string[] }): string =>
  getSpeakerRoles(speaker).sort(
    (a, b) => roleOrder.indexOf(a) - roleOrder.indexOf(b)
  )[0];

const getSpeakerRoleLabel = (speaker: { role: string | string[] }): string =>
  getSpeakerRoles(speaker)
    .map((role) => roleLabels[role] || role)
    .join(' • ');

export function SpeakersPreviewSection() {
  const { currentEdition } = useEdition();

  // Show up to 6 speakers, prioritizing keynotes and panelists
  const featuredSpeakers = [...currentEdition.speakers]
  .sort((a, b) => roleOrder.indexOf(getPrimaryRole(a)) - roleOrder.indexOf(getPrimaryRole(b)))
  .slice(0, 6);

  if (!featuredSpeakers.length) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
                Featured Speakers
              </h2>
              <p className="text-muted-foreground">
                Learn from leading experts in AI, infectious diseases, and public health.
              </p>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/speakers">
                View All Speakers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    {speaker.headshot ? (
                      <img
                        src={speaker.headshot}
                        alt={speaker.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs capitalize">
                    {getSpeakerRoleLabel(speaker)}
                  </Badge>
                </div>
                <h3 className="mb-1 font-semibold">{speaker.name}</h3>
                {speaker.title && (
                  <p className="text-sm text-muted-foreground">{speaker.title}</p>
                )}
                <p className="mb-3 text-sm text-primary">{speaker.affiliation}</p>
                <div className="flex flex-wrap gap-1">
                  {speaker.keywords.slice(0, 3).map((keyword) => (
                    <Badge key={keyword} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
