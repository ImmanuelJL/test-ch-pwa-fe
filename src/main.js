import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from "@/components/Home"
import Admin from "@/components/Admin"
import AdminUpdate from "@/components/AdminUpdate"
import AdminOffice from "@/components/AdminOffice"
import AdminOfficeAdd from "@/components/AdminOfficeAdd"
import AdminOfficeUpdate from "@/components/AdminOfficeUpdate"
import AdminOfficeDashboard from "@/components/AdminOfficeDashboard"

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin
    },
    {
      path: "/admin-update",
      name: "AdminUpdate",
      component: AdminUpdate
    },
    {
      path: "/admin-office",
      name: "AdminOffice",
      component: AdminOffice
    },
    {
      path: "/admin-office-add",
      name: "AdminOfficeAdd",
      component: AdminOfficeAdd
    },
    {
      path: "/admin-office-update",
      name: "AdminOfficeUpdate",
      component: AdminOfficeUpdate
    },
    {
      path: "/admin-office-dashboard",
      name: "AdminOfficeDashboard",
      component: AdminOfficeDashboard
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: function(createElement){
        return createElement(App)
    }
}).$mount('#app')
