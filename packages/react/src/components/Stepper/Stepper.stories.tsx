import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BsArrowRight } from 'react-icons/bs';

import Stepper from '.';
import Step from '../Step';
import StepLabel from '../StepLabel';
import StepContent from '../StepContent';
import StepButton from '../StepButton';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const globalActiveStep = 0;

type StepperProps = {
  steps: {
    label: string;
    description: string;
  }[];
  orientation: 'horizontal' | 'vertical';
  color: 'primary' | 'secondary';
};

function StepperComponent({
  steps,
  orientation,
  color,
}: StepperProps): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Stepper activeStep={activeStep} orientation={orientation} color={color}>
      {steps.map((step, index) => (
        <Step
          key={index + 5}
          active={activeStep === index}
          completed={activeStep > index}
        >
          <StepLabel>{step.label}</StepLabel>
          <StepContent>
            {step.description}
            <button onClick={handleNext}>
              Next
            </button>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Stepper',
  component: StepperComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    design: {},
  },
  args: {
    steps,
    orientation: 'vertical',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'minimal', 'error', 'success'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
  },
};
