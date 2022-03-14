import React, { useState } from 'react'

interface EmailStepProps {
  cb: (data: object) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const { cb } = props
  const [email, setEmail] = useState('')

  return (
    <>
      <div>
        <label>Email:</label>

        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        />
      </div>
      <button onClick={() => cb({ email })}>Next</button>
    </>
  )
}

export default EmailStep
