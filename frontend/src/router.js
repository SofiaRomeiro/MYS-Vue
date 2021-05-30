import VueRouter from 'vue-router';
import { HomeView, AboutView } from './views';


const routes = [
	{
		path: '/',
		component: HomeView,
		name: 'home',

	},
	{
		path: '/about',
		component: AboutView,
		name: 'about',

	},

];

const router = new VueRouter({
	mode: 'history',
	routes: routes
});

export default router;
