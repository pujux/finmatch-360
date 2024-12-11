'use client';

import { updateClerkMetadata } from '@/app/actions';
import { Button } from '@/ui/button';
import { Form } from '@/ui/form';
import { Progress } from '@/ui/progress';
import { Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CreatorFormData, useCreatorOnboardingForm } from '../utils/form';
import { StepOne } from './steps/step-one';
import { StepThree } from './steps/step-three';
import { StepTwo } from './steps/step-two';

const steps = [StepOne, StepTwo, StepThree];

export function CreatorOnboardingForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<CreatorFormData>();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const onboardingForm = useCreatorOnboardingForm(step);

  const totalSteps = steps.length;

  const onSubmit = async (data: CreatorFormData) => {
    const metadata = { ...formData, ...data };
    console.log(metadata);

    if (step < totalSteps) {
      const newStep = step + 1;

      setStep(newStep);
      setProgress(((newStep - 1) / totalSteps) * 100);
      setFormData(metadata);
    } else {
      setProgress(100);
      setLoadingUpdate(true);

      const { socialMedia, ...meta } = metadata;

      await updateClerkMetadata({
        type: 'creator',
        ...meta,
        categories: metadata.categories.join(),
        formats: metadata.formats.join(),
        socialMediaTwitter: socialMedia.twitter,
        socialMediaYoutube: socialMedia.youtube,
        socialMediaInstagram: socialMedia.instagram,
        socialMediaLinkedin: socialMedia.linkedin,
        onboardingCompleted: Date.now(),
      });
      router.push('/dashboard');
    }
  };

  const gotoPreviousStep = () => {
    const newStep = step - 1;

    setStep(newStep);
    setProgress(((newStep - 1) / totalSteps) * 100);
  };

  return (
    <Form {...onboardingForm}>
      <form
        onSubmit={onboardingForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <Progress
          value={progress}
          className="h-2"
          indicatorClassname={step === totalSteps ? 'bg-emerald-600' : ''}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {steps[step - 1]?.({ form: onboardingForm })}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={gotoPreviousStep}
            disabled={step === 1}
          >
            Previous
          </Button>
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
            {step === totalSteps ? (
              loadingUpdate ? (
                <Loader2 className="animate-spin" />
              ) : (
                'Complete'
              )
            ) : (
              'Next'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
