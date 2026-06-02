import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting, { Details } from './Greeting'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Details />
  </StrictMode>,
)
