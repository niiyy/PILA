import { useState } from 'react'
import CheckList from '../../checklist/Checklist'

export interface PasswordStrengthProps {
  password: string
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const [checkedItems, handleCheckedItems] = useState<string[]>([])

  password
  return (
    <div className="password_strength">
      <CheckList
        items={[
          { label: 'Minimum 8 caracteres', id: 'min_8_chars' },
          { label: 'Minimum 1 caractere spécial', id: 'min_1_special_char' },
        ]}
        checkedItems={checkedItems}
        handleCheckedItems={handleCheckedItems}
      />
    </div>
  )
}

export default PasswordStrength
