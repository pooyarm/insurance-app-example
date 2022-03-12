import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
}

enum Steps {
  email = 'emai',
  age = 'age',
  summary = 'summary',
}

const PRODUCTS = {
  [ProductIds.devIns]: {
    title: 'Developer Insurance',
    steps: [Steps.email, Steps.age, Steps.summary],
    defaults: { email: '', age: 0 },
  },
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const product = PRODUCTS[props.productId]
  const [currentStep, setStep] = useState(product.steps[0])
  const [collectedData, updateData] = useState(product.defaults)

  const getStepCallback = (nextStep: Steps) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }

  return (
    <>
      <h4>Buying {product.title}</h4>

      {(currentStep === Steps.email && <EmailStep cb={getStepCallback(Steps.age)} />) ||
        (currentStep === Steps.age && (
          <AgeStep cb={getStepCallback(Steps.summary)} />
        )) ||
        (currentStep === Steps.summary && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow
