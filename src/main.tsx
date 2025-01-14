import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages/home.tsx'
import { Header } from './components/header.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
     </BrowserRouter>
  </StrictMode>,
)
