import React, {useState} from 'react'
import {Footer} from "./Footer";

const Legal = () => {
    const [info,setInfo] = useState("tyc")

    const result = (info) => {
        if (info === "tyc") {
            return(
                <>
                    <h2 id="Terminos" className="welcome fw-bold">Términos y Condiciones de uso</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Términos y Condiciones</h3>
                        <p className="w-75 mx-auto">
                            Esta página web es propiedad y está operado por estudiantes de la materia Ingeniería de
                            Software 2 de la Universidad Nacional de Colombia.
                            Estos Términos establecen los términos y condiciones bajo los cuales tu puedes usar nuestra
                            página web y
                            servicios ofrecidos por nosotros. Esta página web ofrece a los visitantes la posibilidad de
                            vender y/o adquirir productos o servicios mediante una
                            plataforma virtual.
                            Al acceder o usar la página web de nuestro servicio, usted aprueba que haya leído, entendido
                            y aceptado estar sujeto a estos Términos:
                            <br/>
                            <br/>
                            <ol>

                                <li>
                                    Para usar nuestro página web y / o recibir nuestros servicios,
                                    debes tener al menos 18 años de edad, o la mayoría de edad legal en tu jurisdicción,
                                    y poseer la autoridad legal, el derecho y la libertad para participar en estos
                                    Términos como un acuerdo vinculante.
                                    No tienes permitido utilizar esta página web y / o recibir servicios si hacerlo está
                                    prohibido en tu país o en virtud
                                    de cualquier ley o regulación aplicable a tu caso.

                                </li>
                                <br/>
                                <li>
                                    Al comprar un artículo, aceptas que:
                                    <br/>
                                    <br/>
                                    <ul>
                                        <li>
                                            Eres responsable de leer el listado completo del artículo antes de
                                            comprometerte a comprarlo.
                                        </li>
                                        <li>
                                            Celebras un contrato legalmente vinculante para comprar un artículo cuando
                                            te comprometed a comprar un artículo y completar el
                                            proceso de check-out.
                                        </li>
                                        <br/>
                                    </ul>
                                    Los precios que cobramos por usar nuestros productos / servicios para nuestros
                                    productos se enumeran en la página web.
                                    Nos reservamos el derecho de cambiar nuestros precios para los productos que se
                                    muestran en cualquier momento y de corregir
                                    los errores de precios que pueden ocurrir inadvertidamente. Información adicional
                                    sobre precios e impuestos sobre las ventas
                                    está disponible en la página de pagos.
                                    <br/>
                                    <br/>
                                    La tarifa por los servicios y cualquier otro cargo que pueda incurrir en relación
                                    con tu uso del servicio,
                                    como los impuestos y las posibles tarifas de transacción, se cobrarán mensualmente a
                                    tu método de pago.
                                </li>
                                <br/>
                                <li>
                                    Para cualquier producto no dañado, simplemente devuélvelo con sus respectivos
                                    accesorios y el paquete incluidos
                                    junto con el recibo original (o recibo de regalo) dentro de los 14 días posteriores
                                    a la fecha que recibiste
                                    el producto, y lo cambiaremos o te ofreceremos un reembolso basado en el método de
                                    pago original.
                                    <br/>
                                    <br/>
                                    Además, ten en cuenta lo siguiente:
                                    <ul>
                                        <br/>
                                        <li>
                                            Los productos solo se pueden devolver en el país en el que se compraron
                                            originalmente.
                                        </li>
                                        <li>
                                            Algunos productos no son elegibles para devolución.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </p>
                        <hr className="separador mt-4"/>
                    </div>
                </>
            )
        }
        if (info === "legal") {
            return(
                <>
                    <h2 id="Legal" className="welcome fw-bold">Aviso Legal</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Ley aplicable y Jurisdicción</h3>
                        <p className="w-75 mx-auto">
                            La ley de protección de datos de la República de Colombia prevé adicionalmente los
                            siguientes derechos en cabeza de los titulares, a saber:
                            <ul>
                                <li>
                                    Solicitar prueba de la autorización otorgada al responsable del tratamiento salvo
                                    cuando expresamente se exceptúe como
                                    requisito para el tratamiento;
                                </li>
                                <li>
                                    Ser informado por el responsable del tratamiento, previa solicitud, respecto del uso
                                    que le
                                    ha dado a sus datos personales
                                </li>
                                <li>
                                    Presentar ante la Superintendencia de Industria y Comercio quejas por incumplimiento
                                    de
                                    la normatividad colombiana de protección de datos.
                                </li>
                            </ul>

                            Sin perjuicio de lo dispuesto en las Políticas de Privacidad, también podrás realizar
                            consultas y/o ejercer los derechos de acceso,
                            rectificación y supresión de tu Información Personal por correo postal a la Carrera 45 No.
                            26-85, Edificio Ciencia y Técnología, Universidad
                            Nacional de Colombia, Bogotá D.C., República de Colombia.
                            Atte.: Free-Lánzate.
                            <br/>
                            <br/>

                            Free-Lázante procesará cualquier consulta o reclamo en relación con la Información Personal
                            recopilada y procesada a través de
                            los medios habilitados para dichos fines conforme al procedimiento dispuesto en los
                            artículos 14 y 15 de la ley N° 1581 de 2012.
                            <br/>
                            <br/>
                            Las Políticas de Privacidad se regirán por las leyes de la República de Colombia.
                            Ante cualquier controversia o divergencia relacionada con la interpretación, validez,
                            celebración o cumplimiento de las mismas, tú y Mercado Libre declaran que se someten a la
                            jurisdicción exclusiva de los Tribunales competentes de la Ciudad de Bogotá, renunciando
                            expresamente a cualquier otro fuero y/o jurisdicción que pudiera corresponderles.
                            Los procedimientos se llevarán a cabo en idioma castellano.
                            <br/>
                            <br/>
                            La autoridad de aplicación en la República de Colombia en materia de protección de datos
                            personales es la Delegatura para la Protección de Datos Personales de la Superintendencia
                            de Industria y Comercio y las normas en materia de protección de datos son la <b>Ley 1581 de
                            2012</b>,
                            el <b>Decreto 1377 de 2013</b> y demás normas concordantes y las normas en materia de
                            reglamentación de datos y firmas digitales para la utilización
                            del comercio electrónico o e-commerce, la <b>ley 527 de 1999</b>.
                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        }
        if (info === "cookies") {
            return(
                <>
                    <h2 id="Cookies" className="welcome fw-bold">Aviso de Cookies</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Política de Cookies</h3>
                        <p className="w-75 mx-auto">
                            Los prestadores de servicios podrán utilizar dispositivos de almacenamiento y recuperación
                            de datos en equipos
                            terminales de los destinatarios, a condición de que los mismos hayan dado su consentimiento
                            después de que se les
                            haya facilitado información clara y completa sobre su utilización, en particular, sobre los
                            fines del tratamiento de los datos,
                            con arreglo a lo dispuesto en la <b>Ley Orgánica 15/1999</b>, de 13 de diciembre, de
                            protección de datos de carácter personal.
                            <br/>
                            <br/>
                            Cuando sea técnicamente posible y eficaz, el consentimiento del destinatario para aceptar el
                            tratamiento
                            de los datos podrá facilitarse mediante el uso de los parámetros adecuados del navegador o
                            de otras aplicaciones.
                            <br/>
                            <br/>
                            Lo anterior no impedirá el posible almacenamiento o acceso de índole técnica al solo fin de
                            efectuar
                            la transmisión de una comunicación por una red de comunicaciones electrónicas o, en la
                            medida que resulte
                            estrictamente necesario, para la prestación de un servicio de la sociedad de la información
                            expresamente solicitado por el destinatario.
                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        }
        if (info === "priv") {
            return(
                <>
                    <h2 id="Privacidad" className="welcome fw-bold">Declaración de Privacidad y Seguridad en la
                        Información</h2>
                    <div>
                        <h3 className="welcome1 fw-bold">Declaración de Privacidad </h3>
                        <p className="w-75 mx-auto">
                            En Free-Lánzate entendemos a la protección de los datos personales como una oportunidad para
                            generar valor
                            para nuestros usuarios. Haciendo un uso responsable de la información personal, no sólo
                            protegemos la privacidad
                            de quienes nos confiaron sus datos, sino que les permitimos operar con seguridad y confianza
                            en nuestro ecosistema.
                            <br/>
                            <br/>
                            Por ello, tu privacidad es muy importante para nosotros y nos esforzamos para protegerla.
                            <br/>
                            <br/>

                            Free-Lázante, con el fin de poder brindarte sus servicios, trata, recolecta y en algunos
                            casos revela
                            información sobre las personas que, como tú, son usuarios y visitantes del sitio webs,
                            conforme se detalla aquí
                            (las "Plataformas" y los "Servicios", respectivamente). Esta Declaración de Privacidad y
                            Confidencialidad de la
                            Información de Free-Lánzate (la "Declaración de Privacidad") describen la información que
                            Free-Lánzate recolecta y
                            trata sobre ti y lo que puede hacer con ella.
                            <br/>
                            <br/>

                            Esta Declaración de Privacidad forma parte de los Términos y Condiciones Generales de
                            Free-Lánzate.
                            Prestar tu consentimiento voluntario, expreso e informado a esta Declaración de Privacidad
                            es un requisito
                            esencial para poder contratar y/o tener cualquier tipo de relación con Free-Lánzate,
                            dependiendo de la legislación aplicable en cada país.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Cómo se integra Free-Lánzate con esta declaración?</h3>
                        <p className="w-75 mx-auto">
                            El objetivo de Free-Lánzate es democratizar el comercio, el dinero, los pagos, los envíos y
                            el crédito.
                            Por esta razón, es importante que tengas en cuenta que cuando te registras en cualquiera de
                            estas plataformas,
                            estás generando un usuario que te permitirá operar en todas las demás.
                            Para ello es necesario que tus datos sean compartidos entre todas las empresas aliadas de
                            Free-Lánzate que conforman las plataformas.
                            <br/>
                            <br/>
                            Esta Declaración de Privacidad aplica a todos los servicios y operaciones de tratamiento de
                            datos de Free-Lánzate.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Quién es el responsable del tratamiento de la información?</h3>
                        <p className="w-75 mx-auto">
                            Free-Lánzate es el responsable del tratamiento de los datos de los usuarios y de los
                            visitantes de sus Plataformas
                            a través de sus empresas subsidiarias o filiales.
                            <br/>
                            El responsable del tratamiento es quien decide sobre el tratamiento de los datos personales.
                            Para ello determina los fines o usos para los que se utilizará la información personal y los
                            medios
                            que serán utilizados para ese tratamiento.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">¿Qué información recolectamos?</h3>
                        <p className="w-75 mx-auto">
                            Free-Lánzate recolecta tu información personal para que puedas disfrutar de nuestros
                            servicios, y poder mejorarlos de manera continua.
                            <br/>
                            <br/>
                            En algunos casos, la información la facilitas tú mismo, al registrarte o al proveer
                            información cuando
                            utilizas alguno de nuestros servicios. En otros los recolectamos automáticamente, como
                            cuando navegas por nuestras páginas o;
                            utilizas nuestros servicios. También podemos recolectar información acerca tuyo de otras
                            fuentes confiables.
                            <br/>
                            <br/>
                            No tienes la obligación de proporcionarnos la información personal que se identificó
                            anteriormente,
                            sin embargo, este es un requisito esencial para poder contratar y/o tener cualquier tipo de
                            relación con Free-Lánzate y,
                            si no proporcionas esta información, no podremos brindarte nuestros servicios o nuestra
                            capacidad para hacerlo puede
                            verse significativamente obstaculizada. La inexactitud o falsedad de los datos personales
                            que proporciones podría causar
                            la suspensión de los Servicios. Asimismo, Free-Lánzate podrá suspender o inhabilitar
                            definitivamente a aquellos usuarios
                            que violen esta Declaración de Privacidad.
                        </p>
                        <hr className="separador"/>
                        <h3 className="welcome1 fw-bold">Seguridad en la información</h3>
                        <p className="w-75 mx-auto">
                            Free-Lánzate cumple con la normativa y los estándares de la industria en medidas de
                            seguridad aplicables a tu Información Personal.

                            Free-Lánzate no se hace responsable por interceptaciones ilegales o violación de sus
                            sistemas o bases de datos,
                            o por su utilización por parte de personas no autorizadas. Free-Lánzate tampoco se hace
                            responsable por la indebida
                            utilización de la información obtenida por esos medios.
                        </p>
                        <hr className="separador"/>
                    </div>
                </>
            )
        }
    }

  return (
    <div>
        <h1 className="welcome2 w-75 mx-auto fw-bold">Información legal</h1>
        <div className="submenu">
        <nav className="my-4 fw-bold w-100 d-flex">
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("tyc")}>Términos y condiciones</button>
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("legal")}>Aviso Legal</button>
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("cookies")}>Aviso de Cookies</button>
            <button className="btn rounded btn-primary fw-bold mx-auto" onClick={() => setInfo("priv")}>Declaración de privacidad</button>
        </nav>
        {
            result(info)
        }
        <Footer />
        </div>
    </div>
  )
}

export default Legal