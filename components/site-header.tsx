'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useEdition } from '@/lib/edition-context';
import { navigationLinks, siteConfig } from '@/lib/content.config';
import { useState } from 'react';

export function SiteHeader() {
  const { currentEdition, setEditionByYear, availableEditions } = useEdition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">{siteConfig.seriesAcronym}</span>
          <span className="hidden text-sm text-muted-foreground sm:inline-block">
            {currentEdition.year}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Edition Selector */}
          <Select
            value={currentEdition.year.toString()}
            onValueChange={(value) => setEditionByYear(parseInt(value))}
          >
            <SelectTrigger className="w-20 h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {availableEditions.map((edition) => (
                <SelectItem key={edition.year} value={edition.year.toString()}>
                  {edition.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* CTA Buttons - Desktop */}
          <div className="hidden items-center gap-2 md:flex">
<Button asChild size="sm">
  <Link href="/register"}>
    Register
  </Link>
</Button>
<Button asChild variant="outline" size="sm">
  <Link href="/abstracts">
    Submit
  </Link>
</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-left">
                  {siteConfig.seriesAcronym} {currentEdition.year}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-2 border-t pt-6">
<Button asChild>
  <Link
    href={'/register'}
    onClick={() => setMobileMenuOpen(false)}
  >
    Register
  </Link>
</Button>
<Button asChild variant="outline">
  <Link
    href="/abstracts"
    onClick={() => setMobileMenuOpen(false)}
  >
    Submit Abstract
  </Link>
</Button>
     </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
