import { Outlet } from "react-router-dom"
import Side from './components/SideBar/Side'

function App() {


  return (
    <>
      <Side/>
      <Outlet/>
    </>
  )
}

export default App
