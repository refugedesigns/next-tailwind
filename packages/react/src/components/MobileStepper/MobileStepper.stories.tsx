import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from 'react-icons/hi2';

import MobileStepper from '.';
import Button from '../Buttons';

function MobileStepperComponent({ ...props }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = 6;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === steps - 1) {
        return prevActiveStep;
      }
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) {
        return prevActiveStep;
      }
      return prevActiveStep - 1;
    });
  };

  return (
    <MobileStepper
      nextButton={
        <Button
          onClick={handleNext}
          endIcon={<HiMiniArrowLongRight />}
          variant="text"
          className="text-white"
        >
          Next
        </Button>
      }
      backButton={
        <Button
          onClick={handleBack}
          startIcon={<HiMiniArrowLongLeft />}
          variant="text"
          className="text-white"
        >
          Back
        </Button>
      }
      steps={steps}
      activeStep={activeStep}
      {...props}
    />
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/MobileStepper',
  component: MobileStepper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  args: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof MobileStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dots: Story = {
  render: (args) => <MobileStepperComponent {...args} />,
  args: {
    position: 'static',
    variant: 'dots',
  },
};

export const Progress: Story = {
  render: (args) => <MobileStepperComponent {...args} />,
  args: {
    position: 'static',
    variant: 'progress',
  },
};

export const Text: Story = {
  render: (args) => <MobileStepperComponent {...args} />,
  args: {
    position: 'static',
    variant: 'text',
  },
};

export const Bottom: Story = {
  render: (args) => <MobileStepperComponent {...args} />,
  args: {
    position: 'bottom',
    variant: 'dots',
  },
};

export const Top: Story = {
  render: (args) => <MobileStepperComponent {...args} />,
  args: {
    position: 'top',
    variant: 'dots',
  },
};
