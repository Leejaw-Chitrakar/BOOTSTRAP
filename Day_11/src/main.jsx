import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClassTask } from './ClassTask.jsx'
import { Learning } from './Learning.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ClassTask />
    <Learning />
  </StrictMode>,
)
