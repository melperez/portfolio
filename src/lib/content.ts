import { getCollection } from 'astro:content';
import { withBase } from './paths';

// Shared loaders so every page reads identical, identically sorted data.

export async function getProfile() {
  const [entry] = await getCollection('profile');
  if (!entry) throw new Error('src/content/profile.md is missing');
  return { ...entry.data, cvPdf: withBase(entry.data.cvPdf), summary: entry.body ?? '' };
}

export async function getExperience() {
  const items = await getCollection('experience');
  return items.sort((a, b) => b.data.start.localeCompare(a.data.start));
}

export async function getProjects() {
  const items = await getCollection('projects');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export const getSkills = () => getCollection('skills');
export const getEducation = () => getCollection('education');
