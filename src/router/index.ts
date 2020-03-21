import Vue from 'vue';
import VueRouter from 'vue-router';
import Bill from '@/views/Bill.vue';
import Label from '@/views/Label.vue';
import Money from '@/views/Money.vue';
import Notfound from '@/views/Notfound.vue';
import LabelEdict from '@/views/LabelEdict.vue';
import Bill from '@/views/Bill.vue';
Vue.use(VueRouter);

const routes = [
   {
        path: '/',
        redirect: '/money'
    },
    {
        path:'/money',
        component: Money
    },
    {
        path:'/statistics',
        component: Bill
    },
    {
        path:'/label',
        component: Label
    },
    {
        path:'/label/edict/:id',
        component: LabelEdict
    },
    {
        path:'/404',
        component: Notfound
    },
    {
        path:'*',
        component: Notfound
    },


];


const router = new VueRouter({
    routes
});

export default router;
