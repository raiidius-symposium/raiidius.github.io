'use client';

import { Target, Users, FileText, ClipboardCheck, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEdition } from '@/lib/edition-context';
import { siteConfig, anticipatedOutcomes } from '@/lib/content.config';
import { PartnersSection } from '@/components/home/partners-section';

// Placeholder organizing committee
const organizingCommittee = [
  {
    name: 'Harry Reyes Nieva, PhD, MAS',
    role: 'Founder & Committee Chair',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Postdoctoral Research Scientist',
    headshot: '/speakers/harry-reyes-nieva.jpg',
  },
  {
    name: 'Delivette Castor, PhD, MPH, MSc',
    role: 'Committee Member',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Assistant Professor of Medical Sciences (in Medicine and in Epidemiology)',
    headshot: '/speakers/delivette-castor.jpg',
  },
  {
    name: 'Craig Heck, PhD, MPH',
    role: 'Committee Member',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Postdoctoral Research Scientist',
    headshot: '/speakers/craig-heck.jpg',
  },
  {
    name: 'Magdalena E. Sobieszczyk, MD, MPH',
    role: 'Committee Member',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Harold C. Neu Professor of Infectious Diseases and Chief of Infectious Diseases at CUIMC',
    headshot: '/speakers/magdalena-sobieszczyk.jpg',
  },
  {
    name: 'Michael T. Yin, MD, MPH',
    role: 'Committee Member',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Professor of Medicine',
    headshot: '/speakers/michael-yin.jpg',
  },
  {
    name: 'Jason E. Zucker, MD, MS',
    role: 'Committee Member',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Assistant Professor of Medicine at CUIMC',
    headshot: '/speakers/jason-zucker.jpg',
  },
];

const outcomeIcons: Record<string, typeof Target> = {
  'Cross-Disciplinary Dialogue': Users,
  'Early-Career Development': Target,
  'White Paper & Recommendations': FileText,
  'Community Building': ClipboardCheck,
};

export default function AboutPage() {
  const { currentEdition } = useEdition();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            About {siteConfig.seriesAcronym}
          </h1>
          <p className="text-lg text-muted-foreground">
            {siteConfig.seriesName}
          </p>
        </div>

        {/* Mission & Rationale */}

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Artificial intelligence and informatics have the potential to transform
              how we study, prevent, diagnose, treat, and monitor infectious diseases. From
              AI-powered diagnostic tools and predictive models for outbreak detection to
              biomarker discovery, host–pathogen modeling, and translational research, these
              technologies offer unprecedented opportunities to accelerate scientific discovery
              and improve clinical and public health outcomes.
            </p>
            <p>
              However, realizing this potential requires navigating significant challenges:
              data quality and availability constraints; siloed expertise across biological,
              translational, clinical, technical, and public health domains; concerns about
              model limitations and fairness; and the complexities of moving AI-enabled
              insights from discovery to real-world impact.
            </p>
            <p>
              Infectious disease research increasingly spans molecular, experimental,
              translational, clinical, and population-level data. RAIIDIUS recognizes that AI
              and informatics can help connect these layers to generate new biological insight,
              improve mechanistic understanding, and accelerate the translation of discoveries
              into diagnostics, therapeutics, and prevention strategies.
            </p>
            <p>
              <strong className="text-foreground">{siteConfig.seriesAcronym}</strong> was created to
              address these challenges by convening cross-disciplinary stakeholders to advance the
              responsible use of AI and informatics across the full spectrum of infectious disease
              research and action. Our symposium series provides a forum for researchers,
              clinicians, public health professionals, computational scientists, and other
              collaborators to share knowledge, discuss ethical considerations, and build
              partnerships spanning biological discovery, translational science, clinical care,
              and public health practice.
            </p>
          </div>
        </section>

        {/* Annual Series */}
        <section className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="mb-3 text-xl font-semibold">An Annual Series</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each year, {siteConfig.seriesAcronym} focuses on a specific infectious disease domain,
                allowing for deep exploration of how AI and informatics can advance discovery,
                translation, and real-world impact in that area. Future topics may include
                respiratory viruses, antimicrobial resistance, emerging pathogens, cancer and
                infectious diseases, women’s health, and other areas where biological,
                translational, clinical, and public health perspectives intersect.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary">2026: {currentEdition.themeTitle}</Badge>
                <Badge variant="outline">2027: Theme TBD</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Anticipated Outcomes */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Anticipated Outcomes & Deliverables</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {anticipatedOutcomes.map((outcome) => {
              const Icon = outcomeIcons[outcome.title] || Target;
              return (
                <Card key={outcome.title}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {outcome.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{outcome.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Our Values</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Responsible AI</h3>
              <p className="text-sm text-muted-foreground">
                We prioritize ethical considerations, transparency, and accountability in AI 
                development and deployment.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Healthcare For All</h3>
              <p className="text-sm text-muted-foreground">
                We are committed to ensuring that AI and informatics advance scientific discovery
                and real-world benefit across populations, settings, and stages of research and care.
              </p>
            </div>
            <div className="rounded-lg border p-4">
             <h3 className="mb-2 font-semibold">Discovery to Impact</h3>
             <p className="text-sm text-muted-foreground">
              We emphasize the full continuum from biological and translational discovery to
              practical implementation in clinical and public health settings.
             </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                We foster partnerships across disciplines, institutions, and communities 
                to advance shared goals.
              </p>
            </div>
          </div>
        </section>

        {/* Host */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Host Institution</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                {siteConfig.seriesAcronym} {currentEdition.year} is hosted by the{' '}
                <strong className="text-foreground">Division of Infectious Diseases at Columbia University Irving Medical Center</strong>.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Organizing Committee */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Organizing Committee</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {organizingCommittee.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-muted">
  {member.headshot ? (
    <img
      src={member.headshot}
      alt={member.name}
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <User className="h-6 w-6 text-muted-foreground" />
    </div>
  )}
</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{member.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {member.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{member.title}</p>
                      <p className="text-sm text-primary">{member.affiliation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
