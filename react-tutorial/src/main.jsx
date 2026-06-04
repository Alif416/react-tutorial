import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting, { Details } from './Greeting'

import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Greeting />
    <Details />
  </StrictMode>
)


