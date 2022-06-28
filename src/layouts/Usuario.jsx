import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"
import useAuth from '../hooks/useAuth'
import {Navigate} from "react-router-dom";
import ModalError from "../components/ModalError";

function Usuario (props) {

  const error = localStorage.getItem("ERR")
  const {children} = props;
  const {Header, Content, Footer, Sider} = Layout;
  const rol = props.rol;
  const{user, isLoading, isFreelancer} = useAuth();
  console.log("usuario: "+ user)

  if(!user && !isLoading){
      localStorage.setItem("ERR","Se ha cerrado tu sesión.")
    return(
      <>
      <Navigate to = "/login" />
      </>
    )
  }
  if(user && !isLoading && !isFreelancer){
      return (
          <div>

              <Layout className='d-flex flex-row'>
                  <Sider>
                      <Sidebar rol={rol}/>
                  </Sider>
                  <Content>{children}</Content>
              </Layout>
              <ModalError error={error}/>
          </div>
      );
    }
  if(user && isFreelancer){
      localStorage.setItem("ERR","Estás registrado como freelancer. Para acceder al rol de usuario y/o visitante debes cerrar sesión.")
      return(
        <>
        <Navigate to = "/freelanzer" />
        </>
      )
    }

    return null;
}

export default Usuario