//import vistas
import Home from './components/Home.vue'
import Pelicula from './components/Pelicula.vue'
import NotFound from './components/NotFound.vue'

//exportamos las rutas
export const routes =[
    {path:'/',component:Home},
    {path:'/pelicula',component:Pelicula},
	{path:'*',component:NotFound}
]