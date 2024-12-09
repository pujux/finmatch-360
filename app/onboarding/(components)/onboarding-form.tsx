'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { updateUserMetadata } from '@/app/actions';
import { Button } from '@/ui/button';
import { Form } from '@/ui/form';
import { Progress } from '@/ui/progress';

import { FormData, useOnboardingForm } from '../utils/form';

import { StepFour } from './steps/step-four';
import { StepOne } from './steps/step-one';
import { StepThree } from './steps/step-three';
import { StepTwo } from './steps/step-two';

const steps = [StepOne, StepTwo, StepThree, StepFour];

export function OnboardingForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const onboardingForm = useOnboardingForm(step);

  const totalSteps = steps.length;

  const onSubmit = async (data: FormData) => {
    const metadata = { ...formData, ...data };

    if (step < totalSteps) {
      const newStep = step + 1;
      console.log(newStep, ((newStep - 1) / totalSteps) * 100);

      setStep(newStep);
      setProgress(((newStep - 1) / totalSteps) * 100);
      setFormData(metadata);
    } else {
      setProgress(100);
      setLoadingUpdate(true);
      await updateUserMetadata({
        experienceLevel: metadata.experienceLevel,
        investmentGoals: metadata.investmentGoals.join(),
        riskTolerance: metadata.riskTolerance,
        monthlyInvestment: metadata.monthlyInvestment,
        learningStyle: metadata.learningStyle.join(),
        timeCommitment: metadata.timeCommitment,
        onboardingCompleted: 'true',
      });
      setLoadingUpdate(false);
      router.push('/dashboard');
    }
  };

  const gotoPreviousStep = () => {
    const newStep = step - 1;
    console.log(newStep, ((newStep - 1) / totalSteps) * 100);
    setStep(newStep);
    setProgress(((newStep - 1) / totalSteps) * 100);
  };

  console.log(progress);

  return (
    <div>
      <Progress
        value={progress}
        className="mb-8 h-2"
        indicatorClassname={step === totalSteps ? 'bg-emerald-600' : ''}
      />

      <Form {...onboardingForm}>
        <form
          onSubmit={onboardingForm.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
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
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
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
    </div>
  );
}
