'use client';

import { useState, useMemo } from 'react';
import { Search, User, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useEdition } from '@/lib/edition-context';
import { siteConfig, type Speaker } from '@/lib/content.config';

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

const roleOrder = [
  'founder',
  'general-chair',
  'program-chair',
  'organizer',
  'keynote',
  'presenter',
  'moderator',
  'panelist',
  'breakout-lead',
];
const getSpeakerRoles = (speaker: Speaker): string[] =>
  Array.isArray(speaker.role) ? speaker.role : [speaker.role];

const getRoleLabel = (role: string): string => roleLabels[role] || role;

const getSpeakerRoleLabel = (speaker: Speaker): string =>
  getSpeakerRoles(speaker).map(getRoleLabel).join(' • ');

const getPrimaryRole = (speaker: Speaker): string =>
  getSpeakerRoles(speaker).sort(
    (a, b) => roleOrder.indexOf(a) - roleOrder.indexOf(b)
  )[0];

function SpeakerCard({ speaker, onClick }: { speaker: Speaker; onClick: () => void }) {
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
      <h3 className="mb-1 text-lg font-semibold group-hover:text-primary transition-colors">
        {speaker.name}
      </h3>
      {speaker.title && (
        <p className="text-sm text-muted-foreground">{speaker.title}</p>
      )}
      <p className="mb-3 text-sm font-medium text-primary">{speaker.affiliation}</p>
      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
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

function SpeakerModal({ speaker, open, onClose }: { speaker: Speaker | null; open: boolean; onClose: () => void }) {
  if (!speaker) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="sr-only">{speaker.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6">
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
          <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>
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

export default function SpeakersPage() {
  const { currentEdition } = useEdition();
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const availableRoles = useMemo(() => {
  const roles = new Set(
    currentEdition.speakers.flatMap((s) => getSpeakerRoles(s))
  );
  return roleOrder.filter((r) => roles.has(r));
}, [currentEdition.speakers]);

  const filteredSpeakers = useMemo(() => {
    return currentEdition.speakers
      .filter((speaker) => {
        const matchesSearch =
          searchQuery === '' ||
          speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          speaker.affiliation.toLowerCase().includes(searchQuery.toLowerCase()) ||
          speaker.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesRole =
  !roleFilter || getSpeakerRoles(speaker).includes(roleFilter);
        return matchesSearch && matchesRole;
      })
      .sort(
  (a, b) =>
    roleOrder.indexOf(getPrimaryRole(a)) - roleOrder.indexOf(getPrimaryRole(b))
);
  }, [currentEdition.speakers, searchQuery, roleFilter]);

  if (!currentEdition.speakers.length) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold">Speakers</h1>
          <p className="text-muted-foreground">
            Speakers for {siteConfig.seriesAcronym} {currentEdition.year} will be announced soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Speakers</h1>
          <p className="text-lg text-muted-foreground">
            Meet the experts presenting at {siteConfig.seriesAcronym} {currentEdition.year}.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, affiliation, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={roleFilter === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setRoleFilter(null)}
            >
              All
            </Button>
            {availableRoles.map((role) => (
              <Button
                key={role}
                variant={roleFilter === role ? 'default' : 'outline'}
                size="sm"
                onClick={() => setRoleFilter(role === roleFilter ? null : role)}
                className="capitalize"
              >
                {roleLabels[role] || role}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-muted-foreground">
          Showing {filteredSpeakers.length} of {currentEdition.speakers.length} speakers
        </p>

        {/* Speakers Grid */}
        {filteredSpeakers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onClick={() => setSelectedSpeaker(speaker)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border bg-muted/30 p-12 text-center">
            <p className="text-muted-foreground">No speakers match your search criteria.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery('');
                setRoleFilter(null);
              }}
              className="mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Speaker Detail Modal */}
        <SpeakerModal
          speaker={selectedSpeaker}
          open={!!selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      </div>
    </div>
  );
}
