//import vistas
import Home from './components/Home.vue'
import Pelicula from './components/Pelicula.vue'
import NotFound from './components/NotFound.vue'
import Acerca from './components/About.vue'

//exportamos las rutas
export const routes =[
    {path:'/',component:Home},
    {path:'/movie/:id',component:Pelicula},
    {path:'/about',component:Acerca},
	{path:'*',component:NotFound}
]