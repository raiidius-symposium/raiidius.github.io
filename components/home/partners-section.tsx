'use client';

import { useEdition } from '@/lib/edition-context';
import { Building2 } from 'lucide-react';

export function PartnersSection() {
  const { currentEdition } = useEdition();

  if (!currentEdition.partners.length && !currentEdition.sponsorName) return null;

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Partners */}
          {currentEdition.partners.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
                Partners
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentEdition.partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex flex-col items-center rounded-lg border bg-card p-6 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{partner.shortName || partner.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sponsor Acknowledgement */}
          {currentEdition.sponsorName && (
            <div className="rounded-lg border bg-card p-6 text-center md:p-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                This Year With Grant Support From
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                {currentEdition.sponsorName}
              </h3>
              {currentEdition.sponsorUrl && (
                <a
                  href={currentEdition.sponsorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-primary hover:underline"
                >
                  Learn more
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
