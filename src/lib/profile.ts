import fs from 'node:fs';
import path from 'node:path';

export type TimelineEntry = {
  year: string;
  title: string;
  note?: string;
};

export type ProfileEssay = {
  title: string;
  body: string;
};

export type ProfileTrait = {
  label: string;
  desc: string;
};

export type ProfileData = {
  timeline: TimelineEntry[];
  essay: ProfileEssay;
  traits: ProfileTrait[];
};

const PROFILE_FILE = path.join(process.cwd(), 'content', 'profile', 'timeline.json');

export function getProfile(): ProfileData {
  const raw = fs.readFileSync(PROFILE_FILE, 'utf8');
  return JSON.parse(raw) as ProfileData;
}
