import { useEffect, useState } from "react";
import { EmailComponent } from "../../components/Email";
import { ValidationCodeComponent } from "../../components/VaidationCode";
import { PersonalDetailsComponents } from "../../components/PersonalDetail";
import { DocsComponent } from "../../components/Docs";
import {
  Box,
  Button,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export const Register = () => {
  // interface Idata {
  //   email: string;
  //   name: string;
  //   phoneNumber1: string;
  //   phoneNumber2: string;
  //   facilityName: string;
  //   facilityType: string;
  //   domain: string;
  //   category: string;
  //   address: string;
  //   location: {
  //     longitude: string;
  //     latitude: string;
  //   };
  //   logo: File[];
  //   coverPage: File[];
  //   commercialRegistrationNumber: File[];
  //   taxRegistrationNumber: File[];
  // }
  // const [currentStep, setCurrentSteps] = useState(0);
  // const [data, setData] = useState<Partial<Idata>>();

  // <div className="registeration">
  //   {steps === 0 && (
  //     <EmailComponent steps={steps} setSteps={setSteps} setData={setData} />
  //   )}
  //   {steps === 1 && (
  //     <ValidationCodeComponent steps={steps} setSteps={setSteps} />
  //   )}
  //   {steps === 2 && (
  //     <PersonalDetailsComponents
  //       steps={steps}
  //       setSteps={setSteps}
  //       data={data}
  //       setData={setData}
  //     />
  //   )}
  //   {steps === 3 && (
  //     <DocsComponent
  //       steps={steps}
  //       setSteps={setSteps}
  //       data={data}
  //       setData={setData}
  //     />
  //   )}
  //   {steps === 4 && (
  //     <>
  //       <h1>Registered success</h1>
  //     </>
  //   )}
  // </div>

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit">{label}</StepButton>
          </Step>
        ))}
      </Stepper>

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button onClick={handleComplete} sx={{ mr: 1 }}>
                {completedSteps() === totalSteps() - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
