import React, { useState } from 'react'

interface AgeStepProps {
  cb: (data: object) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const { cb } = props
  const [age, setAge] = useState(0)

  return (
    <>
      <div>
        <label>Age:</label>

        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        />
      </div>
      <button onClick={() => cb({ age })}>Next</button>
    </>
  )
}

export default AgeStep
