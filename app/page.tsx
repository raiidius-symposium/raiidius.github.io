import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { WhatToExpectSection } from '@/components/home/what-to-expect-section';
import { ThemesSection } from '@/components/home/themes-section';
import { ImportantDatesSection } from '@/components/home/important-dates-section';
import { ProgramPreviewSection } from '@/components/home/program-preview-section';
import { PartnersSection } from '@/components/home/partners-section';
import { SpeakersPreviewSection } from '@/components/home/speakers-preview-section';
import { MailingListSection } from '@/components/home/mailing-list-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatToExpectSection />
      <ThemesSection />
      {/* <ImportantDatesSection /> */}
      {/* <ProgramPreviewSection /> */}
      <PartnersSection />
      {/* <SpeakersPreviewSection /> */}
      <MailingListSection />
    </>
  );
}
