'use client';

import { Target, Users, FileText, ClipboardCheck, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEdition } from '@/lib/edition-context';
import { siteConfig, anticipatedOutcomes } from '@/lib/content.config';

// Placeholder organizing committee
const organizingCommittee = [
  {
    name: 'Harry Reyes Nieva, PhD, MAS',
    role: 'Founder & General Chair',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Incoming Assistant Professor',
  },
  {
    name: 'Safura Abdool Karim, PhD, LLM',
    role: 'Program Committee',
    affiliation: 'Columbia Mailman SPH, Heilbrunn Department of Population and Family Health',
    title: 'Adjunct Assistant Professor',
  },
  {
    name: 'Delivette Castor, PhD, MPH, MSc',
    role: 'Program Committee',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Assistant Professor of Medical Sciences (in Medicine and in Epidemiology)',
  },
  {
    name: 'Craig Heck, PhD, MPH',
    role: 'Program Committee',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Postdoctoral Research Scientist',
  },
  {
    name: 'Preeti Pathela, DrPH, MPH',
    role: 'Program Committee',
    affiliation: 'NYC Department of Health and Mental Hygiene',
    title: 'Director of Research and Evaluation, Bureau of Sexually Transmitted Infections',
  },
  {
    name: 'Magdalena E. Sobieszczyk, MD, MPH',
    role: 'Program Committee',
    affiliation: 'CUIMC Division of Infectious Diseases',
   title: 'Harold C. Neu Professor of Infectious Diseases and Chief of Infectious Diseases at CUIMC',
  },
  {
    name: 'Jason E. Zucker, MD, MS',
    role: 'Program Committee',
    affiliation: 'CUIMC Division of Infectious Diseases',
    title: 'Assistant Professor of Medicine at CUIMC',
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
              Artificial intelligence and data-driven informatics have the potential to transform 
              how we prevent, diagnose, treat, and monitor infectious diseases. From AI-powered 
              diagnostic tools to predictive models for outbreak detection, these technologies 
              offer unprecedented opportunities to improve public health outcomes.
            </p>
            <p>
              However, realizing this potential requires navigating significant challenges: 
              data quality and availability constraints, siloed expertise across clinical, 
              technical, and public health domains, concerns about algorithmic bias and equity, 
              and the complexities of implementing AI tools in real-world healthcare settings.
            </p>
            <p>
              <strong className="text-foreground">{siteConfig.seriesAcronym}</strong> was created to 
              address these challenges by convening cross-disciplinary stakeholders to advance the 
              responsible adoption of AI and informatics in infectious disease prevention and control. 
              Our symposium series provides a forum for researchers, clinicians, public health 
              professionals, data scientists, and community advocates to share knowledge, discuss 
              ethical considerations, and build collaborations.
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
                allowing for deep exploration of how AI and informatics can address the unique 
                challenges of that area. Previous and future topics may include respiratory viruses, 
                antimicrobial resistance, emerging pathogens, and other pressing public health concerns.
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
              <h3 className="font-semibold mb-2">Health Equity</h3>
              <p className="text-sm text-muted-foreground">
                We are committed to ensuring AI tools benefit all populations and do not 
                exacerbate existing health disparities.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Implementation Focus</h3>
              <p className="text-sm text-muted-foreground">
                We emphasize practical, real-world deployment of AI tools in clinical and 
                public health settings.
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

        {/* Organizing Committee */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Organizing Committee</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {organizingCommittee.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                      <User className="h-6 w-6 text-muted-foreground" />
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

        {/* Host */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Host Institutions</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                {siteConfig.seriesAcronym} {currentEdition.year} is hosted by{' '}
                <strong className="text-foreground">the Division of Infectious Diseases at Columbia University Irving Medical Center (CUIMC)</strong>.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="rounded-lg border bg-muted/30 p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">
            For questions about {siteConfig.seriesAcronym}, contact us at{' '}
            <a
              href={`mailto:${currentEdition.contactEmail}`}
              className="text-primary hover:underline"
            >
              {currentEdition.contactEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
