'use client';

import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { useEdition } from '@/lib/edition-context';
import { siteConfig, navigationLinks } from '@/lib/content.config';
import { Separator } from '@/components/ui/separator';

export function SiteFooter() {
  const { currentEdition } = useEdition();

  const quickLinks = navigationLinks.slice(0, 4);
  const resourceLinks = navigationLinks.slice(4);

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-primary">{siteConfig.seriesAcronym}</h3>
              <p className="text-sm text-muted-foreground">
                {siteConfig.seriesName}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An annual symposium series advancing responsible AI and informatics for infectious diseases.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <nav className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/register"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Register
              </Link>
              <Link
                href="/code-of-conduct"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Code of Conduct
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${currentEdition.contactEmail}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                {currentEdition.contactEmail}
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href={siteConfig.socialLinks.twitter}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.seriesAcronym}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Hosted by the Division of Infectious Diseases at Columbia University Irving Medical Center
          </p>
        </div>
      </div>
    </footer>
  );
}
