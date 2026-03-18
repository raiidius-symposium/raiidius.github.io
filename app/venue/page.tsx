'use client';

import { MapPin, Train, Bus, Car, Accessibility, Hotel, Utensils, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEdition } from '@/lib/edition-context';
import { siteConfig } from '@/lib/content.config';

export default function VenuePage() {
  const { currentEdition } = useEdition();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Venue & Travel
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about getting to {siteConfig.seriesAcronym} {currentEdition.year}.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border h-48 md:h-56">
            <img
              src="/raiidius/vps-vec-exterior.jpg"
              alt="Exterior view of the Vagelos Education Center"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Venue Details */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {currentEdition.venue}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    {currentEdition.venueRoom}<br />
                    {currentEdition.address}<br />
                    {currentEdition.city}, {currentEdition.state}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a
                        href={currentEdition.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(currentEdition.fullAddress)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">About the Venue</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Roy and Diana Vagelos Education Center is a state-of-the-art medical education facility 
                    at Columbia University Irving Medical Center. The building features modern 
                    lecture halls, collaboration spaces, and full accessibility accommodations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Map Placeholder */}
        <section className="mb-12">
          <div className="aspect-video rounded-lg border bg-muted/30 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">
                Interactive map coming soon
              </p>
              <Button asChild variant="outline" size="sm">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentEdition.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Getting Here</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Train className="h-5 w-5 text-primary" />
                  By Subway
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  <strong>1 Train:</strong> 168th Street station (walk north on Fort Washington Ave)
                </p>
                <p>
                  <strong>A Train:</strong> 168th Street station (transfer to 1 or walk)
                </p>
                <p className="text-xs">
                  ~10 minute walk from the station to the venue.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bus className="h-5 w-5 text-primary" />
                  By Bus
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  <strong>M4 Bus:</strong> Stops on Fort Washington Ave
                </p>
                <p>
                  <strong>M98, M100:</strong> Stops nearby on Broadway
                </p>
                <p className="text-xs">
                  Multiple bus routes serve the Washington Heights area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  By Car
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  <strong>Parking:</strong> Limited street parking; garage parking available nearby
                </p>
                <p className="text-xs">
                  We recommend public transportation when possible. Rideshare services drop off on Haven Ave.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Campus Navigation */}
        <section className="mb-12">
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Campus Navigation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Vagelos Education Center is located on Haven Avenue, between 171st and 172nd Streets. 
                Enter through the main entrance on Haven Ave. Room VEC 401 is on the 4th floor; 
                elevators and stairs are available in the main lobby. Signs will direct you to 
                the {siteConfig.seriesAcronym} registration desk on the day of the event.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Accessibility */}
        <section className="mb-12">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-primary" />
                Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>
                The Vagelos Education Center is fully accessible. Features include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Wheelchair-accessible entrances and elevators</li>
                <li>Accessible restrooms on all floors</li>
                <li>Hearing loop systems in lecture halls</li>
                <li>Reserved seating for attendees with mobility needs</li>
              </ul>
              <p className="pt-2">
                If you require specific accommodations, please indicate this during registration 
                or contact us at{' '}
                <a href={`mailto:${currentEdition.contactEmail}`} className="text-primary hover:underline">
                  {currentEdition.contactEmail}
                </a>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Accommodations */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Nearby Accommodations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Hotel className="h-5 w-5 text-primary" />
                  Hotels
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <div>
                  <p className="font-medium text-foreground">The Edge Hotel</p>
                  <p>514 W 168th St, New York, NY</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Aloft Harlem</p>
                  <p>2296 Frederick Douglass Blvd, New York, NY</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Hotels in Midtown</p>
                  <p>~30 min subway ride to venue</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Dining
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  Washington Heights offers diverse dining options. Broadway and Fort Washington Avenue 
                  have numerous restaurants within walking distance.
                </p>
                <p>
                  <strong>Note:</strong> Lunch will be provided at the symposium. 
                  The evening reception will include light refreshments.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-lg border bg-muted/30 p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">Questions About the Venue?</h2>
          <p className="text-muted-foreground">
            Contact us at{' '}
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
