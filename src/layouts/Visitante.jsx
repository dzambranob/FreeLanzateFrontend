import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"
import {Navigate} from "react-router-dom"
import{getAccessToken} from "../api/auth"

function Visitante (props) {

  const {children} = props;
  const {Content, Sider} = Layout;
  const side = props.side;
  const rol = "/";

  if(getAccessToken()){
    localStorage.setItem("ERR","Estás registrado como usuario. Para acceder al rol de freelancer y/o visitante debes cerrar sesión.")
    return <Navigate to = '/usuario'/>
  }

    if (side){
      return (
        <div>
          <Layout className='d-flex flex-row'>
            <Sider>
              <Sidebar rol={rol}/>
            </Sider>
            <Content> {children} </Content>
          </Layout>
        </div>
      )
    }else{
      return (
        <div>
          <Layout>
            <Content> {children} </Content>
          </Layout>
        </div>
      )
    }
}

export default Visitante