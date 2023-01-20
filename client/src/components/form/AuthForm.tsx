import { useState } from 'react'
import { IoConstruct } from 'react-icons/io5'
import Button from '../button/Button'
import Input from '../input/Input'
import PasswordStrength from './components/PasswordStrength'

const AuthForm = () => {
  const [password, setPassword] = useState<string>('')

  return (
    <form className="authform__container">
      <Input label="Username" placeholder="Username" Icon={<IoConstruct />} />
      <Input label="E-mail" placeholder="E-mail" Icon={<IoConstruct />} />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Password"
        Icon={<IoConstruct />}
      />
      <PasswordStrength password={password} />

      <Button label="S'inscrire" colorType="primary" />

      <footer className="authform__footer">
        <span>
          Tu est dèja inscrit alors{' '}
          <span className="special">connecte toi</span>
        </span>
      </footer>
    </form>
  )
}

export default AuthForm
