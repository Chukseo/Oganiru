import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterMain from './router/RouterMain.jsx'
// import './index.css'

// import App from './Pages/home'
// import App from './Pages/about'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterMain />
  </StrictMode>,
)
