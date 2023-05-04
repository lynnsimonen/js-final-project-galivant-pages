import { createApp } from 'vue'
import App from './App.vue'
// import HomeView from "@/views/HomeView.vue";
//import TripDetailsView from "@/views/TripDetailsView.vue";
import router from './router'

createApp(App).use(router).mount('#app')

// const routes = [
//     {path: '/', component: HomeView },
//     {
//         path: '/trip-details',
//         component: TripDetailsView
//     }
// ]