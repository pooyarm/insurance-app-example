import React, { useState } from 'react'

interface NameStepProps {
  cb: (data: object) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const { cb } = props
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const submit = () => {
    setError('')

    if (!firstName.trim() || !lastName.trim()) {
      setError('Please fill all fields.')
      return
    }

    cb({ firstName, lastName })
  }

  return (
    <>
      {error && (
        <p>{error}</p>
      )}

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

      <button onClick={submit}>Next</button>
    </>
  )
}

export default NameStep
