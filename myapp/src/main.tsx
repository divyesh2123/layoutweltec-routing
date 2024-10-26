import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Home.tsx'
import About from './About.tsx'
import Contact from './Contact.tsx'
import Login from './Login.tsx'
import Registration from './Registration.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path='/login' element={<Login></Login>}>

        </Route>

<Route path='/registration' element={<Registration></Registration>}>

</Route>

      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
