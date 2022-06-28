import Anuncios from "./views/Anuncios"
import Buscar from "./views/Buscar"
import Categoria from "./components/buscar/Categoria"
import Carrito from "./views/Carrito"
import Ordenes from "./views/Ordenes"
import Perfil from "./views/Perfil"
import Recomendaciones from "./views/Recomendaciones"
import ExtraInfo from "./views/ExtraInfo"
import Tarifas from "./views/Tarifas";
import Ventas from "./views/Ventas"

const routesSidebar = [
    {
        path: 'buscar',
        component: Buscar,
    },
    {
        path: 'perfil',
        component: Perfil,
    },
    {
        path: 'ordenes',
        component: Ordenes,
    },
    {
        path: 'recomendaciones',
        component: Recomendaciones,
    },
    {
        path: 'carrito',
        component: Carrito,
    },
    {
        path: 'anuncio',
        component: Anuncios,
    },
    {
        path: 'tarifa',
        component: Tarifas,
    },
    {
        path: 'buscarcategoria',
        component: Categoria
    },
    {
        path: '',
        component: Perfil,
    },
    {
        path: 'informacionExtra',
        component: ExtraInfo,
    },
    {
        path: 'misVentas',
        component: Ventas,
    }
]
    


const internalRoutes = [...routesSidebar]

export default internalRoutes