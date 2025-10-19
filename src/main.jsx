import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import filterFacebookErrors from './utils/consoleFacebookFilter' // Descomenta solo si quieres filtrar errores

// filterFacebookErrors(); // Descomenta solo si quieres filtrar errores

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
