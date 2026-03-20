import { Metadata } from 'next'
import { editions } from '@/lib/content.config'
import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Editions | RAIIDIUS',
  description: 'Explore past, current, and future RAIIDIUS symposium editions',
}

export default function EditionsPage() {
  return (
    <main className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">RAIIDIUS Editions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring responsible AI and informatics across infectious diseases. Each year, RAIIDIUS focuses on a different infectious disease domain.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {editions.map((edition) => {
              const isCurrent = edition.year === 2026
              return (
                <Card
                  key={edition.year}
                  className={`p-8 flex flex-col ${
                    isCurrent ? 'ring-2 ring-primary bg-accent' : 'hover:shadow-lg transition-shadow'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-2">
                        RAIIDIUS {edition.year}
                      </h2>
                      {isCurrent && (
                        <Badge className="bg-primary text-white">Current Edition</Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow mb-6">
                    {edition.themeTitle && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Theme
                        </p>
                        <p className="text-lg font-semibold text-foreground mt-1">
                          {edition.themeTitle}
                        </p>
                      </div>
                    )}

                    {edition.themeDescription && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Description
                        </p>
                        <p className="text-foreground mt-1 leading-relaxed">
                          {edition.themeDescription}
                        </p>
                      </div>
                    )}

                    {edition.date && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Date
                        </p>
                        <p className="text-foreground mt-1">
                          {new Date(edition.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    )}

                    {edition.venue && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Venue
                        </p>
                        <p className="text-foreground mt-1">{edition.venue}</p>
                        {edition.address && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {edition.address}, {edition.city}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {edition.year === 2026 ? (
                      <>
                        <Link href="/" className="flex-1">
                          <Button variant="default" className="w-full">
                            View Program
                          </Button>
                        </Link>
                        <Link href="/register" className="flex-1">
                          <Button variant="outline" className="w-full">
                            Register
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <Button variant="outline" disabled className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">About the RAIIDIUS Series</h3>
            <p className="text-foreground mb-4 leading-relaxed">
              RAIIDIUS (Responsible AI for Infectious Disease Intervention, Understanding, & Surveillance)
              is an annual symposium series dedicated to advancing responsible artificial intelligence and
              informatics across biological discovery, translational research, diagnostics, clinical care,
              surveillance, and treatment in infectious diseases.
            </p>
            <p className="text-foreground mb-4 leading-relaxed">
              Each year, we convene multidisciplinary researchers, clinicians, public health leaders,
              technologists, and early-career professionals to explore how AI can generate new biological
              insight, accelerate translational research, and address real-world challenges in specific
              infectious disease domains. Our focus on responsible innovation ensures that technological
              advances are grounded in scientific rigor, ethical reflection, and meaningful real-world impact.
            </p>
            <p className="text-foreground leading-relaxed">
              Whether your interest is in respiratory viruses, sexually transmitted infections,
              antimicrobial resistance, emerging pathogens, or related areas of infectious disease
              science, RAIIDIUS brings together a community working across biological discovery,
              translational research, clinical care, and public health.
            </p>
          </div>
        </div>
      </Container>
    </main>
  )
}
