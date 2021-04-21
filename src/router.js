import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Getfood from './pages/Getfood';
import Buy from './pages/Buy';
import Restaurantpage from './pages/Restaurantpage';
import Checkout from './pages/Checkout'

const routes = [
  {path:'/',component: Home },
  {path:'/About',component: About },
  {path:'/Contact',component: Contact},
  {path:'/Buy',component: Buy},
  {path:'/Getfood',component: Getfood},
  {path:'/Restaurantpage', component: Restaurantpage},
  {path:'/Checkout', component: Checkout}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router