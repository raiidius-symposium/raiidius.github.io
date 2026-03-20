'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Clock,
  ExternalLink,
  GraduationCap,
  Info,
  Users,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useEdition } from '@/lib/edition-context';
import { getSessionSpeakers, siteConfig, type Speaker } from '@/lib/content.config';

const OHDSI_URL = 'https://www.ohdsi.org/';
const SUMMER_SCHOOL_URL = 'https://www.dbmi.columbia.edu/ohdsi-summer-school/';

const roleLabels: Record<string, string> = {
  keynote: 'Keynote Speaker',
  panelist: 'Panelist',
  'breakout-lead': 'Breakout Lead',
  founder: 'Founder',
  presenter: 'Presenter',
  organizer: 'Organizer',
  moderator: 'Moderator',
  'general-chair': 'General Chair',
  'program-chair': 'Program Chair',
};

const getSpeakerRoles = (speaker: Speaker): string[] =>
  Array.isArray(speaker.role) ? speaker.role : [speaker.role];

const getRoleLabel = (role: string): string => roleLabels[role] || role;

const getSpeakerRoleLabel = (speaker: Speaker): string =>
  getSpeakerRoles(speaker).map(getRoleLabel).join(' • ');

function WorkshopFacultyCard({
  speaker,
  onClick,
}: {
  speaker: Speaker;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-lg border bg-card p-6 text-left transition-all hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          {speaker.headshot ? (
            <img
              src={speaker.headshot}
              alt={speaker.name}
              className="h-20 w-20 rounded-full object-cover"
            />
          ) : (
            <User className="h-10 w-10 text-muted-foreground" />
          )}
        </div>
        <Badge variant="secondary" className="text-xs capitalize">
          {getSpeakerRoleLabel(speaker)}
        </Badge>
      </div>

      <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
        {speaker.name}
      </h3>

      {speaker.title && (
        <p className="text-sm text-muted-foreground">{speaker.title}</p>
      )}

      <p className="mb-3 text-sm font-medium text-primary">{speaker.affiliation}</p>

      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {speaker.bio}
      </p>

      <div className="mt-4 flex flex-wrap gap-1">
        {speaker.keywords.slice(0, 4).map((keyword) => (
          <Badge key={keyword} variant="outline" className="text-xs">
            {keyword}
          </Badge>
        ))}
      </div>
    </button>
  );
}

function WorkshopFacultyModal({
  speaker,
  open,
  onClose,
}: {
  speaker: Speaker | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!speaker) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="sr-only">{speaker.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-muted">
            {speaker.headshot ? (
              <img
                src={speaker.headshot}
                alt={speaker.name}
                className="h-24 w-24 rounded-full object-cover"
              />
            ) : (
              <User className="h-12 w-12 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2 text-xs capitalize">
              {getSpeakerRoleLabel(speaker)}
            </Badge>
            <h2 className="text-xl font-bold">{speaker.name}</h2>
            {speaker.title && (
              <p className="text-sm text-muted-foreground">{speaker.title}</p>
            )}
            <p className="text-sm font-medium text-primary">{speaker.affiliation}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-1">
          {speaker.keywords.map((keyword) => (
            <Badge key={keyword} variant="outline" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function WorkshopsPage() {
  const { currentEdition } = useEdition();
  const [selectedFaculty, setSelectedFaculty] = useState<Speaker | null>(null);

  const workshopSession = currentEdition.agenda.find(
    (session) => session.id === 'ohdsi-workshop'
  );
  const workshopSpeakers = workshopSession
    ? getSessionSpeakers(currentEdition, workshopSession)
    : [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Workshop Tutorial</h1>
        </div>
        {workshopSession ? (
          <section className="mb-12">
            <Card className="overflow-hidden border-primary/20">
              <CardHeader className="bg-muted/30">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured Tutorial
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      {workshopSession.startTime} - {workshopSession.endTime}
                    </span>
                  </div>
                </div>
                <CardTitle className="mt-3 text-2xl">
                  {workshopSession.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {workshopSession.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 pt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <Clock className="h-4 w-4 text-primary" />
                      Format
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Condensed tutorial session for all attendees.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <Users className="h-4 w-4 text-primary" />
                      Focus
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Introduction to OHDSI, open-source tools, and real-world evidence
                      workflows.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      Audience
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Designed for attendees interested in observational health data
                      science at any level.
                    </p>
                  </div>
                </div>

                {workshopSpeakers.length > 0 && (
                  <div>
                    <h2 className="mb-4 text-lg font-semibold">Workshop Faculty</h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {workshopSpeakers.map((speaker) => (
                        <WorkshopFacultyCard
                          key={speaker.id}
                          speaker={speaker}
                          onClick={() => setSelectedFaculty(speaker)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <BookOpen className="h-5 w-5 text-primary" />
                        About OHDSI
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Learn more about the Observational Health Data Sciences and
                        Informatics (OHDSI) community, its collaborative network, and
                        its open-source ecosystem.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={OHDSI_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit OHDSI
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        Columbia OHDSI Summer School
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        This tutorial is inspired by a condensed version of the Columbia
                        OHDSI Summer School, which offers immersive training in real-world
                        data and evidence generation.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={SUMMER_SCHOOL_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn About the Summer School
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>
        ) : (
          <section className="mb-12">
            <div className="rounded-lg border bg-muted/30 p-12 text-center">
              <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h2 className="mb-2 text-xl font-semibold">
                Workshop Details Coming Soon
              </h2>
              <p className="text-muted-foreground">
                The tutorial information for {siteConfig.seriesAcronym}{' '}
                {currentEdition.year} will be announced soon.
              </p>
            </div>
          </section>
        )}

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Future Workshop Formats</h2>
          <p className="mb-6 text-muted-foreground">
            Future editions of {siteConfig.seriesAcronym} may include
            concurrent breakout sessions, longer hands-on workshops, or other
            interactive formats.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Technical Workshops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Hands-on coding sessions</li>
                  <li>Tool and platform tutorials</li>
                  <li>Data analysis demonstrations</li>
                  <li>Model development walkthroughs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Breakout Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Parallel topic-focused discussions</li>
                  <li>Small-group interaction</li>
                  <li>Specialized methodological deep dives</li>
                  <li>Community-building across disciplines</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="rounded-lg border border-primary/20 bg-primary/5 p-6">
          <h2 className="mb-3 text-lg font-semibold">Tutorial Participation</h2>
          <p className="text-muted-foreground">
            The OHDSI workshop tutorial is included for all registered attendees.
          </p>
          <div className="mt-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/program">
                View the Full Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <WorkshopFacultyModal
          speaker={selectedFaculty}
          open={!!selectedFaculty}
          onClose={() => setSelectedFaculty(null)}
        />
      </div>
    </div>
  );
}