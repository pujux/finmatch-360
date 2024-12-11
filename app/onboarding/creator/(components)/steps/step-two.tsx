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
import { Input } from '@/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import {
  contentCategories,
  contentFormats,
  CreatorOnboardingForm,
} from '../../utils/form';

export function StepTwo({ form }: { form: CreatorOnboardingForm }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Content Details</h2>
        <p className="text-muted-foreground">
          Tell us about the content you are creating
        </p>
      </div>

      <FormField
        control={form.control}
        name="categories"
        render={() => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                Content Categories
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger type="button">
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Select the financial topics you plan to cover</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormDescription>
                This helps us match users that are interested in the topics you
                cover
              </FormDescription>
            </div>
            {contentCategories.map((category) => (
              <FormField
                key={category.id}
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(category.id)}
                        onCheckedChange={(checked) => {
                          const value = field.value || [];
                          return checked
                            ? field.onChange([...value, category.id])
                            : field.onChange(
                                value?.filter((val) => val !== category.id),
                              );
                        }}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>{category.label}</FormLabel>
                      <FormDescription>{category.description}</FormDescription>
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
        name="formats"
        render={() => (
          <FormItem className="flex flex-col gap-4 space-y-0">
            <div>
              <FormLabel className="flex items-center gap-2">
                Content Formats
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger type="button">
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Select the content formats you provide</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormDescription>
                This helps us match users that are interested in the content
                formats you provide
              </FormDescription>
            </div>
            {contentFormats.map((format) => (
              <FormField
                key={format.id}
                control={form.control}
                name="formats"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(format.id)}
                        onCheckedChange={(checked) => {
                          const value = field.value || [];
                          return checked
                            ? field.onChange([...value, format.id])
                            : field.onChange(
                                value?.filter((val) => val !== format.id),
                              );
                        }}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>{format.label}</FormLabel>
                      <FormDescription>{format.description}</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="socialMedia.instagram"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4 space-y-0">
              <FormLabel>Instagram Profile (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="@username"
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socialMedia.twitter"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4 space-y-0">
              <FormLabel>Twitter Profile (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="@username"
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socialMedia.youtube"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4 space-y-0">
              <FormLabel>YouTube Channel (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Channel URL"
                  type="url"
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socialMedia.linkedin"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4 space-y-0">
              <FormLabel>LinkedIn Profile (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Profile URL"
                  type="url"
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
