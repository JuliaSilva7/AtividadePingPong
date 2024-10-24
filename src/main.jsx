import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Error.jsx'
import Cadastro from './routes/Paginas/Cadastro.jsx'
import Regras from './routes/Paginas/Regras.jsx'
import Resultados from './routes/Paginas/Resultados.jsx'
 
const router = createBrowserRouter([{
  path: '/', element: <App/>,
  errorElement: <Error/>,
 
 
children: [
  {path: '/', element: <Home/>},
  {path: '/cadastro', element: <Cadastro/>},
  {path: '/regras', element: <Regras/>},
  {path: '/resultados', element: <Resultados/>}
]
}])
 
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
 