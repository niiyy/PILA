import { useEffect, useState } from 'react'
import CheckList from '../../checklist/Checklist'

export interface PasswordStrengthProps {
  password: string
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const [min8Chars, setMin8Chars] = useState(false)
  const [min1SpecialChar, setMin1SpecialChar] = useState(false)

  useEffect(() => {
    if (password.length >= 8) {
      setMin8Chars(true)
    } else {
      setMin8Chars(false)
    }
  }, [password])

  return (
    <div className="password_strength">
      <CheckList
        items={[
          {
            label: 'Minimum 8 caracteres',
            id: 'min_8_chars',
            checked: min8Chars,
          },
          {
            label: 'Minimum 1 caractere spécial',
            id: 'min_1_special_char',
            checked: min1SpecialChar,
          },
        ]}
      />
    </div>
  )
}

export default PasswordStrength
