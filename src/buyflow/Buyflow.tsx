import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
  designIns = 'design_ins',
}

enum Steps {
  email = 'emai',
  age = 'age',
  personal = 'personal',
  summary = 'summary',
}

const PRODUCTS = {
  [ProductIds.devIns]: {
    title: 'Developer Insurance',
    steps: [Steps.email, Steps.age, Steps.summary],
    defaults: { email: '', age: 0 },
  },
  [ProductIds.designIns]: {
    title: 'Design Insurance',
    steps: [Steps.email, Steps.age, Steps.personal, Steps.summary],
    defaults: { email: '', age: 0 },
  },
}

const STEP_TO_COMPONENT = {
  [Steps.email]: EmailStep,
  [Steps.age]: AgeStep,
  [Steps.personal]: NameStep,
  [Steps.summary]: SummaryStep,
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const product = PRODUCTS[props.productId]
  const [currentStep, setStep] = useState(product.steps[0])
  const [collectedData, updateData] = useState(product.defaults)
  const nextStep = product.steps[product.steps.indexOf(currentStep) + 1]
  const StepComponent = STEP_TO_COMPONENT[currentStep]

  const nextStepCallback = (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }

  return (
    <>
      <h4>Buying {product.title}</h4>

      <StepComponent
        cb={nextStep && nextStepCallback}
        collectedData={collectedData}
      />
    </>
  )
}

export default Buyflow
