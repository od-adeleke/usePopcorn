import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import StarRating from './components/StarRating'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StarRating defaultRating={3} />
    <StarRating maxRating={10} color='red' size={24} /> */}
  </StrictMode>,
)
