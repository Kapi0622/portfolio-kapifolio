import fs from 'node:fs';
import path from 'node:path';

export type SkillLevel = 'proficient' | 'learning' | 'familiar';

export type SkillItem = {
  name: string;
  level: SkillLevel;
  note?: string;
};

export type SkillGroup = {
  name: string;
  items: SkillItem[];
};

export type SkillsData = {
  groups: SkillGroup[];
};

const SKILLS_FILE = path.join(process.cwd(), 'content', 'skills.json');

export function getSkills(): SkillsData {
  const raw = fs.readFileSync(SKILLS_FILE, 'utf8');
  return JSON.parse(raw) as SkillsData;
}
