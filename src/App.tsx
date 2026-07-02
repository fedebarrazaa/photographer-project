/*ROTER PRINCIPAL */
import './styles/index.module.css'
import { DesingHome } from './pages/home/pageHome'
import { DesingPagePerfil } from './pages/home/pagePerfil'

import { BrowserRouter, Routes, Route } from "react-router";



 function App() {
  return (
    <> 
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<DesingHome />} />
        <Route path="/perfil" element={<DesingPagePerfil />} />
       {/* <Route path="*" element={<NotFound />} />*/ } 
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App