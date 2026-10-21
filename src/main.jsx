import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import MoviesProvider from './MoviesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <MoviesProvider >
        <App />
      </MoviesProvider>
    </BrowserRouter>

  </StrictMode>,
)
