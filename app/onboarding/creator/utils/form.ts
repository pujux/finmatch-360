import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const contentCategories = [
  {
    id: 'stocks',
    label: 'Stocks & Equities',
    description: 'Stock market analysis and equity investments',
  },
  {
    id: 'crypto',
    label: 'Cryptocurrency',
    description: 'Digital assets and blockchain technology',
  },
  {
    id: 'personal',
    label: 'Personal Finance',
    description: 'Budgeting, savings, and financial planning',
  },
  {
    id: 'realestate',
    label: 'Real Estate',
    description: 'Property investment and real estate markets',
  },
];

export const contentFormats = [
  {
    id: 'video',
    label: 'Video Content',
    description: 'YouTube, TikTok, or other video platforms',
  },
  {
    id: 'articles',
    label: 'Written Content',
    description: 'Blog posts, newsletters, and articles',
  },
  {
    id: 'podcasts',
    label: 'Podcasts',
    description: 'Audio content and podcast episodes',
  },
  {
    id: 'courses',
    label: 'Online Courses',
    description: 'Educational courses and workshops',
  },
];

export const basicInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  yearsExperience: z.coerce.number().min(1, 'Years of experience is required'),
  currentEmployer: z.string().nullable(),
});

export const contentDetailsSchema = z.object({
  categories: z
    .array(
      z.enum(contentCategories.map(({ id }) => id) as [string, ...string[]]),
    )
    .min(1, 'Select at least one category'),
  formats: z
    .array(z.enum(contentFormats.map(({ id }) => id) as [string, ...string[]]))
    .min(1, 'Select at least one format'),
  socialMedia: z.object({
    twitter: z.string().nullable(),
    youtube: z.string().nullable(),
    instagram: z.string().nullable(),
    linkedin: z.string().nullable(),
  }),
});

export const complianceSchema = z.object({
  regulatoryAffiliations: z.string().nullable(),
  conflictsOfInterest: z.string().nullable(),
  contentGuidelines: z.literal<boolean>(true, {
    errorMap: () => ({ message: 'Please agree to the above' }),
  }),
  noViolations: z.literal<boolean>(true, {
    errorMap: () => ({ message: 'Please confirm the above' }),
  }),
});

const formSchemas = [basicInfoSchema, contentDetailsSchema, complianceSchema];

export type CreatorFormData = z.infer<
  typeof basicInfoSchema & typeof contentDetailsSchema & typeof complianceSchema
>;

export type CreatorOnboardingForm = ReturnType<typeof useCreatorOnboardingForm>;

export function useCreatorOnboardingForm(step: number) {
  const form = useForm<CreatorFormData>({
    resolver: zodResolver(formSchemas[step - 1]),
    defaultValues: {
      fullName: '',
      yearsExperience: 0,
      currentEmployer: null,
      categories: [],
      formats: [],
      socialMedia: {
        twitter: null,
        youtube: null,
        instagram: null,
        linkedin: null,
      },
      regulatoryAffiliations: null,
      contentGuidelines: false,
      noViolations: false,
      conflictsOfInterest: null,
    },
  });
  return form;
}
