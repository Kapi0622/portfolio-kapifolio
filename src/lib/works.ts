import fs from 'node:fs';
import path from 'node:path';

export type WorkLink = { label: string; url: string };

export type Work = {
  slug: string;
  title: string;
  order?: number;
  genre: string;
  period: string;
  developmentType: string;
  teamInfo?: string;
  role: string;
  stack: string[];
  architecture?: string[];
  mainImage: string;
  images: string[];
  video?: string;
  links: WorkLink[];
  summary: string;
  description: string;
  techHighlights?: string;
  activities: string[];
  contests?: string[];
};

const WORKS_DIR = path.join(process.cwd(), 'content', 'works');

function readWorkFile(slug: string): Work {
  const file = path.join(WORKS_DIR, `${slug}.json`);
  const raw = fs.readFileSync(file, 'utf8');
  return JSON.parse(raw) as Work;
}

export function getWorkSlugs(): string[] {
  return fs
    .readdirSync(WORKS_DIR)
    .filter((name) => name.endsWith('.json'))
    .map((name) => name.replace(/\.json$/, ''));
}

export function getAllWorks(): Work[] {
  const works = getWorkSlugs().map(readWorkFile);
  return works.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

export function getWorkBySlug(slug: string): Work | null {
  try {
    return readWorkFile(slug);
  } catch {
    return null;
  }
}
