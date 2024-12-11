'use client';

import { Checkbox } from '@/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form';
import { Textarea } from '@/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import { CreatorOnboardingForm } from '../../utils/form';

export function StepThree({ form }: { form: CreatorOnboardingForm }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Compliance</h2>
        <p className="text-muted-foreground">
          Confirm your compliance with regulatory and content guidelines
        </p>
      </div>

      <FormField
        control={form.control}
        name="regulatoryAffiliations"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <FormLabel className="flex items-center gap-2">
              Regulatory Affiliations
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger type="button">
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      List any regulatory bodies or organizations you're
                      registered with
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </FormLabel>
            <FormControl>
              <Textarea {...field} value={field.value || ''} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="conflictsOfInterest"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <FormLabel className="flex items-center gap-2">
              Conflicts of Interest
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger type="button">
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Disclose any potential conflicts of interest that may
                      affect your compliance with the platform's content
                      guidelines
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </FormLabel>
            <FormControl>
              <Textarea {...field} value={field.value || ''} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="contentGuidelines"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to follow the platform's content guidelines
                </FormLabel>
                <FormDescription>
                  This includes maintaining professional standards and accuracy
                  in all content
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="noViolations"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I confirm I have no regulatory violations</FormLabel>
                <FormDescription>
                  I have not been subject to any regulatory actions or
                  violations
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
