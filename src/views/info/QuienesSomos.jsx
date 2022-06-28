import React, {useState} from 'react'
import {Footer} from "./Footer";

const QuienesSomos = () => {

    const [info,setInfo] = useState("general")

    const result = (info) =>{
        if (info === "general"){
            return(
                <>
                    <h2 id="Empresa" className="welcome fw-bold">Información General de la Empresa</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Conoce Free-Lánzate</h3>
                        <p className="w-75 mx-auto">
                            Free-Lánzate es una aplicación web diseñada por estudiantes de Ingeniería de Sistemas de la Univerisidad Nacional de Colombia con el
                            fin de ofrecerle la oportunidad a los diferentes emprendedores de aumentar sus ingresos desde cualquier parte del mundo mediante
                            una aplicación web que ofrezca una experiencia única, fácil y amigable con los diferentes usuarios, la cual cuenta con una gran
                            variedad de productos, a muy buenos precios y que, mediante un canal de pago seguro para ambas partes, le permita a los clientes
                            adquirir productos o servicios de su necesidad y a los vendedores expandir sus negocios.
                            <br/>
                            <br/>
                            Free-Lánzate está enfocado en aquellos emprendedores independientes, <i>freelancers</i>, autónomos o libres que deseen vender
                            sus productos a un público más amplio o simplemente dar a conocer su catálogo de servicios. Al mismo tiempo,
                            el proyecto está dirigido a aquellas personas amantes de las compras on-line, que prefieran adquirir productos o
                            contratar servicios sin salir de casa y que cuenten con una tarjeta de débito o crédito que les permita realizar compras en línea.
                            <br/>
                            <br/>
                            Al ser una aplicación web dedicada al público en general y de todas las edades, Free-Lánzate contará con una interfaz
                            fácil de usar y amigable con el usuario, la cual, a partir de un proceso de autenticación, le permita a los diferentes usuarios
                            acceder desde sus respectivos roles y disfrutar de las diversas posibilidades de uso que la app ofrece: es así como los vendedores
                            podrán ingresar los diversos productos o servicios que deseen ofrecer en el mercado, mientras que a los compradores se les mostrará
                            todo un catálogo de opciones acorde con sus necesidades.
                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        } else if (info === "faq"){
            return(
                <>
                    <h2 id="Preguntas" className="welcome fw-bold">Preguntas Frecuentes</h2>
                    <hr className="separador"/>
                    <div>
                        <h3 className="welcome1 fw-bold">¿En qué consiste la sección de "Buscar"?</h3>
                        <p className="w-75 mx-auto">
                            Es una página en la que centralizamos todas las publicaciones de productos o servicios que son ofertados en nuestra página web.
                            <br/>
                            <br/>
                            Los compradores podrán elegir los productos o servicios que necesiten.
                            Así mismo, podrán filtrar por categorías para hallar lo que necesitan y no logran encontrar. Además, la página cuenta con una sección de busquedas en donde se podrá buscar por
                            productos o servicios, y por vendedores o Freelancers. Sobre estos últimos se puede visualizar su información y contactarlos por WhatsApp,
                            o bien por cualquiera de sus redes sociales.
                            <br/>
                            <br/>

                            Finalmente, desde esta página se puede acceder a las opciones de compra, dado que el producto podrá ser agregado a un Carrito personal de compras
                            para, posteriormente, ser redigirido a la página de pagos en línea.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿En qué consiste la sección de "Mi Perfil"?</h3>
                        <p className="w-75 mx-auto">
                            Es una página en la que podrás editar tus datos de usuario y ubicación.
                            <br/>
                            <br/>
                            Si eres freelancer, también podrás editar
                            tus datos de contacto y la descripción de tu perfil que se muestra al público.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿En qué consiste la sección de "Mis órdenes"?</h3>
                        <p className="w-75 mx-auto">
                            Es una página en la que podrás ver el historial de compras asociado a tu cuenta.
                            <br/>
                            <br/>
                            Así mismo, podrás reseñar
                            los productos o servicios que has adquirido para fortalecer la confianza de otros posibles compradores.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿En qué consiste la sección de "Recomendados"?</h3>
                        <p className="w-75 mx-auto">
                            Es una página en la que podrás ver a "los elegidos de FreeLánzate", que consiste en una colección
                            de los anuncios que han sido publicados mediante el plan "Pro".
                            <br/>
                            <br/>
                            Adicionalmente, encontrarás la sección "Para ti", en la cual te mostramos publicaciones relacionadas
                            con las categorías de los productos que has ordenado con anterioridad.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿En qué consiste la sección de "Mi carrito"?</h3>
                        <p className="w-75 mx-auto">
                            Es una página en la que podrás ver los productos y servicios que te interesaron y que deseas aquirir.
                            <br/>
                            <br/>
                            Aquí podras seleccionar la cantidad de unidades de producto, o bien de horas de servicio, que deseas
                            comprar. Tras realizar el pago mediante la plataforma Paypal podrás disfrutar de tus adquisiciones.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿En qué consiste la sección de "Anunciarme"?</h3>
                        <p className="w-75 mx-auto">
                            Es una página exclusiva para freelancers en la que podrás escoger la tarifa que deseas pagar para publicar tu anuncio.
                            <br/>
                            Una vez realizado el pago mediante la plataforma Paypal, podrás diligenciar los campos
                            necesarios para completar la publicación de tu anuncio y que este aparezca en la aplicación
                            para despertar el potencial interés de futuros compradores.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿En qué consiste la sección de "Mis ventas"?</h3>
                        <p className="w-75 mx-auto">
                            Es una página exclusiva para freelancers en la que podrás visualizar y eliminar tus anuncios publicados.
                            <br/>
                            Así mismo, aquí podrás consultar las ventas realizadas de tus productos y/o servicios para verificar que los pagos fue realizado de manera segura.
                            <br/>
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Cómo me garantizan que podré vender y comprar de manera segura?</h3>
                        <p className="w-75 mx-auto">
                            Free-Lánzate es una página comprometida al 100% con la seguridad tanto de sus vendedores como de sus compradores: es por eso que, a la hora de realizar
                            una venta, esta únicamente podrá hacerse a usuarios registrados, de los cuales se cuenta con la información necesaria para brindar seguridad y
                            confianza al vendedor. Así mismo, tanto vendedores como compradores deberán verificar su identidad mediante el uso de una cuenta de Paypal, o bien una tarjeta de crédito,
                            a la hora de realizar todo tipo de transacción.
                            <br/>
                            <br/>
                            Adicionalmente, los pagos de los respectivos productos o servicios podrán realizarse mediante la plataforma de pagos en línea de la app, por lo que
                            se brinda aún mayor confianza y seguridad para ambas partes involucradas.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Cuáles son los costos de vender un producto?</h3>
                        <p className="w-75 mx-auto">
                            Vender algún producto o servicio en Free-Lánzate tiene un costo mínimo: ¡nada más son 0.01 dólares para que tu anuncio sea publicado!
                             Sin embargo, si deseas aumentar tu alcance y tener mayor visibilidad hacía los compradores, deberás pagar un tarifa estándar de
                            $3.99, o bien una tarifa premium de $9.99. Dependiendo el plan que elijas, tu anuncio tendrá mayor prioridad en los resultados de búsqueda
                            y tendrás la oportunidad de ser uno de los primeros en aparecer en la sección de recomendaciones personalizadas de cada suuario.

                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        } else {

        }
    }

  return (
    <div>
        <h1 className="welcome2 w-75 mx-auto fw-bold">¿Quiénes somos?</h1>
    <div className="submenu">

        <nav className="my-4 fw-bold w-100 d-flex">
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("general")}>Información General de la Empresa</button>
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("faq")}>Preguntas Frecuentes</button>
        </nav>
        {
            result(info)
        }
        <Footer />
    </div>


    </div>
  )
}

export default QuienesSomos