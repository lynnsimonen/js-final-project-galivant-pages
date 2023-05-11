import { createApp } from 'vue'
import App from './App.vue'
// import HomeView from "@/views/HomeView.vue";
//import TripDetailsView from "@/views/TripDetailsView.vue";
import router from './router'

createApp(App).use(router).mount('#app')

// see Vue router instructions for this section
// const routes = [
//     {path: '/', component: HomeView },
//     {
//         path: '/photo-group',
//         component: TripDetailsView
//     }
// ]