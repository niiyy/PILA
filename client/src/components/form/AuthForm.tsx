import { FormEvent, useState } from 'react'
import { IoConstruct, IoMailOutline } from 'react-icons/io5'
import Button from '../button/Button'
import Input from '../input/Input'
import PasswordStrength from './components/PasswordStrength'

import { BiUser } from 'react-icons/bi'

const AuthForm = () => {
  const [password, setPassword] = useState<string>('')

  const [formType, setFormType] = useState<'login' | 'register'>('register')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevV) => !prevV)
  }

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <form className="authform__container">
      {formType === 'register' && (
        <Input label="Username" placeholder="Username" Icon={<BiUser />} />
      )}
      <Input label="E-mail" placeholder="E-mail" Icon={<IoMailOutline />} />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Password"
        Icon={<p>{showPassword ? 'Hide' : 'Show'}</p>}
        onIconClick={handleTogglePasswordVisibility}
        type={showPassword ? 'text' : 'password'}
      />

      {formType === 'register' ? (
        <>
          <PasswordStrength password={password} />
        </>
      ) : null}

      <Button
        label={`${formType === 'login' ? 'Se connecter' : "S'inscrire"}`}
        colorType="primary"
        onClick={handleSubmitForm}
      />

      <footer className="authform__footer">
        <span>
          {formType === 'register' ? (
            <>
              Tu est dèja inscrit alors{' '}
              <span onClick={() => setFormType('login')} className="special">
                connecte toi
              </span>
            </>
          ) : (
            <>
              Tu n'est pas inscrit alors{' '}
              <span onClick={() => setFormType('register')} className="special">
                Inscrit toi
              </span>
            </>
          )}
        </span>
      </footer>
    </form>
  )
}

export default AuthForm
