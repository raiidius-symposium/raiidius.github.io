'use client';

import { Handshake, Building2, HeartHandshake, Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEdition } from '@/lib/edition-context';
import { siteConfig } from '@/lib/content.config';

export default function SponsorsPage() {
  const { currentEdition } = useEdition();

  const currentSponsors = [
    {
      name: 'CUIMC Division of Infectious Diseases',
      description:
        'The Division of Infectious Diseases at Columbia University Irving Medical Center serves as the host institution for RAIIDIUS. The division is devoted to excellence in patient care, research, and teaching, and to developing the next generation of leaders in academic medicine and public health.',
      url: 'https://www.infectiousdiseases.cuimc.columbia.edu/',
      category: 'Host',
    },
    {
      name: 'AI@VP&S Initiative',
      description:
        'The AI@VP&S Initiative at Columbia Vagelos College of Physicians and Surgeons (VP&S) spearheads innovative, safe, and responsible AI through collaborative research, transformative education, bi-directional community engagement, and patient-centered and clinician-supportive approaches.',
      url: 'https://www.vagelos.columbia.edu/departments-centers/ai-vp-s-initiative',
      category: 'Sponsor',
    },
    {
      name: 'American Sexually Transmitted Diseases Association (ASTDA)',
      description:
        'ASTDA supports the inaugural RAIIDIUS symposium and its mission to advance responsible AI and informatics for infectious diseases. ASTDA aims to foster scientific knowledge, develop leadership, and champion practice in the field of sexually transmitted infections. ASTDA membership includes physicians, research scientists, nurses, public health professionals, and other STD investigators.',
      url: 'https://www.astda.org/',
      category: 'Sponsor',
    },
  ];

  const supportAreas = [
    'Symposium venue and operations',
    'Trainee and early-career participation',
    'Poster session and networking reception',
    'Workshop and invited speaker programming',
    'Meals, materials, and attendee experience',
    'Dissemination of symposium outputs and future growth of the series',
  ];

  const sponsorBenefits = [
    'Visibility among interdisciplinary attendees from academia, healthcare, public health, and technology',
    'Association with responsible AI and infectious disease innovation',
    'Support for trainee development and scientific exchange',
    'Recognition on the symposium website and event materials',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Handshake className="h-7 w-7 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Sponsors</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            RAIIDIUS welcomes sponsors and partners who want to help advance responsible AI and
            informatics for infectious diseases across biological discovery, translational research,
            clinical care, and public health.
          </p>
        </div>

        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <h2 className="mb-3 text-xl font-semibold">Why Sponsor RAIIDIUS?</h2>
              <p className="leading-relaxed text-muted-foreground">
                {siteConfig.seriesAcronym} is an annual symposium designed to bring
                together researchers, clinicians, public health professionals, trainees, and
                technologists working at the intersection of AI, informatics, and infectious
                disease science. Sponsorship helps support scientific exchange, cross-disciplinary
                collaboration, trainee development, and responsible innovation across the full
                spectrum of infectious disease research and action.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Current Sponsors and Supporters</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentSponsors.map((sponsor) => (
              <Card key={sponsor.name}>
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary">{sponsor.category}</div>
                  </div>
                  <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                  <CardDescription>{sponsor.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Learn more
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <HeartHandshake className="h-5 w-5 text-primary" />
                  What Sponsorship Supports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {supportAreas.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Handshake className="h-5 w-5 text-primary" />
                  Why Support the Symposium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {sponsorBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h2 className="mb-3 text-xl font-semibold">Interested in Sponsoring {siteConfig.seriesAcronym}?</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We welcome support from academic centers, foundations, nonprofit organizations,
                public agencies, and industry partners whose missions align with responsible
                innovation in infectious diseases. Sponsorship opportunities can be tailored based
                on level of support and shared goals.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                To learn more about supporting {siteConfig.seriesAcronym} {currentEdition.year} or future symposia,
                please contact {currentEdition.contactEmail}.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-lg border bg-primary/5 p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">Get in Touch About Sponsorship</h2>
          <p className="mb-4 text-muted-foreground">
            We would be glad to share more about sponsorship opportunities for {siteConfig.seriesAcronym}.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="gap-2">
              <a href={`mailto:${currentEdition.contactEmail}?subject=RAIIDIUS Sponsorship Inquiry`}>
                <Mail className="h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
