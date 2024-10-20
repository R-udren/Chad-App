import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/portfolio', name: 'Portfolio', component: Portfolio},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;