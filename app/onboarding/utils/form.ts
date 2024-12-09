import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const investmentGoals = [
  {
    id: 'retirement',
    label: 'Retirement Planning',
    description: 'Building a nest egg for the future',
  },
  {
    id: 'wealth',
    label: 'Wealth Building',
    description: 'Growing assets and creating wealth',
  },
  {
    id: 'passive',
    label: 'Passive Income',
    description: 'Generating regular income from investments',
  },
  {
    id: 'shortTerm',
    label: 'Short-term Gains',
    description: 'Taking advantage of market opportunities',
  },
];

export const learningStyles = [
  {
    id: 'videos',
    label: 'Video Content',
    description: 'Learn through detailed video explanations',
  },
  {
    id: 'articles',
    label: 'Written Articles',
    description: 'In-depth articles and analysis',
  },
  {
    id: 'interactive',
    label: 'Interactive Tools',
    description: 'Hands-on learning with interactive features',
  },
  {
    id: 'community',
    label: 'Community Discussions',
    description: 'Learn from peer discussions and expert Q&As',
  },
];

const stepOneSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced'], {
    required_error: 'Select an investment experience level',
  }),
});

const stepTwoSchema = z.object({
  investmentGoals: z.array(z.string()).min(1, 'Select at least one goal'),
});

const stepThreeSchema = z.object({
  riskTolerance: z.enum(['conservative', 'moderate', 'aggressive'], {
    required_error: 'Select a risk tolerance',
  }),
  monthlyInvestment: z.string().min(1, 'Enter a monthly investment amount'),
});

const stepFourSchema = z.object({
  learningStyle: z
    .array(z.string())
    .min(1, 'Select at least one learning style'),
  timeCommitment: z.string().min(1, 'Enter a time commitment'),
});

const formSchemas = [
  stepOneSchema,
  stepTwoSchema,
  stepThreeSchema,
  stepFourSchema,
];

export type FormData = z.infer<
  typeof stepOneSchema &
    typeof stepTwoSchema &
    typeof stepThreeSchema &
    typeof stepFourSchema
>;

export type OnboardingForm = ReturnType<typeof useOnboardingForm>;

export function useOnboardingForm(step: number) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchemas[step - 1]),
    defaultValues: {
      experienceLevel: undefined,
      investmentGoals: [],
      riskTolerance: undefined,
      monthlyInvestment: '',
      learningStyle: [],
      timeCommitment: '',
    },
  });
  return form;
}
