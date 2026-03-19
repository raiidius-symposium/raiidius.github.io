'use client';

import Link from 'next/link';
import { Ticket, Users, GraduationCap, Accessibility, FileText, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useEdition } from '@/lib/edition-context';
import { siteConfig } from '@/lib/content.config';

const registrationOptions = [
  {
    id: 'general',
    name: 'General Registration',
    description: 'Attendance is free and includes access to the full symposium program.',
    features: [
      'All keynotes and sessions',
      'OHDSI workshop tutorial',
      'Poster session access',
      'Breakfast and lunch',
      'Networking reception',
      'Digital program materials',
    ],
    icon: Users,
  },
  {
    id: 'trainee',
    name: 'Trainee Registration',
    description: 'Trainees are especially encouraged to attend and participate in the poster session.',
    features: [
      'All keynotes and sessions',
      'OHDSI workshop tutorial',
      'Poster session access',
      'Breakfast and lunch',
      'Networking reception',
      'Digital program materials',
      'Poster presentation opportunities',
    ],
    icon: GraduationCap,
    highlighted: true,
  },
];

export default function RegisterPage() {
  const { currentEdition } = useEdition();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Register for {siteConfig.seriesAcronym} {currentEdition.year}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join us for a day of learning, discussion, and networking focused on
            {' '}responsible AI for {currentEdition.themeShortTitle}.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{currentEdition.dateFormatted}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{currentEdition.venue}, {currentEdition.city}</span>
          </div>
        </div>

        <div className="mb-12 rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
          <Ticket className="mx-auto mb-4 h-12 w-12 text-primary" />
          {currentEdition.isActive && currentEdition.registrationUrl ? (
            <>
              <h2 className="mb-2 text-xl font-semibold">Reserve Your Spot</h2>
              <p className="mb-6 text-muted-foreground">
                Attendance is free. Advance registration is encouraged.
              </p>
<Button asChild size="lg" className="gap-2">
  <a
    href={currentEdition.registrationUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    Register Now
    <ArrowRight className="h-4 w-4" />
  </a>
</Button>
</Button>
            </>
          ) : (
            <>
              <h2 className="mb-2 text-xl font-semibold">Registration Coming Soon</h2>
              <p className="text-muted-foreground">
                Registration for {siteConfig.seriesAcronym} {currentEdition.year} will open soon.
                {' '}Sign up for our mailing list to be notified.
              </p>
            </>
          )}
        </div>

        <section className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold">Registration Overview</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {registrationOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card
                  key={option.id}
                  className={option.highlighted ? 'border-primary/50 shadow-md' : ''}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="h-8 w-8 text-primary" />
                      {option.highlighted && (
                        <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{option.name}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">Free</span>
                      <span className="text-muted-foreground"> / attendee</span>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">What's Included</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              'Full day of sessions',
              'OHDSI workshop tutorial',
              'Continental breakfast',
              'Boxed lunch',
              'Coffee breaks',
              'Networking reception',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border p-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Alert className="border-primary/20">
            <Accessibility className="h-4 w-4" />
            <AlertDescription>
              <strong className="text-foreground">Accessibility Accommodations:</strong>{' '}
              We are committed to making {siteConfig.seriesAcronym} accessible to all attendees.
              {' '}If you require specific accommodations (e.g., sign language interpretation,
              dietary restrictions, mobility assistance), please indicate this during
              registration or contact us at{' '}
              <a href={`mailto:${currentEdition.contactEmail}`} className="text-primary hover:underline">
                {currentEdition.contactEmail}
              </a>
              .
            </AlertDescription>
          </Alert>
        </section>

        <section className="mb-12">
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold">Code of Conduct</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    All {siteConfig.seriesAcronym} participants are expected to adhere to our
                    {' '}Code of Conduct, which promotes a professional, respectful, and inclusive
                    {' '}environment for all attendees.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/code-of-conduct">Read Code of Conduct</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold">Attendance Policy</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Attendance at {siteConfig.seriesAcronym} {currentEdition.year} is free.
            </p>
            <p>
              Advance registration is encouraged so we can plan seating, materials, and catering.
            </p>
            <p>
              If your plans change after registering, please let us know so we can release your spot to another attendee.
            </p>
          </div>
        </section>

        <section className="rounded-lg border bg-muted/30 p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">Questions About Registration?</h2>
          <p className="text-muted-foreground">
            Contact us at{' '}
            <a href={`mailto:${currentEdition.contactEmail}`} className="text-primary hover:underline">
              {currentEdition.contactEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
