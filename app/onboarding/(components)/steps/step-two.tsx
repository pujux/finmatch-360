'use client';

import { InfoIcon } from 'lucide-react';

import { Checkbox } from '@/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';

import { investmentGoals, OnboardingForm } from '../../utils/form';

export function StepTwo({ form }: { form: OnboardingForm }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Investment Goals</h2>
        <p className="text-muted-foreground">
          Select your primary investment objectives
        </p>
      </div>

      <FormField
        control={form.control}
        name="investmentGoals"
        render={() => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                What are your investment goals?
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Choose one or more goals that align with your financial
                        objectives
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormDescription>
                This helps us match you with experts who specialize in your
                areas of interest
              </FormDescription>
            </div>

            {investmentGoals.map((goal) => (
              <FormField
                key={goal.id}
                control={form.control}
                name="investmentGoals"
                render={({ field }) => (
                  <FormItem
                    key={goal.id}
                    className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(goal.id)}
                        onCheckedChange={(checked) =>
                          checked
                            ? field.onChange([...field.value, goal.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== goal.id,
                                ),
                              )
                        }
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">
                        {goal.label}
                      </FormLabel>
                      <FormDescription>{goal.description}</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
