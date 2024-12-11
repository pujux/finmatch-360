'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import { experienceLevels, UserOnboardingForm } from '../../utils/form';

export function StepOne({ form }: { form: UserOnboardingForm }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Your Investment Experience</h2>
        <p className="text-muted-foreground">
          Help us understand your investment background
        </p>
      </div>

      <FormField
        control={form.control}
        name="experienceLevel"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                Investment Experience Level
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger type="button">
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Select the level that best describes your investment
                        knowledge and experience
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormDescription>
                This helps us recommend content and experts that match your
                knowledge level
              </FormDescription>
            </div>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid gap-4"
              >
                {experienceLevels.map((level) => (
                  <FormItem
                    key={level.id}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={level.id} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {level.label}
                      <p className="text-sm text-muted-foreground">
                        {level.description}
                      </p>
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
