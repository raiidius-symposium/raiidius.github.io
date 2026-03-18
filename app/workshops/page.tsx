'use client';

import { Users, Clock, BarChart3, BookOpen, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useEdition } from '@/lib/edition-context';
import { siteConfig } from '@/lib/content.config';

export default function WorkshopsPage() {
  const { currentEdition } = useEdition();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Workshop Tutorial
          </h1>
          <p className="text-lg text-muted-foreground">
            Deep-dive sessions for hands-on learning and focused discussions.
          </p>
        </div>

        {/* Note about 2026 format */}
        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>{siteConfig.seriesAcronym} {currentEdition.year}</strong> features an OHDSI workshop tutorial session.
          </AlertDescription>
        </Alert>

        {/* Breakout Sessions for 2026 */}
        {currentEdition.breakoutTracks.length > 0 ? (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">
              {currentEdition.year} Breakout Sessions
            </h2>
            <p className="mb-6 text-muted-foreground">
              Choose from three parallel tracks during the breakout session block 
              (10:30 AM - 11:45 AM). Each track offers a focused exploration of 
              key topics in AI and informatics for {currentEdition.themeShortTitle}.
            </p>

            <div className="space-y-6">
              {currentEdition.breakoutTracks.map((track) => (
                <Card key={track.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary text-primary-foreground font-mono text-sm px-3 py-1">
                        Track {track.label}
                      </Badge>
                      <CardTitle className="text-xl">{track.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-base leading-relaxed">
                      {track.description}
                    </CardDescription>
                    
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>75 minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Interactive format</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BarChart3 className="h-4 w-4" />
                        <span>All levels welcome</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ) : (
          <section className="mb-12">
            <div className="rounded-lg border bg-muted/30 p-12 text-center">
              <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h2 className="mb-2 text-xl font-semibold">Coming Soon</h2>
              <p className="text-muted-foreground">
                Workshop and breakout session details for {siteConfig.seriesAcronym} {currentEdition.year} 
                will be announced soon.
              </p>
            </div>
          </section>
        )}

        {/* Future Workshops Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Future Workshop Formats</h2>
          <p className="mb-6 text-muted-foreground">
            Future editions of {siteConfig.seriesAcronym} may include extended workshop formats:
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
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
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Professional Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Grant writing for AI research</li>
                  <li>Responsible AI frameworks</li>
                  <li>Collaboration strategies</li>
                  <li>Implementation best practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Registration Note */}
        <section className="rounded-lg border bg-primary/5 border-primary/20 p-6">
          <h2 className="mb-3 text-lg font-semibold">Breakout Session Registration</h2>
          <p className="text-muted-foreground">
            Breakout session selection will be available during on-site registration. 
            Sessions are available on a first-come, first-served basis. We recommend 
            arriving early to secure your preferred track.
          </p>
        </section>
      </div>
    </div>
  );
}
