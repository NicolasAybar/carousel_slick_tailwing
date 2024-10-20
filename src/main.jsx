import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjetero from './components/tarjetero/Tarjetero.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarjetero />
  </StrictMode>,
)
