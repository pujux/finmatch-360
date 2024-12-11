'use client';

import { InfoIcon } from 'lucide-react';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form';
import { Input } from '@/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';

import { CreatorOnboardingForm } from '../../utils/form';

export function StepOne({ form }: { form: CreatorOnboardingForm }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Basic Information</h2>
        <p className="text-muted-foreground">
          Tell us about yourself and your experience
        </p>
      </div>

      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                Full Legal Name
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger type="button">
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Enter your full legal name as it appears on official
                        documents
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
            </div>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="yearsExperience"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <FormLabel className="flex items-center gap-2">
              Years of Experience
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger type="button">
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Total years of experience in financial services or related
                      fields
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="currentEmployer"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <FormLabel className="flex items-center gap-2">
              Current Employer (Optional)
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger type="button">
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Your current company or organization, if applicable</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ''} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
