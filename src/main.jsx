
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomStack } from './components/hooks/usecontext-stack';
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
  <CustomStack/>
 </BrowserRouter>
  </StrictMode>
)
