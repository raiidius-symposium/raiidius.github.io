import type { Edition } from './content.config';

export function generateICSFile(edition: Edition): string {
  const eventDate = new Date(edition.date);
  
  // Format dates for ICS (YYYYMMDD format)
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  // Set event times (8:00 AM - 6:15 PM ET)
  const startDate = new Date(eventDate);
  startDate.setUTCHours(12, 0, 0, 0); // 8 AM ET = 12:00 UTC
  
  const endDate = new Date(eventDate);
  endDate.setUTCHours(22, 15, 0, 0); // 6:15 PM ET = 22:15 UTC

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//RAIIDIUS//Symposium//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:RAIIDIUS ${edition.year} - ${edition.themeShortTitle}
DESCRIPTION:${edition.themeTitle}. ${edition.themeDescription.slice(0, 200)}...
LOCATION:${edition.venue}, ${edition.venueRoom}, ${edition.fullAddress}
URL:https://www.raiidius.org
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

  return icsContent;
}

export function downloadICSFile(edition: Edition): void {
  const icsContent = generateICSFile(edition);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `raiidius-${edition.year}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
