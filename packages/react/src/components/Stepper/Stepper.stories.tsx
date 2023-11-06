import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BsArrowRight, BsAlarm, BsAirplane } from 'react-icons/bs';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import Stepper from '.';
import Step, { StepProps } from '../Step';
import StepLabel, { StepLabelProps } from '../StepLabel';
import StepContent from '../StepContent';
import StepButton, { StepButtonProps } from '../StepButton';
import type { StepIconProps } from '../StepIcon';
import Typography from '../Typograhpy';

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

function CustomIconComponent(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <BsArrowRight />,
    2: <BsAirplane />,
    3: <BsAlarm />,
  };

  return (
    <div
      className={twMerge(
        clsx(
          'text-blue-gray-50 flex w-8 h-8 rounded-full bg-blue-gray-500 dark:bg-blue-gray-100 dark:text-white justify-center items-center',
          (active || completed) &&
            'bg-gradient-to-r from-indigo-400 to-pink-400',
        ),
        className,
      )}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

interface StepperProps extends React.ComponentProps<typeof Stepper> {
  steps: {
    label: string;
    description: string;
  }[];
  orientation?: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary';
  stepProps?: StepProps;
  stepLabelProps?: StepLabelProps;
  activeStepProp?: number;
  useStepButton?: boolean;
  stepButtonProps?: StepButtonProps;
}

function StepperComponent({
  steps,
  orientation,
  color,
  stepProps,
  stepLabelProps,
  activeStepProp,
  useStepButton,
  stepButtonProps,
  ...props
}: StepperProps): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {},
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const totalSteps = () => {
    return steps.length;
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Stepper
        activeStep={activeStepProp ?? activeStep}
        orientation={orientation}
        color={color}
        {...props}
      >
        {steps.map((step, index) => (
          <Step
            key={index + 5}
            active={(activeStepProp ?? activeStep) === index}
            completed={
              useStepButton
                ? completed[index]
                : (activeStepProp ?? activeStep) > index
            }
            {...stepProps}
          >
            {useStepButton ? (
              <StepButton {...stepButtonProps} onClick={handleStep(index)}>
                {step.label}
              </StepButton>
            ) : (
              <StepLabel
                {...stepLabelProps}
                optional={
                  index === 2 &&
                  !props.alternativeLabel && (
                    <Typography variant="small">Last Step</Typography>
                  )
                }
              >
                {step.label}
              </StepLabel>
            )}
            {orientation === 'vertical' && (
              <StepContent>
                {step.description}
                <div className="flex justify-between pr-20 pt-2">
                  <button onClick={handleBack}>Back</button>
                  <button onClick={handleNext}>
                    {index === steps.length - 1 ? 'Finish' : 'Next'}
                  </button>
                </div>
              </StepContent>
            )}
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <div className="ml-10">
          <Typography>All steps completed - you&apos;re finished</Typography>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
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
    steps: {
      control: {
        disable: true,
      },
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof StepperComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    color: 'primary',
  },
};

export const Horizontal: Story = {
  args: {
    color: 'primary',
    orientation: 'horizontal',
    className: 'max-w-3xl',
  },
};

export const AlternativeLabel: Story = {
  args: {
    color: 'primary',
    orientation: 'horizontal',
    alternativeLabel: true,
    className: 'max-w-4xl',
  },
};

export const CustomIcons: Story = {
  args: {
    stepLabelProps: {
      stepIconComponent: CustomIconComponent,
    },
    orientation: 'horizontal',
    alternativeLabel: true,
    className: 'max-w-4xl',
    activeStepProp: 1,
  },
};

export const UseStepButton: Story = {
  args: {
    useStepButton: true,
    nonLinear: true,
    orientation: 'horizontal',
    className: 'max-w-4xl'
  },
};
