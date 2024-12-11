'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form';
import { Input } from '@/ui/input';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import { UserOnboardingForm, riskToleranceLevels } from '../../utils/form';

export function StepThree({ form }: { form: UserOnboardingForm }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Risk Profile</h2>
        <p className="text-muted-foreground">
          Tell us about your risk tolerance and investment capacity
        </p>
      </div>

      <FormField
        control={form.control}
        name="riskTolerance"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                Risk Tolerance
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger type="button">
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Your comfort level with investment risk and market
                        volatility
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormDescription>
                This helps us recommend experts that match your risk tolerance
              </FormDescription>
            </div>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid gap-4"
              >
                {riskToleranceLevels.map((level) => (
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

      <FormField
        control={form.control}
        name="monthlyInvestment"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                Monthly Investment Capacity in €
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger type="button">
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Amount you can consistently invest each month</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormDescription>
                This helps us recommend strategies that match your investment
                capacity
              </FormDescription>
            </div>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
