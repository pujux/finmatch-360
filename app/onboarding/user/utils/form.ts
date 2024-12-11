import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const experienceLevels = [
  {
    id: 'beginner',
    label: 'Beginner',
    description: 'New to investing, learning the basics',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    description: 'Some experience with basic investments',
  },
  {
    id: 'advanced',
    label: 'Advanced',
    description: 'Experienced investor with diverse portfolio',
  },
];

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

export const riskToleranceLevels = [
  {
    id: 'conservative',
    label: 'Conservative',
    description: 'Prefer stability and lower risk',
  },
  {
    id: 'moderate',
    label: 'Moderate',
    description: 'Balance between risk and return',
  },
  {
    id: 'aggressive',
    label: 'Aggressive',
    description: 'Comfortable with higher risk for potential higher returns',
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
  experienceLevel: z.enum(
    experienceLevels.map(({ id }) => id) as [string, ...string[]],
    { required_error: 'Select an investment experience level' },
  ),
});

const stepTwoSchema = z.object({
  investmentGoals: z
    .array(z.enum(investmentGoals.map(({ id }) => id) as [string, ...string[]]))
    .min(1, 'Select at least one goal'),
});

const stepThreeSchema = z.object({
  riskTolerance: z.enum(
    riskToleranceLevels.map(({ id }) => id) as [string, ...string[]],
    { required_error: 'Select a risk tolerance' },
  ),
  monthlyInvestment: z.coerce
    .number()
    .min(1, 'Enter a monthly investment amount'),
});

const stepFourSchema = z.object({
  learningStyle: z
    .array(z.enum(learningStyles.map(({ id }) => id) as [string, ...string[]]))
    .min(1, 'Select at least one learning style'),
  timeCommitment: z.coerce.number().min(1, 'Enter a time commitment'),
});

const formSchemas = [
  stepOneSchema,
  stepTwoSchema,
  stepThreeSchema,
  stepFourSchema,
];

export type UserFormData = z.infer<
  typeof stepOneSchema &
    typeof stepTwoSchema &
    typeof stepThreeSchema &
    typeof stepFourSchema
>;

export type UserOnboardingForm = ReturnType<typeof useUserOnboardingForm>;

export function useUserOnboardingForm(step: number) {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchemas[step - 1]),
    defaultValues: {
      experienceLevel: '',
      investmentGoals: [],
      riskTolerance: '',
      learningStyle: [],
      timeCommitment: 0,
      monthlyInvestment: 0,
    },
  });
  return form;
}
