import React from 'react'

interface NameStepProps {
  cb: (field: string, value: number) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  return (
    <div>
      Dummy Name Step
    </div>
  )
}

export default NameStep
