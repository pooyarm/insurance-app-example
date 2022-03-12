import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    firstName?: string
    lastName?: string
  }
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      {props.collectedData.firstName && (
        <div>First name: {props.collectedData.firstName}</div>
      )}
      {props.collectedData.lastName && (
        <div>Last name: {props.collectedData.lastName}</div>
      )}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
