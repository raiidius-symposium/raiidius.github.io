'use client';

import Link from 'next/link';
import { FileText, Calendar, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useEdition } from '@/lib/edition-context';
import { siteConfig, submissionGuidelines } from '@/lib/content.config';

export default function AbstractsPage() {
  const { currentEdition } = useEdition();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Call for Abstracts
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Submit your research for presentation at {siteConfig.seriesAcronym} {currentEdition.year}.
            We welcome abstracts on AI and informatics applications for infectious disease research.
          </p>
        </div>

        {/* Submit CTA */}
        <div className="mb-12 rounded-lg bg-primary/5 border border-primary/20 p-8 text-center">
          <FileText className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-2 text-xl font-semibold">Ready to Submit?</h2>
          <p className="mb-6 text-muted-foreground">
            Share your work with the {siteConfig.seriesAcronym} community.
          </p>
          {currentEdition.isActive && currentEdition.submissionUrl ? (
            <Button asChild size="lg" className="gap-2">
              <Link href={currentEdition.submissionUrl}>
                Submit Your Abstract
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button disabled size="lg">
              Submissions Not Yet Open
            </Button>
          )}
        </div>

        {/* Topics of Interest */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Topics of Interest</h2>
          <p className="mb-6 text-muted-foreground">
            We welcome submissions aligned with our symposium themes:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {currentEdition.themes.map((theme) => (
              <div
                key={theme.id}
                className="flex items-start gap-3 rounded-lg border p-4"
              >
                <Badge variant="secondary" className="mt-0.5 shrink-0">
                  {theme.id.charAt(0).toUpperCase()}
                </Badge>
                <div>
                  <h3 className="font-medium">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground">{theme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submission Guidelines */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Submission Guidelines</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Presentation Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {submissionGuidelines.formats.map((format) => (
                    <li key={format} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {format}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Abstract Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  <strong>Word Limit:</strong> {submissionGuidelines.wordLimit} words maximum
                </p>
                <p>
                  <strong>Structure:</strong> Background, Methods, Results, Conclusions
                </p>
                <p>
                  <strong>Format:</strong> Plain text, no figures or tables in abstract
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Submission Categories</h2>
          <div className="flex flex-wrap gap-2">
            {submissionGuidelines.categories.map((category) => (
              <Badge key={category} variant="outline" className="text-sm">
                {category}
              </Badge>
            ))}
          </div>
        </section>

        {/* Review Criteria */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Review Criteria</h2>
          <p className="mb-4 text-muted-foreground">
            All submissions undergo peer review. Abstracts are evaluated on:
          </p>
          <ul className="space-y-3">
            {submissionGuidelines.reviewCriteria.map((criterion) => (
              <li key={criterion} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Dates */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Key Dates</h2>
          <div className="space-y-4">
            {currentEdition.importantDates
              .filter((d) => 
                d.label.toLowerCase().includes('abstract') || 
                d.label.toLowerCase().includes('notification') ||
                d.label.toLowerCase().includes('symposium')
              )
              .map((date) => (
                <div
                  key={date.label}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">{date.label}</span>
                  </div>
                  <Badge variant="secondary">{date.date}</Badge>
                </div>
              ))}
          </div>
        </section>

        {/* Trainee Emphasis */}
        <section className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h2 className="mb-3 text-xl font-bold">Trainee Poster Session</h2>
              <p className="text-muted-foreground leading-relaxed">
                We especially encourage submissions from students, residents, fellows, 
                and postdoctoral researchers. The poster session provides a dedicated 
                opportunity for trainees to showcase their AI and informatics research, 
                receive feedback from experts, and network with peers in the field.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4" />
                <span>Attendance is free for all registered attendees</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <HelpCircle className="h-6 w-6" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {currentEdition.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Contact */}
        <section className="rounded-lg border bg-muted/30 p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">Questions?</h2>
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
