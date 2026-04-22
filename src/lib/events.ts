import fs from 'node:fs';
import path from 'node:path';

export type EventType = 'internship' | 'hackathon' | 'conference' | 'other';

export type EventItem = {
  slug: string;
  title: string;
  organizer: string;
  period: string;
  startDate: string; // YYYY-MM or YYYY-MM-DD (for sorting)
  type: EventType;
  summary: string;
  learnings?: string;
  url?: string;
  logo?: string;
};

const EVENTS_DIR = path.join(process.cwd(), 'content', 'events');

export function getAllEvents(): EventItem[] {
  if (!fs.existsSync(EVENTS_DIR)) return [];
  const files = fs.readdirSync(EVENTS_DIR).filter((name) => name.endsWith('.json'));
  const events = files.map((name) => {
    const raw = fs.readFileSync(path.join(EVENTS_DIR, name), 'utf8');
    return JSON.parse(raw) as EventItem;
  });
  return events.sort((a, b) => (b.startDate ?? '').localeCompare(a.startDate ?? ''));
}
