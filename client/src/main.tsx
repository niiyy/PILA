import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>
)
