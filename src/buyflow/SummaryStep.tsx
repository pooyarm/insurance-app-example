import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  productId: string,
  collectedData: {
    email: string
    age: number
    firstName?: string
    lastName?: string
  }
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const {
    productId,
    collectedData,
  } = props

  return (
    <>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      {collectedData.firstName && (
        <div>First name: {collectedData.firstName}</div>
      )}
      {collectedData.lastName && (
        <div>Last name: {collectedData.lastName}</div>
      )}
      <div>
        <Link to={`/purchased=${productId}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
