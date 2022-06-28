import Freelanzer from "./layouts/Freelanzer"
import Usuario from "./layouts/Usuario"

const routesUsuario = [
    
    {
        path: "/usuario",
        layout: Usuario,
    }
]

const routesFreelanzer = [
    
    {
        path: "/freelanzer",
        layout: Freelanzer,
    }
]

const routes = [...routesFreelanzer, ...routesUsuario]

export default routes