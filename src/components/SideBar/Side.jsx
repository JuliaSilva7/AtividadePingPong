import {Sidebar,Menu,MenuItem,SubMenu,sidebarClasses} from 'react-pro-sidebar'
import { Link } from 'react-router-dom'


export default function Side() {
  return (
    <Sidebar
    
      rootStyles={{
        [`.${sidebarClasses.container}`]:{
          backgroundColor: 'lightblue',color:'#000',
        }
      }}
    
    >

      <Menu>
        <SubMenu label="Dashboard">
          <MenuItem component={<Link to="/cadastro"/>}>Cadastro</MenuItem>
          <MenuItem component={<Link to="/regras"/>}>Regras</MenuItem>
          <MenuItem component={<Link to="/resultados"/>} >Resultados</MenuItem>
        </SubMenu>

      </Menu>
    
    
    </Sidebar>
  )
}
