'use client';

import { InfoIcon } from 'lucide-react';

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

import { OnboardingForm } from '../../utils/form';

export function StepThree({ form }: { form: OnboardingForm }) {
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
                    <TooltipTrigger>
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
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="conservative" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Conservative
                    <p className="text-sm text-muted-foreground">
                      Prefer stability and lower risk
                    </p>
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="moderate" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Moderate
                    <p className="text-sm text-muted-foreground">
                      Balance between risk and return
                    </p>
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="aggressive" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Aggressive
                    <p className="text-sm text-muted-foreground">
                      Comfortable with higher risk for potential higher returns
                    </p>
                  </FormLabel>
                </FormItem>
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
                Monthly Investment Capacity
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
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
              <Input placeholder="Enter amount in €" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
