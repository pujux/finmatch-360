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
import { Input } from '@/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';

import { learningStyles, OnboardingForm } from '../../utils/form';

export function StepFour({ form }: { form: OnboardingForm }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Learning Preferences</h2>
        <p className="text-muted-foreground">
          Tell us how you prefer to learn about investing
        </p>
      </div>

      <FormField
        control={form.control}
        name="learningStyle"
        render={() => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                Preferred Learning Styles
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Select the ways you prefer to learn about investing</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormDescription>
                We&apos;ll prioritize content in your preferred formats
              </FormDescription>
            </div>
            {learningStyles.map((style) => (
              <FormField
                key={style.id}
                control={form.control}
                name="learningStyle"
                render={({ field }) => (
                  <FormItem
                    key={style.id}
                    className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(style.id)}
                        onCheckedChange={(checked) =>
                          checked
                            ? field.onChange([...field.value, style.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== style.id,
                                ),
                              )
                        }
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">
                        {style.label}
                      </FormLabel>
                      <FormDescription>{style.description}</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="timeCommitment"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                Weekly Time Commitment (hours)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Hours you can dedicate to learning and managing
                        investments per week
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormDescription>
                This helps us recommend content that fits your schedule
              </FormDescription>
            </div>
            <FormControl>
              <Input
                type="number"
                placeholder="Enter hours per week"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
