import React, { useState } from 'react'

interface NameStepProps {
  cb: (data: object) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const { cb } = props
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <>
      <div>
        <label>First name</label>
        <input
          type="text"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
      </div>

      <div>
        <label>Last name</label>
        <input
          type="text"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
      </div>

      <button onClick={() => cb({ firstName, lastName })}>Next</button>
    </>
  )
}

export default NameStep
